import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export async function GET() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS email_drafts (
        id SERIAL PRIMARY KEY,
        sender_email TEXT NOT NULL,
        subject TEXT,
        body_text TEXT,
        ai_draft TEXT,
        status TEXT DEFAULT 'pending', -- pending, approved, sent
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        return NextResponse.json({ success: true, message: 'Table email_drafts created' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
