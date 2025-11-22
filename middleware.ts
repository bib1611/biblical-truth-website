import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect /war-room routes
    if (pathname.startsWith('/war-room')) {
        // Check for auth cookie
        const authCookie = request.cookies.get('auth');

        // If not authenticated, redirect to login
        if (!authCookie || authCookie.value !== 'true') {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        // Note: Membership check happens in the layout.tsx client-side
        // because we need to query the database with the user's email
        // and middleware doesn't have easy access to the database
    }

    // Redirect old /hub routes to /war-room
    if (pathname.startsWith('/hub')) {
        const newPath = pathname.replace('/hub', '/war-room');
        return NextResponse.redirect(new URL(newPath, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/war-room/:path*',
        '/hub/:path*',
    ],
};
