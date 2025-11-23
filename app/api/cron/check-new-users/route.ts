import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const sql = neon(process.env.POSTGRES_URL!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
    try {
        // Security: Only allow Vercel Cron or manual trigger with secret
        const authHeader = request.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 1. Get all users created in the last 24 hours
        const newUsers = await sql`
      SELECT id, email, created_at 
      FROM users 
      WHERE created_at > NOW() - INTERVAL '24 hours'
      ORDER BY created_at DESC
    `;

        if (newUsers.length === 0) {
            return NextResponse.json({ message: 'No new users to contact', checked: 0 });
        }

        // 2. Check which users have already been contacted by Sam
        const contacted: string[] = [];
        for (const user of newUsers) {
            const existing = await sql`
        SELECT id FROM crm_logs 
        WHERE email = ${user.email} 
        AND direction = 'outbound'
        AND subject LIKE '%Welcome%'
        LIMIT 1
      `;

            if (existing.length > 0) {
                contacted.push(user.email);
            }
        }

        // 3. Filter out already contacted users
        const usersToContact = newUsers.filter(u => !contacted.includes(u.email));

        if (usersToContact.length === 0) {
            return NextResponse.json({
                message: 'All new users already contacted',
                total_new: newUsers.length,
                already_contacted: contacted.length
            });
        }

        // 4. Send proactive check-in to each new user
        const results = [];
        for (const user of usersToContact) {
            const emailBody = `Hey there!

I'm Sam, Adam's AI agent for The Biblical Man. I noticed you just joined the War Room - welcome, brother!

Quick check-in: Were you able to log in and access everything?

→ Login here: https://www.thebiblicalmantruth.com/login
→ Use the email: ${user.email}
→ Password is in your "ACCESS GRANTED" email (check spam if you don't see it)

If you're having ANY trouble getting in, just reply to this email and I'll help you out immediately. I'm here 24/7.

What you have access to:
✓ 24/7 Final Fight Bible Radio
✓ Tactical Library (dozens of guides)
✓ Deep Bible Study Tools
✓ 12,000+ Member Community

Let me know if you need anything.

- Sam (Adam's AI Agent)
The Biblical Man`;

            try {
                await resend.emails.send({
                    from: 'Sam (AI Agent) <sam@thebiblicalmantruth.com>',
                    to: user.email,
                    subject: 'Welcome to the War Room - Need Help Getting In?',
                    text: emailBody,
                    replyTo: 'sam@thebiblicalmantruth.com'
                });

                // Log to CRM
                await sql`
          INSERT INTO crm_logs (email, direction, subject, content, pain_points, opportunities, sentiment_score)
          VALUES (
            ${user.email}, 
            'outbound', 
            'Welcome to the War Room - Need Help Getting In?', 
            ${emailBody},
            ${[]},
            ${['onboarding', 'support']},
            10
          )
        `;

                results.push({ email: user.email, status: 'sent' });
            } catch (error) {
                console.error(`Failed to send to ${user.email}:`, error);
                results.push({ email: user.email, status: 'failed', error: String(error) });
            }
        }

        return NextResponse.json({
            success: true,
            total_new_users: newUsers.length,
            already_contacted: contacted.length,
            newly_contacted: usersToContact.length,
            results
        });

    } catch (error: any) {
        console.error('Cron Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
