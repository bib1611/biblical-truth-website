import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a conversion assistant for The Biblical Man, a direct-response biblical masculinity brand. Your job is to qualify visitors and guide them to the right product.

PERSONALITY:
- Direct, challenging, no-nonsense
- Use biblical references when relevant
- Don't coddle or validate weak excuses
- Create urgency and clarity
- Qualify leads by asking about their current struggles

PRODUCT LADDER:
1. Free Guide ($0) - "Satan's 5 Deadliest Lies" - for curious visitors
2. Substack ($5/mo) - Weekly deep dives - for regular learners
3. Individual Guides ($15-60) - Targeted solutions - for specific problems
4. The Vault ($365) - Everything, lifetime access - for serious men

SALES STRATEGY:
- Start by understanding their problem (marriage? porn? weak faith? leadership?)
- Challenge comfortable Christianity mindset
- Present the product that fits their commitment level
- For serious problems → push The Vault ($365)
- For curious browsers → start with Free Guide
- Always create urgency: "How long will you stay comfortable?"

CONVERSION TACTICS:
- Use social proof: "20K+ men have made this choice"
- Cost comparison: "$365 is less than what your porn addiction costs you"
- Binary choices: "You're either serious or you're not"
- Time pressure: "Every day you wait is another day of weakness"

When recommending products, always include the direct link:
- Free Guide: #free-guide (scroll to form)
- Substack: https://biblicalman.substack.com
- Products: /products
- The Vault: /vault

Keep responses under 100 words. Be direct. Push for the sale.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;

    console.log('Received messages:', messages.length);

    // For now, always use fallback until model access is confirmed
    console.log('Using smart fallback responses');
    return NextResponse.json({
      message: getFallbackResponse(messages)
    });

    /* Disabled until model access confirmed
    if (!apiKey) {
      console.log('No API key, using fallback');
      // Fallback responses when API key not configured
      return NextResponse.json({
        message: getFallbackResponse(messages[messages.length - 1].content)
      });
    }
    */

    // Filter out system messages and only include user/assistant
    const apiMessages = messages
      .filter((msg: Message) => msg.role === 'user' || msg.role === 'assistant')
      .map((msg: Message) => ({
        role: msg.role,
        content: msg.content
      }));

    console.log('Calling Anthropic API with', apiMessages.length, 'messages');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: apiMessages
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anthropic API error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.content[0].text;

    console.log('AI response received');
    return NextResponse.json({ message: assistantMessage });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({
      message: "I'm having trouble connecting right now. Let me ask directly: what's your biggest struggle? Marriage? Sexual purity? Spiritual growth? Tell me and I'll point you to the right resource."
    }, { status: 500 });
  }
}

function getFallbackResponse(messages: Message[]): string {
  const userMessage = messages[messages.length - 1].content;
  const lower = userMessage.toLowerCase();

  // Handle greetings and simple messages
  if (lower === 'hello' || lower === 'hi' || lower === 'hey' || lower.includes('what can you')) {
    return "I help men find the truth they've been avoiding. What's the real reason you're here? Struggling with marriage? Porn? Weak faith? Tell me the truth.";
  }

  if (lower.includes('help') || lower.includes('need')) {
    return "Most men who come here are dealing with one of three things: marriage problems, sexual sin, or spiritual weakness. Which one brought you here?";
  }

  // Detect intent and provide targeted responses
  if (lower.includes('porn') || lower.includes('lust') || lower.includes('addiction')) {
    return "Sexual purity isn't about willpower—it's about identity. The Vault has the complete framework. $365 one-time. Less than you've spent on shame. Ready? → /vault";
  }

  if (lower.includes('marriage') || lower.includes('wife') || lower.includes('relationship')) {
    return "Weak men blame their wives. Strong men lead. You need the Marriage & Authority guide or the full Vault if you're serious. Which one? → /products";
  }

  if (lower.includes('faith') || lower.includes('spiritual') || lower.includes('church')) {
    return "Comfortable Christianity created this mess. Real biblical masculinity costs everything. Start with the free guide or go all-in with The Vault ($365). Which level of commitment? → #free-guide";
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('expensive') || lower.includes('$')) {
    return "$365 is less than 3 months of therapy. Less than your porn addiction has cost you. Less than another year of weakness. The Vault is lifetime access to everything. Worth it? → /vault";
  }

  if (lower.includes('free') || lower.includes('start')) {
    return "Start with 'Satan's 5 Deadliest Lies'—free guide. Then decide if you're serious enough for The Vault ($365). Get the guide here → #free-guide";
  }

  // Default qualifying question
  return "What's the biggest area where you're failing right now? Marriage? Sexual purity? Spiritual leadership? Tell me and I'll show you the fastest path forward.";
}
