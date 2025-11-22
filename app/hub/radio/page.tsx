'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RadioPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showSignupWall, setShowSignupWall] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
    const audioRef = useRef<HTMLAudioElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Final Fight Bible Radio stream URL
    // Try multiple stream URLs as fallback
    const STREAM_URL = 'http://stream.radio.co/s3ee3322e0/listen';

    useEffect(() => {
        // Start timer when playing
        if (isPlaying && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        setShowSignupWall(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isPlaying, timeRemaining]);

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

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <audio ref={audioRef} src={STREAM_URL} />

            <header className="mb-12">
                <Link href="/hub" className="text-yellow-500 text-sm font-bold mb-4 inline-block hover:underline">
                    ← BACK TO DASHBOARD
                </Link>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">FINAL FIGHT BIBLE RADIO</h1>
                <p className="text-gray-400">24/7 uncompromising biblical teaching</p>
            </header>

            <div className="max-w-4xl mx-auto">
                {/* Player Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Album Art / Visualizer */}
                    <div className="aspect-video bg-gradient-to-br from-gray-900 via-yellow-900/20 to-orange-900/20 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

                        {/* Play/Pause Button */}
                        <button
                            onClick={togglePlay}
                            className="relative w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-2xl z-10"
                        >
                            {isPlaying ? (
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                </svg>
                            ) : (
                                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>

                        {/* Live Indicator */}
                        {isPlaying && (
                            <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-bold">LIVE</span>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white mb-1">Final Fight Bible Radio</h2>
                            <p className="text-gray-400">Live Stream</p>
                        </div>

                        {/* Free Trial Timer */}
                        {!showSignupWall && timeRemaining > 0 && (
                            <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-yellow-500 font-semibold">Free Preview Time:</span>
                                    <span className="text-yellow-500 text-xl font-black">{formatTime(timeRemaining)}</span>
                                </div>
                            </div>
                        )}

                        {/* Signup Wall */}
                        {showSignupWall && (
                            <div className="mb-6 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/50 rounded-xl text-center">
                                <h3 className="text-xl font-black text-white mb-2">Want to keep listening?</h3>
                                <p className="text-gray-300 mb-4">Get unlimited access for just $3</p>
                                <a
                                    href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                                    className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-black px-8 py-3 rounded-lg hover:scale-105 transition-transform"
                                >
                                    GET ACCESS NOW ($3)
                                </a>
                            </div>
                        )}

                        {/* Volume / Info */}
                        <div className="text-sm text-gray-500 text-center">
                            Broadcasting biblical truth 24/7
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
