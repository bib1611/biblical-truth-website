'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSignupWall, setShowSignupWall] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [volume, setVolume] = useState(0.8);
  const [nowPlaying, setNowPlaying] = useState('Loading...');
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const metadataIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const STREAM_URL = 'https://c13.radioboss.fm:8639/stream';

  const fetchNowPlaying = async () => {
    try {
      const response = await fetch('/api/now-playing');
      if (response.ok) {
        const data = await response.json();
        if (data.track) setNowPlaying(data.track);
      }
    } catch (error) {
      setNowPlaying('Live Biblical Teaching');
    }
  };

  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setShowSignupWall(true);
            if (audioRef.current) audioRef.current.pause();
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying, timeRemaining]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    fetchNowPlaying();
    metadataIntervalRef.current = setInterval(() => fetchNowPlaying(), 10000);
    return () => { if (metadataIntervalRef.current) clearInterval(metadataIntervalRef.current); };
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Audio playback error:', error);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-black text-xl">
                  TB
                </div>
                <span className="text-xl font-bold">THE BIBLICAL MAN</span>
              </div>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-semibold hover:text-amber-400 transition-colors"
              >
                Member Login →
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
                <span className="text-amber-400 font-semibold text-sm">UNCOMPROMISING BIBLICAL TRUTH</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
                <span className="text-white">They Kicked Me Out Of </span>
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">Bible School</span>
                <span className="text-white"> For Teaching What The KJV Actually Says</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of Christian men who are done with feminized churches and ready to lead their families with biblical authority
              </p>
            </div>

            {/* Radio Player - Hero Feature */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {!showSignupWall ? (
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Album Art */}
                      <div className="relative w-64 h-64 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-2xl shadow-2xl">
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <div className="text-7xl mb-3">📻</div>
                            <div className="text-white font-black text-3xl drop-shadow-lg">FFBR</div>
                            <div className="text-white/90 text-sm mt-2">Live 24/7</div>
                          </div>
                        </div>
                        {isPlaying && (
                          <div className="absolute -top-3 -right-3 bg-red-600 px-4 py-2 rounded-full shadow-lg animate-pulse">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-white text-xs font-bold">LIVE</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Player Controls */}
                      <div className="flex-1 w-full">
                        <div className="mb-6">
                          <h3 className="text-3xl font-black text-white mb-2">Final Fight Bible Radio</h3>
                          <p className="text-lg text-amber-400 font-semibold mb-1">{nowPlaying}</p>
                          <p className="text-gray-400">24/7 Uncompromising Biblical Teaching • KJV 1611</p>
                        </div>

                        {/* Play Button & Volume */}
                        <div className="flex items-center gap-6 mb-6">
                          <button
                            onClick={togglePlay}
                            className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 rounded-full flex items-center justify-center text-black transition-all shadow-xl hover:scale-105"
                          >
                            {isPlaying ? (
                              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                              </svg>
                            ) : (
                              <svg className="w-9 h-9 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </button>

                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                              </svg>
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                                style={{
                                  background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
                                }}
                              />
                              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Trial Timer */}
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-amber-400 font-semibold">🎁 Free 5-Minute Preview</span>
                            <span className="text-amber-400 text-2xl font-black">{formatTime(timeRemaining)}</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-amber-500 to-orange-600 h-3 rounded-full transition-all shadow-lg"
                              style={{ width: `${(timeRemaining / 300) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <h3 className="text-3xl font-black text-white mb-4">Ready For More?</h3>
                      <p className="text-xl text-gray-300 mb-8">Get unlimited access to Final Fight Bible Radio and everything else</p>
                      <a
                        href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                        className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black text-xl px-12 py-5 rounded-xl transition-all shadow-2xl hover:scale-105"
                      >
                        GET FULL ACCESS - $3
                      </a>
                      <p className="text-gray-400 text-sm mt-4">One-time payment • Lifetime access</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
                What Men Are Saying
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    quote: "This is the kind of teaching my grandfather's generation got. Raw. Unfiltered. Biblical.",
                    author: "Marcus T.",
                    role: "Husband, Father of 3"
                  },
                  {
                    quote: "My wife actually respects me now that I lead like the Bible commands. Game changer.",
                    author: "James R.",
                    role: "Deacon, Married 8 Years"
                  },
                  {
                    quote: "Finally, someone who preaches what the KJV actually says. No watering down.",
                    author: "David M.",
                    role: "Men's Ministry Leader"
                  }
                ].map((test, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                    <div className="text-amber-400 text-4xl mb-4">"</div>
                    <p className="text-gray-200 mb-6 italic">{test.quote}</p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-bold text-white">{test.author}</p>
                      <p className="text-sm text-gray-400">{test.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
                  Everything You Get For <span className="text-amber-400">Just $3</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: '📻', title: 'Final Fight Bible Radio', desc: '24/7 uncompromising biblical teaching from KJV 1611' },
                    { icon: '⚔️', title: 'The War Room', desc: 'Deep Bible study tools to sharpen your understanding' },
                    { icon: '📚', title: 'The Library', desc: 'Tactical guides on marriage, fatherhood, and leadership' },
                    { icon: '♾️', title: 'Lifetime Access', desc: 'One payment. Forever access. No subscriptions.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-slate-900/50 rounded-xl border border-white/5">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                    className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black text-2xl px-16 py-6 rounded-xl transition-all shadow-2xl hover:scale-105 mb-4"
                  >
                    GET INSTANT ACCESS - $3
                  </a>
                  <p className="text-gray-400">One-time payment • Instant email with login • 100% secure</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                Stop Compromising. Start Leading.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Either you want biblical truth without the sugar-coating, or you don't. The choice is yours.
              </p>
              <a
                href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black text-xl px-12 py-5 rounded-xl transition-all shadow-2xl hover:scale-105"
              >
                YES, I'M READY - $3
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 mb-2">© 2025 The Biblical Man. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Your privacy is 100% safe and you can cancel anytime.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
