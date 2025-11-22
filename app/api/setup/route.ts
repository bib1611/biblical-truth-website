import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

export async function GET() {
    try {
        // Existing users table
        await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

        // NEW: Memberships table for tracking gate pass
        await sql`
      CREATE TABLE IF NOT EXISTS memberships (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        membership_type VARCHAR(50) DEFAULT 'gate_pass',
        status VARCHAR(50) DEFAULT 'active',
        stripe_session_id VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP WITH TIME ZONE,
        UNIQUE(user_id, membership_type)
      );
    `;

        // Create index for faster lookups
        await sql`
      CREATE INDEX IF NOT EXISTS idx_memberships_user_id ON memberships(user_id);
    `;

        return NextResponse.json({
            message: 'Database initialized successfully',
            tables: ['users', 'memberships']
        });
    } catch (error) {
        console.error('Database setup error:', error);
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
