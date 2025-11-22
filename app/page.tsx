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
      const response = await fetch('/api/now-playing');
      if (response.ok) {
        const data = await response.json();
        if (data.track) {
          setNowPlaying(data.track);
        }
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
    fetchNowPlaying();
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

  const testimonials = [
    {
      quote: "This is the kind of teaching my grandfather's generation got. Raw. Unfiltered. Biblical. The modern church won't touch this stuff.",
      author: "Marcus T.",
      title: "Husband, Father of 3"
    },
    {
      quote: "I was raised in church my whole life and never heard this. My wife actually respects me now that I lead like the Bible commands.",
      author: "James R.",
      title: "Deacon, Married 8 Years"
    },
    {
      quote: "Finally, someone who isn't afraid to preach what the KJV actually says. No watering down. No apologies.",
      author: "David M.",
      title: "Men's Ministry Leader"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Simple Header */}
        <div className="flex justify-between items-center mb-12 pb-4 border-b-2 border-black">
          <div className="text-xl font-bold">THE BIBLICAL MAN</div>
          <Link href="/login" className="text-sm hover:underline">
            Member Login →
          </Link>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          How A "Kicked Out Of Bible School" Preacher Is Teaching Thousands Of Christian Men The KJV Truth About Manhood The Modern Church Refuses To Preach
        </h1>

        <p className="text-lg md:text-xl mb-12 text-gray-700">
          If you're tired of "soft" sermons... if you feel like the church has been feminized... if you're looking for uncompromising biblical teaching on marriage, fatherhood, and male leadership...
        </p>

        {/* Radio Player - Compact */}
        <div className="bg-black text-white rounded-lg p-6 mb-12">
          <h3 className="font-bold text-lg mb-4">🎧 TRY FINAL FIGHT BIBLE RADIO FREE (5 Minutes)</h3>

          {!showSignupWall ? (
            <>
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center text-black transition-all"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <div className="flex-1">
                  <div className="text-sm font-bold">{nowPlaying}</div>
                  <div className="text-xs text-gray-400">24/7 Biblical Teaching</div>
                </div>
                {isPlaying && (
                  <span className="bg-red-600 px-2 py-1 rounded text-xs font-bold">LIVE</span>
                )}
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1"
                  style={{
                    background: `linear-gradient(to right, #fff 0%, #fff ${volume * 100}%, #4b5563 ${volume * 100}%, #4b5563 100%)`
                  }}
                />
              </div>

              {/* Timer */}
              <div className="bg-yellow-500/20 border border-yellow-500 rounded p-3">
                <div className="flex justify-between text-sm mb-2">
                  <span>Free Preview Time:</span>
                  <span className="font-bold">{formatTime(timeRemaining)}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all"
                    style={{ width: `${(timeRemaining / 300) * 100}%` }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-xl font-bold mb-4">Want To Keep Listening?</p>
              <a
                href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded"
              >
                Get Full Access - $3
              </a>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center border-b-2 border-black pb-4">
            What Christian Men Are Saying:
          </h2>

          {testimonials.map((test, i) => (
            <div key={i} className="mb-8 p-6 bg-gray-50 border-l-4 border-black">
              <p className="text-lg mb-4 italic">"{test.quote}"</p>
              <p className="font-bold">— {test.author}</p>
              <p className="text-sm text-gray-600">{test.title}</p>
            </div>
          ))}
        </div>

        {/* What You Get */}
        <div className="mb-12 border-2 border-black p-8">
          <h2 className="text-3xl font-bold mb-6">Here's What You Get For Just $3:</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold">✓</span>
              <div>
                <strong>Final Fight Bible Radio:</strong> 24/7 uncompromising biblical teaching from the KJV 1611
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">✓</span>
              <div>
                <strong>The War Room:</strong> Deep Bible study tools to sharpen your sword
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">✓</span>
              <div>
                <strong>The Library:</strong> Tactical guides on marriage, fatherhood, and male leadership
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold">✓</span>
              <div>
                <strong>Lifetime Access:</strong> One payment. Forever access. No subscriptions.
              </div>
            </li>
          </ul>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-black text-white font-bold text-xl px-12 py-4 hover:bg-gray-800 transition-colors mb-4"
            >
              YES, I WANT ACCESS - $3
            </a>
            <p className="text-sm text-gray-600">One-time payment • Instant email with login • Cancel anytime</p>
          </div>
        </div>

        {/* Final Sales Copy */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-4">
            <strong>Look,</strong> I'm not going to beg you.
          </p>
          <p className="text-lg mb-4">
            Either you're a man who wants the truth, or you're not.
          </p>
          <p className="text-lg mb-4">
            Either you're tired of watching your church compromise, or you're comfortable with it.
          </p>
          <p className="text-lg mb-4">
            Either you want to lead your family according to Scripture, or you want to keep letting your wife do it.
          </p>
          <p className="text-lg mb-8">
            The choice is yours.
          </p>

          <div className="text-center bg-black text-white p-8">
            <p className="text-2xl font-bold mb-4">Ready To Stop Compromising?</p>
            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl px-12 py-4"
            >
              GET INSTANT ACCESS - $3
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 pt-8 border-t border-gray-300">
          <p>© 2025 The Biblical Man. All rights reserved.</p>
          <p className="mt-2">Your privacy is 100% safe and you can cancel anytime.</p>
        </div>
      </div>
    </main>
  );
}
