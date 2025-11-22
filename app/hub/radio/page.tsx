'use client';

import { useState } from 'react';

export default function RadioPage() {
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const tracks = [
        {
            title: "Ep. 45: Why Your Pastor is Weak",
            duration: "45:20",
            desc: "Unfiltered discussion on the state of the modern pulpit.",
            date: "NOV 20"
        },
        {
            title: "Ep. 44: The Pornography Lie",
            duration: "38:15",
            desc: "It's not a 'struggle', it's a choice. How to stop today.",
            date: "NOV 13"
        },
        {
            title: "Ep. 43: Raising Sons in Babylon",
            duration: "52:10",
            desc: "Practical framework for fatherhood in a hostile culture.",
            date: "NOV 06"
        },
        {
            title: "Ep. 42: Marriage is War",
            duration: "41:00",
            desc: "Fighting for your wife vs. fighting with her.",
            date: "OCT 30"
        }
    ];

    return (
        <>
            <header className="mb-12">
                <h1 className="text-4xl font-black text-white mb-2">BIBLICAL MAN RADIO</h1>
                <p className="text-[#666]">Uncensored audio for the commute.</p>
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Player Section */}
                <div className="lg:col-span-2">
                    <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden sticky top-6">
                        {/* Album Art / Visualizer Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-[#222] to-black flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform z-10"
                            >
                                {isPlaying ? (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Controls */}
                        <div className="p-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-white mb-1">{tracks[currentTrack].title}</h2>
                                <p className="text-[#666]">{tracks[currentTrack].desc}</p>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-[#333] h-1 rounded-full mb-4 cursor-pointer group">
                                <div className="bg-[#FFD700] h-1 rounded-full w-[35%] group-hover:bg-[#ffed4a] relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>

                            <div className="flex justify-between text-xs text-[#666] font-mono mb-8">
                                <span>15:42</span>
                                <span>{tracks[currentTrack].duration}</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-center gap-8">
                                <button className="text-[#666] hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ccc] transition-colors"
                                >
                                    {isPlaying ? (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    )}
                                </button>

                                <button className="text-[#666] hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Playlist */}
                <div className="space-y-4">
                    <h3 className="font-bold text-[#666] text-sm uppercase tracking-wider">Recent Episodes</h3>

                    {tracks.map((track, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setCurrentTrack(idx);
                                setIsPlaying(true);
                            }}
                            className={`p-4 rounded-lg cursor-pointer transition-all border ${currentTrack === idx
                                    ? 'bg-[#111] border-[#FFD700]'
                                    : 'bg-transparent border-transparent hover:bg-[#111] hover:border-[#222]'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className={`font-bold ${currentTrack === idx ? 'text-[#FFD700]' : 'text-white'}`}>
                                    {track.title}
                                </h4>
                                <span className="text-xs text-[#666] whitespace-nowrap ml-4">{track.date}</span>
                            </div>
                            <p className="text-sm text-[#888] line-clamp-2 mb-2">{track.desc}</p>
                            <div className="flex items-center gap-2 text-xs text-[#666]">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {track.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
