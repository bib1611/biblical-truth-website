import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { createUser, createMembership } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(request: NextRequest) {
    let body: string;
    let sig: string | null;

    try {
        body = await request.text();
        sig = request.headers.get('stripe-signature');
    } catch (err: any) {
        console.error('Failed to read request:', err);
        return NextResponse.json({ error: 'Failed to read request' }, { status: 400 });
    }

    // Validate required configuration
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        console.error('STRIPE_WEBHOOK_SECRET is not set');
        // Return 200 to prevent Stripe from retrying - this is a config issue, not transient
        return NextResponse.json({ received: true, warning: 'Webhook secret not configured' });
    }

    if (!sig) {
        return NextResponse.json({ error: 'No signature' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // Event received and verified - from here we MUST return 200 to prevent retries
    // All processing errors are logged but don't cause 500s
    try {
        if (event.type === 'checkout.session.completed') {
            await handleCheckoutSessionCompleted(event);
        }
        // Add other event types here as needed
    } catch (err: any) {
        // Log the error but return 200 to acknowledge receipt
        // This prevents Stripe from disabling the webhook due to repeated failures
        console.error(`Error processing ${event.type} event ${event.id}:`, err);
    }

    return NextResponse.json({ received: true });
}

async function handleCheckoutSessionCompleted(event: Stripe.Event) {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email || session.customer_details?.email;

    if (!email) {
        console.log('No email found in session for checkout.session.completed event.');
        return;
    }

    // 1. Generate a unique password
    // Format: Warrior + 4 random digits (e.g., Warrior4821)
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const password = `Warrior${randomDigits}`;

    // 2. Save to Database
    const userResult = await createUser(email, password);

    if (!userResult) {
        console.error(`Failed to create user in DB for ${email}`);
        return;
    }

    // 3. Create membership record
    const userId = userResult.id;
    const membershipCreated = await createMembership(
        userId,
        'gate_pass',
        session.id
    );

    if (!membershipCreated) {
        console.error(`Failed to create membership for user ${userId}`);
    }

    // 4. Send Email
    if (!resend) {
        console.log('Resend not configured, skipping email.');
        return;
    }

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
          `,
        });
        console.log(`Access email sent to ${email}`);
    } catch (emailError) {
        console.error('Failed to send access email:', emailError);
    }
}
