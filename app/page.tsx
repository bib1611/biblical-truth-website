'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSignupWall, setShowSignupWall] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const [volume, setVolume] = useState(0.8);
  const [nowPlaying, setNowPlaying] = useState('Loading...');
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const metadataIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Official FFBR stream URL (128kbps MP3)
  const STREAM_URL = 'https://c13.radioboss.fm:8639/stream';

  // Fetch now playing info
  const fetchNowPlaying = async () => {
    try {
      // Try to fetch from a proxy endpoint that handles CORS
      const response = await fetch('/api/now-playing');
      if (response.ok) {
        const data = await response.json();
        if (data.track) {
          setNowPlaying(data.track);
        }
      }
    } catch (error) {
      // Fallback to generic message if API fails
      setNowPlaying('Live Biblical Teaching');
    }
  };

  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setShowSignupWall(true);
            if (audioRef.current) {
              audioRef.current.pause();
            }
            setIsPlaying(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, timeRemaining]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // Fetch initial now playing info
    fetchNowPlaying();

    // Update every 10 seconds
    metadataIntervalRef.current = setInterval(() => {
      fetchNowPlaying();
    }, 10000);

    return () => {
      if (metadataIntervalRef.current) {
        clearInterval(metadataIntervalRef.current);
      }
    };
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
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-red-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Top Bar */}
        <div className="w-full border-b border-gray-800 bg-black/50 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-black">THE BIBLICAL MAN</div>
            <Link
              href="/login"
              className="text-sm font-bold text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-2"
            >
              MEMBER LOGIN <span className="text-yellow-500">→</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-500">
                  I got kicked out of Bible school
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-3xl mx-auto">
                for preaching what the King James Bible actually says about manhood
              </p>
            </div>

            {/* Radio Player */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                {!showSignupWall ? (
                  <div className="p-8">
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl font-black text-white mb-2">FINAL FIGHT BIBLE RADIO</h3>
                      <p className="text-gray-400">24/7 Uncompromising Biblical Teaching</p>
                    </div>

                    {/* Album Art / Station Logo */}
                    <div className="relative aspect-square w-full max-w-sm mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl mb-4">📻</div>
                          <div className="text-white font-black text-2xl drop-shadow-lg">FFBR</div>
                          <div className="text-white/80 text-sm mt-2">Live Radio</div>
                        </div>
                      </div>
                      {isPlaying && (
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-2 bg-red-600 px-3 py-1.5 rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-bold">LIVE</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Now Playing */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-1">{nowPlaying}</h3>
                      <p className="text-gray-400 text-sm">24/7 Biblical Teaching • KJV 1611</p>
                    </div>

                    {/* Player Controls */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                      {/* Play/Pause Button */}
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-black transition-all shadow-lg hover:scale-105"
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
                    </div>

                    {/* Volume Control */}
                    <div className="mb-6">
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
                          className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
                          }}
                        />
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      </div>
                    </div>

                    {/* Free Trial Timer */}
                    {!showSignupWall && (
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-yellow-500 text-sm font-semibold">Free Preview</span>
                          <span className="text-yellow-500 text-lg font-black">{formatTime(timeRemaining)}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full transition-all"
                            style={{ width: `${(timeRemaining / 300) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-8">
                    {/* Album Art / Station Logo */}
                    <div className="relative aspect-square w-full max-w-sm mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700 opacity-50">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-6xl mb-4">📻</div>
                          <div className="text-white font-black text-2xl drop-shadow-lg">FFBR</div>
                          <div className="text-white/80 text-sm mt-2">Live Radio</div>
                        </div>
                      </div>
                    </div>

                    {/* Now Playing - Locked */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-500 mb-1">{nowPlaying}</h3>
                      <p className="text-gray-600 text-sm">24/7 Biblical Teaching • KJV 1611</p>
                    </div>

                    {/* Locked Controls */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                      <button
                        disabled
                        className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-gray-500 cursor-not-allowed"
                      >
                        <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>

                    {/* Volume Control - Disabled */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        </svg>
                        <div className="flex-1 h-1 bg-gray-800 rounded-lg"></div>
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                      </div>
                    </div>

                    {/* Signup CTA */}
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/50 rounded-xl p-6 text-center">
                      <h3 className="text-2xl font-black text-white mb-2">Free Trial Ended</h3>
                      <p className="text-gray-300 mb-6">Get unlimited access to Final Fight Bible Radio</p>
                      <a
                        href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                        className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-black px-10 py-4 rounded-xl hover:scale-105 transition-transform text-lg shadow-2xl"
                      >
                        GET ACCESS NOW ($3)
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Dear Christian Man,</strong>
              </p>
              <p>
                If you look around your church and feel like something is missing... if you're tired of "soft" sermons that sound more like therapy than theology... if you're wondering where the men have gone...
              </p>
              <p className="text-white font-bold">
                You are not alone.
              </p>
              <p>
                I'm a preacher with calluses. I learned biblical truth the hard way—through 22 years of marriage, raising children, working with my hands, and refusing to compromise when the cost was high.
              </p>
              <p>
                The modern church has been feminized. It tells men to be passive. To "share their feelings" instead of leading their families. To apologize for their God-given authority.
              </p>

              <div className="bg-red-900/20 border-l-4 border-red-600 p-6 my-8">
                <p className="text-white font-bold mb-4">The result?</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    Men who abdicate their role as spiritual leaders
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    Wives forced to lead because their husbands won't
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">❌</span>
                    Children who grow up without biblical masculinity
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-black text-white">It's Time to Stop Apologizing.</h2>
              <p>
                The Biblical Man Hub is not for everyone. It's a command center for men who are done with games. Men who want the raw, undiluted truth of Scripture.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 border-y border-gray-800 bg-black/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: '⚔️', title: 'The War Room', desc: 'Deep KJV Bible study tools to sharpen your sword' },
                { icon: '📻', title: "King's Radio", desc: '24/7 streaming of uncompromising biblical teaching' },
                { icon: '📚', title: 'The Library', desc: 'Tactical guides on marriage, fatherhood, and leadership' }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-black text-xl px-12 py-5 rounded-xl hover:scale-105 transition-transform shadow-2xl"
              >
                GET ACCESS NOW ($3)
              </a>
              <p className="text-gray-400 text-sm mt-4">One-time payment • Lifetime access • Instant email with login</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
