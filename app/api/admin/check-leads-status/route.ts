import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');

        if (key !== process.env.CRON_SECRET && key !== 'BiblicalTruth2025') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 1. Get all leads
        const leads = await sql`SELECT email, source, created_at FROM leads ORDER BY created_at DESC`;

        // 2. Check status for each
        const results = [];
        for (const lead of leads) {
            const userCheck = await sql`SELECT id, status FROM users WHERE email = ${lead.email}`;
            const isMember = userCheck.length > 0;

            results.push({
                email: lead.email,
                source: lead.source,
                created_at: lead.created_at,
                is_member: isMember,
                status: isMember ? userCheck[0].status : 'abandoned_cart'
            });
        }

        return NextResponse.json({ results });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
