import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

const sql = neon(process.env.POSTGRES_URL!);

export async function POST(request: Request) {
    try {
        const { email, source } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Try to insert into leads table
        // We'll create the table if it doesn't exist (simple migration for now)
        await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        source TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

        await sql`
      INSERT INTO leads (email, source)
      VALUES (${email}, ${source || 'unknown'});
    `;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error capturing lead:', error);
        // Return success anyway to not block the frontend flow
        return NextResponse.json({ success: true, warning: 'Failed to save to DB' });
    }
}
