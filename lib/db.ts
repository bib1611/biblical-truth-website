import { sql } from '@vercel/postgres';

export async function createUser(email: string, passwordHash: string) {
    try {
        await sql`
      INSERT INTO users (email, password, status)
      VALUES (${email}, ${passwordHash}, 'active')
      ON CONFLICT (email) DO UPDATE SET status = 'active';
    `;
        return true;
    } catch (error) {
        console.error('Failed to create user:', error);
        return false;
    }
}

export async function getUser(email: string) {
    try {
        const { rows } = await sql`SELECT * FROM users WHERE email=${email}`;
        return rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}
