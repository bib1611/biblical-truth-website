import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/db';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(request: NextRequest) {
    try {
        const { emails } = await request.json();

        if (!Array.isArray(emails)) {
            return NextResponse.json({ error: 'Emails must be an array' }, { status: 400 });
        }

        const results = [];

        for (const email of emails) {
            // 1. Generate unique password
            const randomDigits = Math.floor(1000 + Math.random() * 9000);
            const password = `Warrior${randomDigits}`;

            // 2. Create in DB
            const success = await createUser(email, password);

            let emailSent = false;
            if (success && resend) {
                // 3. Send Email
                try {
                    await resend.emails.send({
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
                  <span style="color: #fff; font-size: 16px; font-family: monospace; background: #222; padding: 4px 8px; border-radius: 4px;">${password}</span>
                </p>
              </div>

              <p style="font-size: 16px; color: #888; margin-bottom: 30px;">
                Use the password above to access the Hub.
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
                    emailSent = true;
                } catch (e) {
                    console.error(`Failed to send email to ${email}`, e);
                }
            }

            results.push({ email, success, emailSent, password });
        }

        return NextResponse.json({ results });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
    }
}
