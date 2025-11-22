'use client';

import Link from 'next/link';

export default function RadioPage() {
    return (
        <>
            <header className="mb-8">
                <Link href="/hub" className="text-amber-500 text-sm font-bold mb-4 inline-block hover:underline">
                    ← BACK TO DASHBOARD
                </Link>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">FINAL FIGHT BIBLE RADIO</h1>
                <p className="text-gray-400">24/7 uncompromising biblical teaching</p>
            </header>

            <div className="max-w-4xl mx-auto">
                {/* Player Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    {/* RadioBOSS Player Embed */}
                    <div className="aspect-video bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/20 flex items-center justify-center relative">
                        <iframe
                            src="https://cp.rbx.ovh/widgets/player/?stream=ffbr&tt=0"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            scrolling="no"
                            allowFullScreen
                            title="Final Fight Bible Radio"
                        ></iframe>
                    </div>

                    {/* Info Section */}
                    <div className="p-8 bg-slate-900/50">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl">
                                📻
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-white mb-2">Now Playing: Final Fight Bible Radio</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    24/7 verse-by-verse KJV teaching. No prosperity gospel. No watered-down theology. Just what Scripture actually says.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                <div className="text-2xl mb-2">🎙️</div>
                                <h3 className="font-bold text-white mb-1 text-sm">Live Teaching</h3>
                                <p className="text-xs text-gray-400">Genesis to Revelation</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                <div className="text-2xl mb-2">📖</div>
                                <h3 className="font-bold text-white mb-1 text-sm">KJV 1611</h3>
                                <p className="text-xs text-gray-400">Uncompromising truth</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                <div className="text-2xl mb-2">⚔️</div>
                                <h3 className="font-bold text-white mb-1 text-sm">No Fluff</h3>
                                <p className="text-xs text-gray-400">Tactical. Biblical.</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                Members enjoy unlimited listening. Stream anywhere, anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Access */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <Link
                        href="/hub/library"
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-4xl">📚</div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors mb-1">
                                    Browse Library
                                </h3>
                                <p className="text-sm text-gray-400">Tactical guides & resources</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    <Link
                        href="/hub/community"
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-4xl">👥</div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors mb-1">
                                    Join Community
                                </h3>
                                <p className="text-sm text-gray-400">Connect with other warriors</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
