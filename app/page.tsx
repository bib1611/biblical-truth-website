'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSignupWall, setShowSignupWall] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Official FFBR stream URL from their website
  const STREAM_URL = 'https://streams.radio.co/sd7d07f6a0/listen';

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

  const togglePlay = async () => {
    if (!showSignupWall && audioRef.current) {
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

                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="w-full bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-black text-xl py-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-2xl mb-6 flex items-center justify-center gap-4"
                    >
                      {isPlaying ? (
                        <>
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                          PAUSE RADIO
                        </>
                      ) : (
                        <>
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          LISTEN LIVE NOW
                        </>
                      )}
                    </button>

                    {/* Live Indicator */}
                    {isPlaying && (
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                        <span className="text-red-500 text-sm font-bold">STREAMING LIVE</span>
                      </div>
                    )}

                    {/* Timer */}
                    {isPlaying && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Free Preview Time Remaining</span>
                          <span className="text-yellow-500 font-bold text-lg">{formatTime(timeRemaining)}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-yellow-500 to-orange-600 h-3 rounded-full transition-all"
                            style={{ width: `${(timeRemaining / 300) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <h3 className="text-3xl font-black text-white mb-3">Free Trial Ended</h3>
                    <p className="text-gray-300 mb-6 text-lg">Get unlimited access to Final Fight Bible Radio</p>
                    <a
                      href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                      className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-black px-10 py-5 rounded-xl hover:scale-105 transition-transform text-xl shadow-2xl"
                    >
                      GET ACCESS NOW ($3)
                    </a>
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
