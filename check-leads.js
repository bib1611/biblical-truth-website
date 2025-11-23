const { neon } = require('@neondatabase/serverless');

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    console.error('DATABASE_URL is not defined');
    process.exit(1);
}

const sql = neon(databaseUrl);

async function checkLeads() {
    try {
        console.log('Checking for leads...');
        // First check if table exists to avoid error if it hasn't been created yet
        const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'leads'
      );
    `;

        if (!tableCheck[0].exists) {
            console.log('Leads table does not exist yet (no leads captured).');
            return;
        }

        const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`;

        if (leads.length === 0) {
            console.log('Leads table exists but is empty.');
        } else {
            console.log(`Found ${leads.length} leads:`);
            leads.forEach(lead => {
                console.log(`- ${lead.email} (Source: ${lead.source}) - ${new Date(lead.created_at).toLocaleString()}`);
            });
        }
    } catch (error) {
        console.error('Error querying leads:', error);
    }
}

checkLeads();
