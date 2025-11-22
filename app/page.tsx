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
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg flex items-center justify-center font-black text-xl text-white">
                TB
              </div>
              <span className="text-xl font-bold text-gray-900">THE BIBLICAL MAN</span>
            </div>
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
            >
              Member Login →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Social Proof Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-emerald-900 font-semibold text-sm">Trusted by 12,000+ Christian Men</span>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-5xl mx-auto text-gray-900">
              Lead Your Family with
              <span className="block text-emerald-700 mt-2">Biblical Authority</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              Access 24/7 unfiltered KJV teaching, tactical family leadership guides, and a brotherhood of men who refuse to water down God's Word.
            </p>

            {/* Primary CTA */}
            <div className="mb-3">
              <a
                href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xl px-12 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Instant Access - $3 Lifetime
              </a>
            </div>
            <p className="text-sm text-gray-600">One-time payment • Instant access • No subscription</p>
          </div>

          {/* First Testimonial */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <div>
                  <p className="text-gray-800 text-lg mb-4 italic leading-relaxed">
                    "Within 3 weeks of applying these principles, my wife asked ME to lead family devotionals for the first time in 5 years. This changed everything."
                  </p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-bold text-gray-900">James R.</p>
                    <p className="text-sm text-gray-600">Deacon, Married 8 Years, Father of 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 text-gray-900">
            What You'll Gain
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Real outcomes for men who lead their families God's way
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead with Confidence</h3>
              <p className="text-gray-700 leading-relaxed">
                Stop second-guessing. Get biblical answers to modern marriage and fatherhood challenges.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-amber-50 to-white border border-amber-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn Respect Naturally</h3>
              <p className="text-gray-700 leading-relaxed">
                When you lead like Scripture commands, your family responds. No manipulation needed.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Men Like You</h3>
              <p className="text-gray-700 leading-relaxed">
                24/7 access to uncompromising teaching + tactical guides used by thousands of Christian men.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Radio Player Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
              Experience It Yourself
            </h2>
            <p className="text-xl text-gray-600">
              Listen to 5 minutes free - no email required
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-lg">
            {!showSignupWall ? (
              <div className="p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Album Art */}
                  <div className="relative w-56 h-56 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 rounded-2xl shadow-xl">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <div className="text-6xl mb-3">📻</div>
                        <div className="text-white font-black text-2xl">FFBR</div>
                        <div className="text-white/90 text-sm mt-2">Live 24/7</div>
                      </div>
                    </div>
                    {isPlaying && (
                      <div className="absolute -top-3 -right-3 bg-red-600 px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white text-xs font-bold">LIVE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Player Controls */}
                  <div className="flex-1 w-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-2">Final Fight Bible Radio</h3>
                      <p className="text-lg text-emerald-700 font-semibold mb-1">{nowPlaying}</p>
                      <p className="text-gray-600">24/7 Uncompromising Biblical Teaching • KJV 1611</p>
                    </div>

                    {/* Play Button & Volume */}
                    <div className="flex items-center gap-6 mb-6">
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:scale-105"
                      >
                        {isPlaying ? (
                          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                        ) : (
                          <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
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
                              background: `linear-gradient(to right, #d97706 0%, #d97706 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
                            }}
                          />
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Trial Timer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-amber-800 font-semibold text-sm">Free Preview Time Remaining</span>
                        <span className="text-amber-900 text-xl font-black">{formatTime(timeRemaining)}</span>
                      </div>
                      <div className="w-full bg-amber-100 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-600 h-2.5 rounded-full transition-all"
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
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Want Unlimited Access?</h3>
                  <p className="text-xl text-gray-700 mb-8">Get lifetime access to Final Fight Bible Radio and everything else</p>
                  <a
                    href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xl px-12 py-5 rounded-xl transition-all shadow-lg hover:scale-105"
                  >
                    GET FULL ACCESS - $3
                  </a>
                  <p className="text-gray-600 text-sm mt-4">One-time payment • Lifetime access</p>
                </div>
              </div>
            )}
          </div>

          {/* CTA Below Radio */}
          <div className="text-center mt-8">
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xl px-12 py-5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Instant Access - $3 Lifetime
            </a>
            <p className="text-sm text-gray-600 mt-3">One-time payment • Instant access • 100% secure</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 text-gray-900">
            What Men Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-stone-50 to-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900">Marcus T.</p>
                  <p className="text-sm text-gray-600">Husband, Father of 3</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "This is the kind of teaching my grandfather's generation got. Raw. Unfiltered. Biblical. Finally found what I've been searching for."
              </p>
            </div>

            <div className="bg-gradient-to-b from-stone-50 to-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <div>
                  <p className="font-bold text-gray-900">David M.</p>
                  <p className="text-sm text-gray-600">Men's Ministry Leader</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Finally, someone who preaches what the KJV actually says. No watering down. No compromise. This is what the church needs."
              </p>
            </div>

            <div className="bg-gradient-to-b from-stone-50 to-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-900">Robert K.</p>
                  <p className="text-sm text-gray-600">Married 12 Years</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "The tactical guides alone are worth 10x the price. My relationship with my sons has completely transformed since I started leading biblically."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 text-gray-900">
              Everything Included
            </h2>
            <p className="text-2xl text-center text-emerald-700 font-bold mb-12">
              One Price. Lifetime Access.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100">
                <div className="text-4xl flex-shrink-0">📻</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Final Fight Bible Radio</h3>
                  <p className="text-gray-700 mb-2">24/7 uncompromising biblical teaching from KJV 1611</p>
                  <p className="text-sm font-semibold text-emerald-700">Value: $97</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                <div className="text-4xl flex-shrink-0">⚔️</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">The War Room</h3>
                  <p className="text-gray-700 mb-2">Deep Bible study tools to sharpen your understanding</p>
                  <p className="text-sm font-semibold text-emerald-700">Value: $47</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100">
                <div className="text-4xl flex-shrink-0">📚</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">The Library</h3>
                  <p className="text-gray-700 mb-2">Tactical guides on marriage, fatherhood, and leadership</p>
                  <p className="text-sm font-semibold text-emerald-700">Value: $67</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100">
                <div className="text-4xl flex-shrink-0">♾️</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Lifetime Access</h3>
                  <p className="text-gray-700 mb-2">One payment. Forever access. All future updates.</p>
                  <p className="text-sm font-semibold text-emerald-700">Priceless</p>
                </div>
              </div>
            </div>

            <div className="text-center border-t-2 border-emerald-100 pt-8">
              <div className="mb-6">
                <p className="text-gray-600 mb-2 line-through text-lg">Regular Price: $211</p>
                <p className="text-5xl font-black text-gray-900 mb-2">
                  <span className="text-emerald-700">$3</span>
                </p>
                <p className="text-gray-600">One-time payment • Lifetime access</p>
              </div>

              <a
                href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-2xl px-16 py-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 mb-4"
              >
                GET INSTANT ACCESS - $3
              </a>
              <p className="text-gray-600 text-sm">100% Secure • Instant Email Delivery • No Hidden Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-700 to-emerald-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
            Stop Compromising. Start Leading.
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Either you want biblical truth without the sugar-coating, or you don't. The choice is yours.
          </p>
          <a
            href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
            className="inline-block bg-white hover:bg-amber-50 text-emerald-900 font-black text-xl px-12 py-5 rounded-xl transition-all shadow-xl hover:scale-105"
          >
            YES, I'M READY - $3
          </a>
          <p className="text-emerald-200 text-sm mt-4">Join 12,000+ men leading their families God's way</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">© 2025 The Biblical Man. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Your privacy is 100% safe and you can cancel anytime.</p>
        </div>
      </footer>
    </main>
  );
}
