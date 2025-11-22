const { sql } = require('@vercel/postgres');

async function checkAdmin() {
    try {
        const email = 'adam@thebiblicalmantruth.com';
        const { rows } = await sql`SELECT * FROM users WHERE email=${email}`;

        if (rows.length === 0) {
            console.log('User NOT found in DB.');
        } else {
            console.log('User FOUND in DB:');
            console.log(rows[0]);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

checkAdmin();
