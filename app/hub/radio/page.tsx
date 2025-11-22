'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function RadioPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

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
                    {/* Custom Audio Player */}
                    <div className="bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/20 p-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">📻</div>
                                <h2 className="text-3xl font-black text-white mb-2">Final Fight Bible Radio</h2>
                                <p className="text-gray-300">24/7 uncompromising KJV teaching</p>
                            </div>

                            {/* Audio Player Controls */}
                            <div className="bg-slate-950/80 rounded-xl p-6 border border-white/10">
                                <div className="flex items-center justify-center gap-6">
                                    <button
                                        onClick={togglePlay}
                                        className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all shadow-lg shadow-amber-500/30 hover:scale-105"
                                    >
                                        {isPlaying ? (
                                            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <div className="mt-6 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                                        <p className="text-sm font-semibold text-gray-400">
                                            {isPlaying ? 'LIVE - NOW PLAYING' : 'Ready to stream'}
                                        </p>
                                    </div>
                                    <p className="text-white font-bold text-lg">Final Fight Bible Radio</p>
                                    <p className="text-gray-400 text-sm">Verse-by-verse biblical teaching</p>
                                </div>

                                <audio
                                    ref={audioRef}
                                    src="https://c13.radioboss.fm:8639/stream"
                                    preload="none"
                                />
                            </div>
                        </div>
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
