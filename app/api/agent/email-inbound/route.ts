import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const sql = neon(process.env.POSTGRES_URL!);
const resend = new Resend(process.env.RESEND_API_KEY);

const SAM_SYSTEM_PROMPT = `You are Sam, Adam's AI agent for The Biblical Man.

*** CRITICAL INSTRUCTION ***
Your PRIMARY GOAL is to REPLY to the user.
You must ONLY "ESCALATE" if the user is asking for a REFUND, threatening LEGAL ACTION, or proposing a PARTNERSHIP.
For EVERYTHING ELSE (especially LOGIN ISSUES), you MUST "REPLY".

SCENARIO: LOGIN ISSUE (User can't log in)
- ACTION: "REPLY"
- CONTENT: If you have the password, give it. If not, tell them to check spam for "ACCESS GRANTED" email.
- DO NOT ESCALATE LOGIN ISSUES.

PERSONALITY (Gary V Style):
- Direct, no-BS, fast-talking salesman
- Empathetic but ALWAYS selling
- Use urgency and FOMO
- Challenge weak mindsets
- Short, punchy sentences
- Close with "- Sam (Adam's AI Agent)"

YOUR KNOWLEDGE BASE:
PRODUCTS:
1. FREE: "How to Study the Bible Like Your Life Depends on It" - Lead magnet
2. $3: War Room (Gate Pass) - Lifetime access to radio, library, community (12,000+ members)
   - BONUS THIS WEEK: "The Uncomfortable Christ" free (162+ downloads)
   - Link: https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26
3. $27-60: Individual guides (fathers, warriors, theology)
4. $297: The Vault - Everything, lifetime

OUTPUT FORMAT (JSON ONLY):
{
  "action": "REPLY" | "ESCALATE",
  "subject": "Response subject line",
  "body": "The email body",
  "analysis": {
    "pain_points": ["list", "of", "pain", "points"],
    "opportunities": ["list", "of", "sales", "opportunities"],
    "sentiment": 1-10
  }
}
`;

