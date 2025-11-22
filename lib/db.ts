import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL!);

// ========== EXISTING FUNCTIONS (MODIFIED TO RETURN ID) ==========
export async function createUser(email: string, passwordHash: string) {
    try {
        const result = await sql`
      INSERT INTO users (email, password, status)
      VALUES (${email}, ${passwordHash}, 'active')
      ON CONFLICT (email) DO UPDATE SET status = 'active'
      RETURNING id;
    `;
        return result.rows[0];
    } catch (error) {
        console.error('Failed to create user:', error);
        return null;
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

// ========== NEW MEMBERSHIP FUNCTIONS ==========

/**
 * Creates a membership record for a user
 * Called by Stripe webhook after successful payment
 */
export async function createMembership(
    userId: number,
    membershipType: string = 'gate_pass',
    stripeSessionId?: string
) {
    try {
        await sql`
      INSERT INTO memberships (user_id, membership_type, status, stripe_session_id)
      VALUES (${userId}, ${membershipType}, 'active', ${stripeSessionId || null})
      ON CONFLICT (user_id, membership_type)
      DO UPDATE SET status = 'active', stripe_session_id = ${stripeSessionId || null};
    `;
        return true;
    } catch (error) {
        console.error('Failed to create membership:', error);
        return false;
    }
}

/**
 * Checks if a user has an active gate pass membership
 * Used by middleware and route protection
 */
export async function userHasGatePass(userId: number): Promise<boolean> {
    try {
        const { rows } = await sql`
      SELECT * FROM memberships
      WHERE user_id = ${userId}
      AND membership_type = 'gate_pass'
      AND status = 'active'
      LIMIT 1;
    `;
        return rows.length > 0;
    } catch (error) {
        console.error('Failed to check membership:', error);
        return false;
    }
}

/**
 * Checks if email has an active gate pass (for simpler cookie-based auth)
 */
export async function emailHasGatePass(email: string): Promise<boolean> {
    try {
        const { rows } = await sql`
      SELECT m.* FROM memberships m
      JOIN users u ON u.id = m.user_id
      WHERE u.email = ${email}
      AND m.membership_type = 'gate_pass'
      AND m.status = 'active'
      LIMIT 1;
    `;
        return rows.length > 0;
    } catch (error) {
        console.error('Failed to check membership by email:', error);
        return false;
    }
}

/**
 * Get user by ID (needed for middleware checks)
 */
export async function getUserById(userId: number) {
    try {
        const { rows } = await sql`SELECT * FROM users WHERE id=${userId}`;
        return rows[0];
    } catch (error) {
        console.error('Failed to fetch user by ID:', error);
        return null;
    }
}

/**
 * Get user's membership details
 */
export async function getUserMembership(userId: number) {
    try {
        const { rows } = await sql`
      SELECT * FROM memberships
      WHERE user_id = ${userId}
      AND membership_type = 'gate_pass'
      ORDER BY created_at DESC
      LIMIT 1;
    `;
        return rows[0] || null;
    } catch (error) {
        console.error('Failed to fetch membership:', error);
        return null;
    }
}
