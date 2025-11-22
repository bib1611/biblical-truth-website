'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // EMERGENCY CLIENT-SIDE OVERRIDE
            // This ensures admin can always get in even if API/DB is acting up
            if (email.trim().toLowerCase() === 'adam@thebiblicalmantruth.com' && password.trim() === 'Acts29!') {
                localStorage.setItem('biblical_user', 'true');
                document.cookie = "auth=true; path=/";
                router.push('/hub');
                return;
            }

            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.trim(),
                    password: password.trim()
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error('Login error:', data);
                setError(data.error || `Login failed: ${res.status}`);
                setIsLoading(false);
                return;
            }

            // Successful login
            localStorage.setItem('biblical_user', 'true');
            document.cookie = "auth=true; path=/";
            router.push('/hub');
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-black flex items-center justify-center px-6 pt-20">
                <div className="w-full max-w-md">
                    <div className="bg-[#111] border border-[#222] p-8 rounded-2xl shadow-2xl">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-black text-white mb-2">MEMBER ACCESS</h1>
                            <p className="text-[#666]">Enter the war room.</p>
                        </div>

                        {error && (
                            <div className="bg-[#DC143C]/10 border border-[#DC143C] text-[#DC143C] px-4 py-3 rounded mb-6 text-sm font-bold text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-[#666] uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black border border-[#333] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#FFD700] transition-colors"
                                    placeholder="warrior@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#666] uppercase tracking-wider mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black border border-[#333] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#FFD700] transition-colors"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#FFD700] text-black font-black py-4 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'AUTHENTICATING...' : 'ENTER THE HUB'}
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-[#444]">
                            <p>Not a member yet?</p>
                            <Link href="/vault" className="text-[#FFD700] hover:underline">
                                Get Access to The Vault
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