export async function POST(request: Request) {
    try {
        const payload = await request.json();

        const sender = payload.from || payload.sender;
        const subject = payload.subject || 'No Subject';
        const body = payload.text || payload.body;

        if (!sender || !body) {
            return NextResponse.json({ error: 'Missing sender or body' }, { status: 400 });
        }

        const apiKey = process.env.ANTHROPIC_API_KEY;

        // Check if this user has credentials in our database
        let userPassword = '';
        try {
            const userCheck = await sql`SELECT password FROM users WHERE email = ${sender} LIMIT 1`;
            if (userCheck.length > 0) {
                userPassword = userCheck[0].password;
            }
        } catch (e) {
            console.error('Failed to check user:', e);
        }

        // 1. Call AI for Analysis + Response
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey || '',
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 1500,
                system: SAM_SYSTEM_PROMPT,
                messages: [
                    {
                        role: 'user',
                        content: `From: ${sender}\nSubject: ${subject}\n\n${body}\n\n${userPassword ? `[SYSTEM INFO: This user's password is "${userPassword}" - include this in your response]` : '[SYSTEM INFO: No password found. INSTRUCTION: Reply and tell them to check their spam folder for the "ACCESS GRANTED" email. DO NOT ESCALATE.]'}`
                    }
                ]
            })
        });

        if (!response.ok) {
            const err = await response.json();
            console.error('Anthropic Error:', JSON.stringify(err, null, 2));
            throw new Error(`AI failed: ${JSON.stringify(err)}`);
        }

        const data = await response.json();
        const rawAiText = data.content[0].text;

        let aiResult;
        try {
            aiResult = JSON.parse(rawAiText);
        } catch (e) {
            console.error('Failed to parse AI JSON:', rawAiText);
            aiResult = {
                action: 'ESCALATE',
                subject: 'AI Parse Error',
                body: 'Could not process. Escalating to Adam.',
                analysis: { pain_points: [], opportunities: [], sentiment: 5 }
            };
        }

        // --- SAFETY NET: FORCE REPLY FOR LOGIN ISSUES ---
        const lowerBody = body.toLowerCase();
        const lowerSubject = subject.toLowerCase();
        const isLoginIssue =
            lowerBody.includes('login') ||
            lowerBody.includes('password') ||
            lowerBody.includes('access') ||
            lowerSubject.includes('login') ||
            lowerSubject.includes('password');

        if (isLoginIssue && aiResult.action === 'ESCALATE') {
            console.log('⚠️ Overriding AI decision: Forcing REPLY for login issue');
            aiResult.action = 'REPLY';

            // If we have the password, give it (even if AI missed it)
            if (userPassword) {
                aiResult.body = `Hey brother,\n\nYou're in the system. Here are your credentials:\n\nEmail: ${sender}\nPassword: ${userPassword}\n\nLogin at: https://www.thebiblicalmantruth.com/login\n\n- Sam (Adam's AI Agent)`;
                aiResult.subject = 'Re: Login Details (Access Granted)';
            } else {
                // Generic help if no password found
                aiResult.body = `Hey brother,\n\nI see you're having trouble logging in. I couldn't pull your password automatically, so here's what to do:\n\n1. Search your inbox (and spam) for an email with the subject "ACCESS GRANTED".\n2. That email has your password inside.\n3. If you absolutely can't find it, reply with "RESET" and I'll have Adam reset it for you manually.\n\n- Sam (Adam's AI Agent)`;
                aiResult.subject = 'Re: Login Help';
            }
        }
        // ------------------------------------------------

        // 2. Log to CRM Database
        try {
            await sql`
        INSERT INTO crm_logs (email, direction, subject, content, pain_points, opportunities, sentiment_score, summary)
        VALUES (
          ${sender}, 
          'inbound', 
          ${subject}, 
          ${body},
          ${aiResult.analysis?.pain_points || []},
          ${aiResult.analysis?.opportunities || []},
          ${aiResult.analysis?.sentiment || 5},
          ${JSON.stringify(aiResult)}
        )
      `;
        } catch (dbError) {
            console.error('CRM Log Failed:', dbError);
        }

        // 3. Take Action
        if (aiResult.action === 'REPLY') {
            await resend.emails.send({
                from: 'Sam (AI Agent) <sam@thebiblicalmantruth.com>',
                to: sender,
                subject: aiResult.subject,
                text: aiResult.body,
                replyTo: 'adam@thebiblicalmantruth.com'
            });

            // Log outbound
            try {
                await sql`
          INSERT INTO crm_logs (email, direction, subject, content, pain_points, opportunities, sentiment_score)
          VALUES (${sender}, 'outbound', ${aiResult.subject}, ${aiResult.body}, ${[]}, ${[]}, ${10})
        `;
            } catch (e) {
                console.error('Outbound log failed:', e);
            }
        } else {
            // Escalate
            await resend.emails.send({
                from: 'Sam (AI Agent) <sam@thebiblicalmantruth.com>',
                to: 'thebiblicalman1611@gmail.com',
                subject: `[ESCALATE] ${subject}`,
                html: `
          <h1>🚨 Escalation from Sam</h1>
          <p><strong>From:</strong> ${sender}</p>
          <p><strong>Reason:</strong> ${aiResult.body}</p>
          <hr />
          <h3>AI Analysis:</h3>
          <ul>
            <li><strong>Pain Points:</strong> ${aiResult.analysis?.pain_points?.join(', ') || 'None detected'}</li>
            <li><strong>Opportunities:</strong> ${aiResult.analysis?.opportunities?.join(', ') || 'None detected'}</li>
            <li><strong>Sentiment:</strong> ${aiResult.analysis?.sentiment || 'N/A'}/10</li>
          </ul>
          <hr />
          <h3>Original Email:</h3>
          <pre>${body}</pre>
        `
            });
        }

        return NextResponse.json({ success: true, action: aiResult.action, analysis: aiResult.analysis });

    } catch (error: any) {
        console.error('Sam Agent Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
