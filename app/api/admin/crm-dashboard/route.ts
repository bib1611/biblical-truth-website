import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');

        if (key !== 'BiblicalTruth2025') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const email = searchParams.get('email');

        let logs;
        if (email) {
            // Get all logs for a specific email
            logs = await sql`
        SELECT * FROM crm_logs 
        WHERE email = ${email}
        ORDER BY created_at DESC
      `;
        } else {
            // Get recent logs (last 100)
            logs = await sql`
        SELECT * FROM crm_logs 
        ORDER BY created_at DESC
        LIMIT 100
      `;
        }

        // Calculate insights
        const painPointsMap: { [key: string]: number } = {};
        const opportunitiesMap: { [key: string]: number } = {};
        let totalSentiment = 0;
        let sentimentCount = 0;

        logs.forEach((log: any) => {
            // Count pain points
            if (log.pain_points && Array.isArray(log.pain_points)) {
                log.pain_points.forEach((pp: string) => {
                    painPointsMap[pp] = (painPointsMap[pp] || 0) + 1;
                });
            }

            // Count opportunities
            if (log.opportunities && Array.isArray(log.opportunities)) {
                log.opportunities.forEach((opp: string) => {
                    opportunitiesMap[opp] = (opportunitiesMap[opp] || 0) + 1;
                });
            }

            // Average sentiment
            if (log.sentiment_score) {
                totalSentiment += log.sentiment_score;
                sentimentCount++;
            }
        });

        const topPainPoints = Object.entries(painPointsMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([point, count]) => ({ point, count }));

        const topOpportunities = Object.entries(opportunitiesMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([opportunity, count]) => ({ opportunity, count }));

        const avgSentiment = sentimentCount > 0 ? (totalSentiment / sentimentCount).toFixed(1) : 'N/A';

        return NextResponse.json({
            total_interactions: logs.length,
            average_sentiment: avgSentiment,
            top_pain_points: topPainPoints,
            top_opportunities: topOpportunities,
            recent_logs: logs.slice(0, 20) // Return last 20 for quick view
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
