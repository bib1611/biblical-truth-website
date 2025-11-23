import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export async function GET() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS crm_logs (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        direction TEXT NOT NULL, -- 'inbound' or 'outbound'
        subject TEXT,
        content TEXT,
        
        -- AI Analysis
        pain_points TEXT[], -- Array of identified pain points
        opportunities TEXT[], -- Array of sales opportunities
        sentiment_score INTEGER, -- 1-10 (1=Angry, 10=Raving Fan)
        summary TEXT,
        
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

        // Add an index on email for fast lookup
        await sql`CREATE INDEX IF NOT EXISTS idx_crm_email ON crm_logs(email);`;

        return NextResponse.json({ success: true, message: 'CRM tables created' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
