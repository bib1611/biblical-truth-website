'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FreePage() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setStatus('loading');
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.trim(),
                    source: 'x_bio_free_guide'
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="max-w-xl text-center space-y-8">
                    <div className="text-6xl">&#9876;</div>
                    <h1 className="text-4xl md:text-5xl font-serif text-white">
                        Check Your Inbox
                    </h1>
                    <p className="text-xl text-stone-400">
                        The guide is on its way. Welcome to the fight, brother.
                    </p>
                    <div className="pt-8 space-y-4">
                        <p className="text-stone-500">While you wait:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="px-6 py-3 border border-stone-700 text-white rounded hover:bg-stone-900 transition-colors"
                            >
                                Explore the Site
                            </Link>
                            <Link
                                href="/armory"
                                className="px-6 py-3 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors"
                            >
                                Browse the Armory
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
                <div className="max-w-2xl text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-block px-4 py-2 border border-amber-500/30 rounded-full">
                        <span className="text-amber-500 text-sm font-semibold">
                            FREE 40-PAGE GUIDE
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
                        The Submission Fraud:<br />
                        <span className="text-amber-500">What Scripture Actually Says</span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-xl text-stone-400 max-w-xl mx-auto">
                        Everything you&apos;ve been taught about biblical submission is incomplete.
                        This guide exposes the half-truths and gives you the full picture from Scripture.
                    </p>

                    {/* What You&apos;ll Learn */}
                    <div className="bg-stone-950 border border-stone-800 p-8 rounded-lg text-left max-w-lg mx-auto">
                        <h3 className="text-white font-bold mb-4 text-lg">What&apos;s Inside:</h3>
                        <ul className="space-y-3 text-stone-300">
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">&#10003;</span>
                                <span>The submission lie pastors won&apos;t address (and why)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">&#10003;</span>
                                <span>What Ephesians 5 actually says vs. what you&apos;ve been told</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">&#10003;</span>
                                <span>The biblical model of masculine leadership (not tyranny)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">&#10003;</span>
                                <span>How to lead your home without being a doormat OR a dictator</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">&#10003;</span>
                                <span>The KJV verses they skip over (and why they matter)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Email Capture Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-6 py-4 bg-stone-900 border border-stone-700 rounded text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors text-lg"
                            required
                            disabled={status === 'loading'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full px-6 py-4 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors text-lg disabled:opacity-50"
                        >
                            {status === 'loading' ? 'SENDING...' : 'SEND ME THE FREE GUIDE'}
                        </button>
                        {status === 'error' && (
                            <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
                        )}
                    </form>

                    <p className="text-stone-600 text-sm">
                        No spam. Unsubscribe anytime. Your email is safe.
                    </p>

                    {/* Social Proof */}
                    <div className="pt-8 border-t border-stone-800">
                        <p className="text-stone-500 text-sm mb-4">Joined by 40,000+ men who want the truth</p>
                        <div className="flex justify-center gap-8 text-stone-500">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">320K+</div>
                                <div className="text-xs uppercase tracking-wide">Downloads</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">12K+</div>
                                <div className="text-xs uppercase tracking-wide">Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">1M+</div>
                                <div className="text-xs uppercase tracking-wide">Monthly Reads</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-stone-950 py-16 px-4">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl font-serif text-white">
                        Who&apos;s Behind This?
                    </h2>
                    <p className="text-stone-400 leading-relaxed">
                        I&apos;m Adam. 44 years old. 5 kids. North Dakota. I haul trash for a living and wage war on lukewarm faith in my spare time.
                        I write what your pastor won&apos;t say because someone has to. This isn&apos;t a ministry. It&apos;s a mission.
                    </p>
                    <Link
                        href="/about"
                        className="inline-block text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        Read the full story &rarr;
                    </Link>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-black py-16 px-4 border-t border-stone-900">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-stone-500 mb-4">
                        Still on the fence? Start with the free Substack.
                    </p>
                    <Link
                        href="https://biblicalman.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-amber-500 transition-colors underline"
                    >
                        Read the latest article &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
}
