'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StartHerePage() {
  const [step, setStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState<'father' | 'warrior' | 'doctrine' | null>(null);

  const selectPath = (path: 'father' | 'warrior' | 'doctrine') => {
    setSelectedPath(path);
    setStep(2);
  };

  const reset = () => {
    setStep(1);
    setSelectedPath(null);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-sm font-semibold">Back</span>
      </Link>

      <div className="relative z-10 w-full max-w-2xl mx-auto">

        {/* Step 1: Choose Your Path */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Let's Get You Oriented
              </h1>
              <p className="text-lg text-gray-400">
                Which path are you on? Pick the one that fits where you are <em>right now</em>.
              </p>
            </div>

            <div className="space-y-4">
              {/* Father Path */}
              <button
                onClick={() => selectPath('father')}
                className="w-full bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">👨‍👦</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-2 group-hover:text-amber-500 transition-colors">
                      The Father Path
                    </h3>
                    <p className="text-sm text-gray-400">
                      You have kids (or are about to). Culture is raising your family while you watch.
                    </p>
                  </div>
                  <div className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </button>

              {/* Warrior Path */}
              <button
                onClick={() => selectPath('warrior')}
                className="w-full bg-gradient-to-b from-amber-950/30 to-slate-950 border-2 border-amber-500 rounded-xl p-6 hover:border-amber-400 transition-all text-left group relative"
              >
                <div className="absolute -top-2 -right-2 bg-amber-500 text-black px-2 py-0.5 rounded text-xs font-black">
                  MOST COMMON
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">⚔️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-2 text-amber-500 group-hover:text-amber-400 transition-colors">
                      The Man at War Path
                    </h3>
                    <p className="text-sm text-gray-300">
                      Fighting battles on multiple fronts: marriage, career, spiritual growth.
                    </p>
                  </div>
                  <div className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </button>

              {/* Doctrine Path */}
              <button
                onClick={() => selectPath('doctrine')}
                className="w-full bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">📖</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black mb-2 group-hover:text-amber-500 transition-colors">
                      The Real Jesus Path
                    </h3>
                    <p className="text-sm text-gray-400">
                      Tired of watered-down theology. You want to know what the KJV actually says.
                    </p>
                  </div>
                  <div className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Your Recommendation */}
        {step === 2 && selectedPath && (
          <div className="animate-fadeIn">
            {/* Father Path Recommendation */}
            {selectedPath === 'father' && (
              <>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">👨‍👦</div>
                  <h2 className="text-3xl font-black mb-3">Here's What You Need</h2>
                  <p className="text-gray-400">
                    As a father, you need tactical frameworks, not feel-good fluff.
                  </p>
                </div>

                <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-8 mb-6">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-amber-500/20 rounded-full text-xs font-bold text-amber-500 mb-3">
                      START HERE
                    </div>
                    <h3 className="text-2xl font-black mb-2">The War Room</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      $3 one-time payment • Lifetime access
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>24/7 Bible radio while you work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>Parenting guides & family discipleship tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>Community of 12,000+ fathers & warriors</span>
                      </li>
                    </ul>
                    <Link
                      href="/gate-pass"
                      className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-3 rounded-lg text-center transition-colors"
                    >
                      Get Access - $3
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">📚</div>
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-gray-800 rounded text-xs font-bold text-gray-400 mb-2">
                        THEN EXPLORE
                      </div>
                      <h4 className="text-lg font-bold mb-1">Premium Father Resources</h4>
                      <p className="text-xs text-gray-400 mb-3">From The Armory</p>
                      <p className="text-sm text-gray-300 mb-4">
                        Deep-dive courses on raising warriors, biblical discipline, and family leadership.
                      </p>
                      <Link
                        href="/armory"
                        className="inline-block text-sm text-amber-500 hover:text-amber-400 font-semibold transition-colors"
                      >
                        Browse Father Resources →
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Warrior Path Recommendation */}
            {selectedPath === 'warrior' && (
              <>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">⚔️</div>
                  <h2 className="text-3xl font-black mb-3">Here's What You Need</h2>
                  <p className="text-gray-400">
                    As a warrior, you need daily fuel and brotherhood.
                  </p>
                </div>

                <div className="bg-gradient-to-b from-amber-950/30 to-slate-950 border-2 border-amber-500 rounded-xl p-8 mb-6">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-amber-500/20 rounded-full text-xs font-bold text-amber-500 mb-3">
                      START HERE
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-amber-500">The War Room</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      $3 one-time payment • Lifetime access
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>24/7 Final Fight Bible Radio for daily fuel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>Tactical library for marriage, mission, & masculinity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>12,000+ member community of men at war</span>
                      </li>
                    </ul>
                    <Link
                      href="/gate-pass"
                      className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-3 rounded-lg text-center transition-colors"
                    >
                      Get Access - $3
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">🗡️</div>
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-gray-800 rounded text-xs font-bold text-gray-400 mb-2">
                        THEN EXPLORE
                      </div>
                      <h4 className="text-lg font-bold mb-1">Premium Warrior Resources</h4>
                      <p className="text-xs text-gray-400 mb-3">From The Armory</p>
                      <p className="text-sm text-gray-300 mb-4">
                        Advanced training for finding a wife, leading marriage, breaking addictions.
                      </p>
                      <Link
                        href="/armory"
                        className="inline-block text-sm text-amber-500 hover:text-amber-400 font-semibold transition-colors"
                      >
                        Browse Warrior Resources →
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Doctrine Path Recommendation */}
            {selectedPath === 'doctrine' && (
              <>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">📖</div>
                  <h2 className="text-3xl font-black mb-3">Here's What You Need</h2>
                  <p className="text-gray-400">
                    As a serious student, you need uncompromising truth.
                  </p>
                </div>

                <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-8 mb-6">
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-amber-500/20 rounded-full text-xs font-bold text-amber-500 mb-3">
                      START HERE
                    </div>
                    <h3 className="text-2xl font-black mb-2">The War Room</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      $3 one-time payment • Lifetime access
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>24/7 verse-by-verse KJV teaching radio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>Deep Bible study tools & reference materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">✓</span>
                        <span>Access to theological library</span>
                      </li>
                    </ul>
                    <Link
                      href="/gate-pass"
                      className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-black py-3 rounded-lg text-center transition-colors"
                    >
                      Get Access - $3
                    </Link>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">📚</div>
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-gray-800 rounded text-xs font-bold text-gray-400 mb-2">
                        THEN EXPLORE
                      </div>
                      <h4 className="text-lg font-bold mb-1">The Doctrine Vault</h4>
                      <p className="text-xs text-gray-400 mb-3">From The Armory</p>
                      <p className="text-sm text-gray-300 mb-4">
                        Complete verse-by-verse commentaries, theological deep dives, the Real Jesus.
                      </p>
                      <Link
                        href="/armory"
                        className="inline-block text-sm text-amber-500 hover:text-amber-400 font-semibold transition-colors"
                      >
                        Browse Doctrine Resources →
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Reset button */}
            <button
              onClick={reset}
              className="w-full text-sm text-gray-500 hover:text-gray-400 py-2 transition-colors"
            >
              ← Go back and choose a different path
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </main>
  );
}
