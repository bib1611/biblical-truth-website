const { Resend } = require('resend');

// Check for API Key
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: RESEND_API_KEY is missing.');
    console.log('Usage: RESEND_API_KEY=re_123... node send-access-emails.js email1@example.com email2@example.com');
    process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

// Get emails from command line arguments
const emails = process.argv.slice(2);

if (emails.length === 0) {
    console.log('\x1b[33m%s\x1b[0m', 'No emails provided.');
    console.log('Usage: node send-access-emails.js email1@example.com email2@example.com');
    process.exit(0);
}

async function sendEmails() {
    console.log(`Preparing to send access emails to ${emails.length} recipients...`);

    for (const email of emails) {
        try {
            console.log(`Sending to ${email}...`);

            const data = await resend.emails.send({
                from: 'The Biblical Man <adam@biblicalman.com>',
                to: email,
                subject: 'ACCESS GRANTED: The Biblical Man Hub',
                html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000; color: #fff; padding: 40px;">
              <h1 style="color: #FFD700; font-size: 32px; font-weight: 900; margin-bottom: 20px; text-transform: uppercase;">Welcome to the War Room</h1>
              
              <p style="font-size: 18px; line-height: 1.6; color: #ccc; margin-bottom: 30px;">
                You have taken the step that most men refuse to take. You have chosen truth over comfort.
              </p>
              
              <div style="background-color: #111; border: 1px solid #333; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
                <h2 style="color: #fff; font-size: 20px; margin-top: 0; margin-bottom: 20px;">YOUR ACCESS CREDENTIALS</h2>
                
                <p style="margin-bottom: 10px;">
                  <strong style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Login URL:</strong><br>
                  <a href="https://www.thebiblicalmantruth.com/login" style="color: #FFD700; font-size: 16px;">https://www.thebiblicalmantruth.com/login</a>
                </p>
                
                <p style="margin-bottom: 10px;">
                  <strong style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email:</strong><br>
                  <span style="color: #fff; font-size: 16px;">${email}</span>
                </p>
                
                <p style="margin-bottom: 0;">
                  <strong style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Password:</strong><br>
                  <span style="color: #fff; font-size: 16px; font-family: monospace; background: #222; padding: 4px 8px; border-radius: 4px;">Acts29!</span>
                </p>
              </div>

              <p style="font-size: 16px; color: #888; margin-bottom: 30px;">
                Use the password above to access the Hub. Once inside, you can access the War Room, King's Radio, and the Armory.
              </p>
              
              <a href="https://www.thebiblicalmantruth.com/login" style="display: block; width: 100%; background-color: #FFD700; color: #000; text-align: center; padding: 20px 0; font-weight: 900; text-decoration: none; border-radius: 4px; text-transform: uppercase;">
                ENTER THE HUB
              </a>
              
              <p style="font-size: 14px; color: #444; margin-top: 40px; text-align: center;">
                If you have any issues, reply to this email.
              </p>
            </div>
        `
            });

            console.log('\x1b[32m%s\x1b[0m', `✓ Email sent to ${email}`);

        } catch (error) {
            console.error('\x1b[31m%s\x1b[0m', `✗ Failed to send to ${email}:`);
            console.error(error.message);
        }

        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

sendEmails();
