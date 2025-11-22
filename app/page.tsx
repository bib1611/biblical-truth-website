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
    <main className="min-h-screen bg-white">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      {/* Simple Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-emerald-800 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                TB
              </div>
              <span className="font-bold text-gray-900">THE BIBLICAL MAN</span>
            </div>
            <Link href="/login" className="text-emerald-700 font-semibold text-sm hover:text-emerald-900">
              Member Login →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Lead Your Family with<br />
            <span className="text-emerald-700">Biblical Authority</span>
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            24/7 unfiltered KJV teaching, tactical guides, and a brotherhood of men who refuse to compromise God's Word.
          </p>

          <div className="mb-4">
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Get Lifetime Access - $3
            </a>
          </div>
          <p className="text-sm text-gray-600">One payment. Lifetime access. No subscription.</p>
        </div>
      </section>

      {/* Radio Player */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Try It Free</h2>
            <p className="text-gray-600">Listen for 5 minutes - no email required</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            {!showSignupWall ? (
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Album Art */}
                <div className="relative w-48 h-48 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl shadow-lg">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl mb-2">📻</div>
                      <div className="text-white font-black text-xl">FFBR</div>
                      <div className="text-white/80 text-sm mt-1">Live 24/7</div>
                    </div>
                  </div>
                  {isPlaying && (
                    <div className="absolute -top-2 -right-2 bg-red-600 px-3 py-1 rounded-full shadow-md animate-pulse">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-white text-xs font-bold">LIVE</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex-1 w-full">
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Final Fight Bible Radio</h3>
                    <p className="text-emerald-700 font-semibold mb-1">{nowPlaying}</p>
                    <p className="text-gray-600 text-sm">24/7 Biblical Teaching • KJV 1611</p>
                  </div>

                  {/* Play Button & Volume */}
                  <div className="flex items-center gap-5 mb-5">
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 bg-emerald-700 hover:bg-emerald-800 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:scale-105"
                    >
                      {isPlaying ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
                            background: `linear-gradient(to right, #047857 0%, #047857 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-amber-900 font-semibold text-sm">Free Preview Remaining</span>
                      <span className="text-amber-900 text-lg font-bold">{formatTime(timeRemaining)}</span>
                    </div>
                    <div className="w-full bg-amber-100 rounded-full h-2">
                      <div
                        className="bg-amber-600 h-2 rounded-full transition-all"
                        style={{ width: `${(timeRemaining / 300) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Want More?</h3>
                <p className="text-gray-700 mb-6">Get unlimited access to everything for just $3</p>
                <a
                  href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                  className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all shadow-md"
                >
                  Get Full Access - $3
                </a>
              </div>
            )}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Get Lifetime Access - $3
            </a>
          </div>
        </div>
      </section>

      {/* Simple Testimonial */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <p className="text-gray-800 text-lg mb-6 italic leading-relaxed">
              "Within 3 weeks of applying these principles, my wife asked ME to lead family devotionals for the first time in 5 years. This changed everything."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
              <div>
                <p className="font-bold text-gray-900">James R.</p>
                <p className="text-sm text-gray-600">Deacon, Married 8 Years, Father of 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-10 text-gray-900">Everything Included</h2>

          <div className="space-y-4 mb-10">
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="text-3xl">📻</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Final Fight Bible Radio</h3>
                <p className="text-gray-700">24/7 uncompromising biblical teaching from KJV 1611</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">The Library</h3>
                <p className="text-gray-700">Tactical guides on marriage, fatherhood, and biblical leadership</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="text-3xl">⚔️</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">The War Room</h3>
                <p className="text-gray-700">Deep Bible study tools to sharpen your understanding</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="text-3xl">♾️</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Lifetime Access</h3>
                <p className="text-gray-700">One payment. Forever access. All future updates.</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-white border-2 border-emerald-200 rounded-xl p-8">
            <p className="text-gray-600 mb-2 line-through">Regular Price: $211</p>
            <p className="text-5xl font-black text-emerald-700 mb-6">$3</p>

            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xl px-12 py-5 rounded-lg transition-all shadow-md hover:shadow-lg mb-3"
            >
              Get Instant Access
            </a>
            <p className="text-sm text-gray-600">One-time payment • Instant access • No hidden fees</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4 text-white">
            Stop Compromising.<br />Start Leading.
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 12,000+ men leading their families God's way.
          </p>
          <a
            href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
            className="inline-block bg-white hover:bg-gray-50 text-emerald-900 font-bold text-lg px-10 py-4 rounded-lg transition-all shadow-lg"
          >
            Yes, I'm Ready - $3
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">© 2025 The Biblical Man. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
