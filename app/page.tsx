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

  const featuredContent = [
    {
      title: "Words, Castles, and the House Christ Keeps",
      excerpt: "Lately I've been living in two worlds at once.",
      date: "Nov 22",
      image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb85f72c-6106-4110-a7a4-30ca834cacab_736x981.jpeg",
      url: "https://biblicalman.substack.com/p/words-castles-and-the-house-christ"
    },
    {
      title: "He Found Us in a Field, Covered in Blood",
      excerpt: "There's a story in your Bible that doesn't get turned into mugs and T-shirts.",
      date: "Nov 21",
      image: "https://images.unsplash.com/photo-1590869942905-a4ada45d5a8a?w=600&h=400&fit=crop",
      url: "https://biblicalman.substack.com/p/he-found-us-in-a-field-covered-in"
    },
    {
      title: "God Gave Adam a Job Before He Gave Him a Wife",
      excerpt: "God gave Adam a job before He gave Adam a wife.",
      date: "Nov 20",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=600&h=400&fit=crop",
      url: "https://biblicalman.substack.com/p/god-gave-adam-a-job-before-he-gave"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black text-gray-900">THE BIBLICAL MAN</h1>
              <p className="text-xs text-gray-600 mt-0.5">Uncompromising KJV Teaching for Modern Men</p>
            </div>
            <Link href="/login" className="text-sm font-semibold text-gray-900 hover:text-emerald-700">
              Sign In →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content Block */}
      <section className="py-12 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
            They Kicked Me Out Of Bible School For Teaching What The KJV Actually Says
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Now 12,000+ Christian men use these principles to lead their families with biblical authority.
            No feminized theology. No watered-down Gospel. Just what Scripture actually commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg px-8 py-4 rounded-lg text-center transition-all"
            >
              Get Full Access - $3
            </a>
            <button
              onClick={() => document.getElementById('radio-player')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-white border-2 border-gray-300 hover:border-emerald-700 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg text-center transition-all"
            >
              Try Radio Free
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">One payment. Lifetime access. 12,000+ members.</p>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-12 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, i) => (
              <a key={i} href={content.url} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">{content.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">{content.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{content.excerpt}</p>
                  <span className="text-sm font-semibold text-emerald-700 group-hover:text-emerald-900">
                    Read more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Radio Player Section */}
      <section id="radio-player" className="py-12 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Final Fight Bible Radio</h2>
            <p className="text-lg text-gray-700">
              24/7 uncompromising biblical teaching. Listen free for 5 minutes, no email required.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            {!showSignupWall ? (
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Album Art */}
                <div className="relative w-48 h-48 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl mb-2">📻</div>
                      <div className="text-white font-black text-xl">FFBR</div>
                      <div className="text-white/80 text-sm mt-1">Live 24/7</div>
                    </div>
                  </div>
                  {isPlaying && (
                    <div className="absolute -top-2 -right-2 bg-red-600 px-3 py-1 rounded-full animate-pulse">
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
                    <p className="text-emerald-700 font-semibold mb-1">{nowPlaying}</p>
                    <p className="text-gray-600 text-sm">KJV 1611 Teaching</p>
                  </div>

                  <div className="flex items-center gap-5 mb-5">
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 bg-emerald-700 hover:bg-emerald-800 rounded-full flex items-center justify-center text-white transition-all"
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
                      </div>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold text-sm">Free Preview</span>
                      <span className="text-gray-900 text-lg font-bold">{formatTime(timeRemaining)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-700 h-2 rounded-full transition-all"
                        style={{ width: `${(timeRemaining / 300) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Want Unlimited Access?</h3>
                <p className="text-gray-700 mb-6">Get lifetime access to the radio + library + war room for $3</p>
                <a
                  href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                  className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg px-10 py-4 rounded-lg"
                >
                  Get Full Access - $3
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
            "Within 3 weeks of applying these principles, my wife asked ME to lead family devotionals for the first time in 5 years. This changed everything."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-bold text-gray-900">James R.</p>
              <p className="text-sm text-gray-600">Deacon, Married 8 Years, Father of 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-12 px-6 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8">What You Get</h2>

          <div className="space-y-6 mb-10">
            <div className="border-l-4 border-emerald-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📻 Final Fight Bible Radio</h3>
              <p className="text-gray-700">24/7 uncompromising biblical teaching from the KJV 1611. Stream anywhere, anytime.</p>
            </div>

            <div className="border-l-4 border-emerald-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📚 The Library</h3>
              <p className="text-gray-700">Tactical guides on marriage, raising sons, family leadership, and biblical manhood. Practical, actionable content.</p>
            </div>

            <div className="border-l-4 border-emerald-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">⚔️ The War Room</h3>
              <p className="text-gray-700">Deep Bible study tools, reference materials, and resources to sharpen your understanding of Scripture.</p>
            </div>

            <div className="border-l-4 border-emerald-700 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">♾️ Lifetime Access</h3>
              <p className="text-gray-700">Pay once. Access forever. All future content and updates included. No subscription.</p>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center">
            <p className="text-gray-600 mb-1 line-through">Worth $211</p>
            <p className="text-5xl font-black text-gray-900 mb-6">$3</p>
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xl px-12 py-4 rounded-lg mb-3"
            >
              Get Instant Access
            </a>
            <p className="text-sm text-gray-600">One-time payment • Instant access • No hidden fees</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4 text-white">
            Join 12,000+ Men Leading Their Families God's Way
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Either you want biblical truth without compromise, or you don't.
          </p>
          <a
            href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-10 py-4 rounded-lg"
          >
            Get Started - $3
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© 2025 The Biblical Man. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
