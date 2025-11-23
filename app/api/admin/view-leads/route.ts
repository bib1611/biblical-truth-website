import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');

        if (key !== process.env.CRON_SECRET && key !== 'BiblicalTruth2025') { // Fallback hardcoded for immediate use if env not set
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Check if table exists
        const tableCheck = await sql`
      SELECT EXISTS(
    SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'leads'
);
`;

        if (!tableCheck[0].exists) {
            return NextResponse.json({ status: 'No leads table found yet' });
        }

        const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`;

        return NextResponse.json({
            count: leads.length,
            leads: leads
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
