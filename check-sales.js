const Stripe = require('stripe');

// Check if key is provided
const key = process.env.STRIPE_SECRET_KEY;

if (!key) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: STRIPE_SECRET_KEY is missing.');
    console.log('Usage: STRIPE_SECRET_KEY=sk_live_... node check-sales.js');
    process.exit(1);
}

const stripe = new Stripe(key);

async function checkSales() {
    console.log('Checking for sales in the last 24 hours...');

    // Calculate timestamp for 24 hours ago
    const yesterday = Math.floor(Date.now() / 1000) - (24 * 60 * 60);

    try {
        // List checkout sessions completed in the last 24 hours
        const sessions = await stripe.checkout.sessions.list({
            created: { gte: yesterday },
            status: 'complete',
            limit: 100,
            expand: ['data.line_items']
        });

        const count = sessions.data.length;

        if (count === 0) {
            console.log('\x1b[33m%s\x1b[0m', 'No sales found in the last 24 hours.');
        } else {
            console.log('\x1b[32m%s\x1b[0m', `Found ${count} sale(s) in the last 24 hours!`);
            console.log('----------------------------------------');

            sessions.data.forEach((session, index) => {
                const amount = (session.amount_total / 100).toFixed(2);
                const email = session.customer_details?.email || session.customer_email || 'Unknown Email';
                const time = new Date(session.created * 1000).toLocaleString();

                console.log(`${index + 1}. ${email} - $${amount} (${session.currency.toUpperCase()})`);
                console.log(`   Time: ${time}`);
                console.log(`   Status: ${session.payment_status}`);
                console.log('----------------------------------------');
            });
        }

    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Error connecting to Stripe:');
        console.error(error.message);
    }
}

checkSales();
