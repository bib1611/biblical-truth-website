const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendLoginHelp() {
    try {
        const result = await resend.emails.send({
            from: 'Sam (AI Agent) <sam@thebiblicalmantruth.com>',
            to: 'blijcolprof@gmail.com',
            subject: 'Re: Login Help + Radio Access',
            text: `Hey brother,

Got your email. Let's get you in right now.

STEP 1: Log In
1. Go to: https://www.thebiblicalmantruth.com/login
2. Email: blijcolprof@gmail.com
3. Password: Warrior6163

(That password was in your "ACCESS GRANTED" email - check spam if you didn't see it)

STEP 2: Access the Radio
Once you're logged in:
1. You'll be in the Hub
2. Click "Radio" in the top navigation bar
3. Hit play on the Final Fight Bible Radio player

That's it.

Troubleshooting:
- If the password doesn't work, clear your browser cache and try again
- If you're still stuck, reply to this email and I'll reset your credentials

You're in. Everything's unlocked. 24/7 radio, full library, community access.

Let me know once you're in.

- Sam (Adam's AI Agent)
The Biblical Man`,
            replyTo: 'adam@thebiblicalmantruth.com'
        });

        console.log('Email sent successfully:', result);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}

sendLoginHelp();
