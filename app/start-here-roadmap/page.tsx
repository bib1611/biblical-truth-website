import Link from 'next/link';

export default function StartHereRoadmapPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-semibold">Back</span>
            </Link>
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Sign In →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🧭</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Your Clear Path Forward
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            Stop wandering. Here's exactly how to get what you need.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No guessing. No overwhelm. Just a simple roadmap from where you are now to becoming the biblical man you're called to be.
          </p>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Step 1: FREE */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-black text-black text-xl">
                1
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-bold mb-1">
                  100% FREE
                </div>
                <h2 className="text-2xl font-black">Start Here: Grab the Free Guide</h2>
              </div>
            </div>
            <div className="ml-16">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📖</div>
                  <div className="flex-1">
                    <div className="inline-block px-2 py-1 bg-green-500/20 rounded text-xs font-bold text-green-400 mb-2">228+ DOWNLOADS</div>
                    <h3 className="text-xl font-bold mb-2">How to Study the Bible Like Your Life Depends on It</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      The exact framework I use to study Scripture without twisting it. Free download, no strings.
                    </p>
                    <a
                      href="https://biblicalman.gumroad.com/l/elmog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                      Download Free →
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">
                👉 If you like that, move to step 2. If not, no hard feelings—this isn't for everyone.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent"></div>

          {/* Step 2: JOIN ($3) */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-black text-black text-xl">
                2
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500 text-xs font-bold mb-1">
                  MOST POPULAR
                </div>
                <h2 className="text-2xl font-black">Join The War Room ($3 One-Time)</h2>
              </div>
            </div>
            <div className="ml-16">
              <div className="bg-gradient-to-b from-amber-950/30 to-slate-950 border-2 border-amber-500 rounded-xl p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-black mb-2 text-amber-500">Lifetime Access to Everything:</h3>
                  <ul className="space-y-2 text-sm text-gray-300 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span>24/7 Final Fight Bible Radio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span>Tactical Library for Fathers & Warriors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span>Deep Bible Study Tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span>
                      <span>12,000+ Member Community</span>
                    </li>
                  </ul>

                  {/* Bonus Offer */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-green-400 text-sm font-bold">🎁 LIMITED BONUS:</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Join this week and get <span className="text-green-400 font-bold">"The Uncomfortable Christ"</span> free (162+ downloads, normally separate). Instant delivery.
                    </p>
                  </div>

                  <Link
                    href="/gate-pass"
                    className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-black text-lg py-4 rounded-xl transition-colors text-center"
                  >
                    Get Instant Access - $3 →
                  </Link>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">
                👉 This is where 90% of people stop. They get everything they need for $3 and never buy anything else. That's fine.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent"></div>

          {/* Step 3: CHOOSE PATH ($27) */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-black text-black text-xl">
                3
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-500 text-xs font-bold mb-1">
                  DEEP TRAINING
                </div>
                <h2 className="text-2xl font-black">Pick Your Battle ($27-$37)</h2>
              </div>
            </div>
            <div className="ml-16">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 mb-6">
                  Once you're in the War Room and know what you need, grab specific training for your battle:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">👨‍👦</div>
                    <h4 className="font-bold mb-1 text-sm">For Fathers</h4>
                    <p className="text-xs text-gray-400 mb-3">Raising warriors, biblical discipline, family leadership</p>
                    <Link href="/armory#fathers" className="text-xs text-orange-500 hover:text-orange-400 font-semibold">
                      Browse Courses →
                    </Link>
                  </div>
                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">⚔️</div>
                    <h4 className="font-bold mb-1 text-sm">For Warriors</h4>
                    <p className="text-xs text-gray-400 mb-3">Marriage, mission, masculinity, breaking addictions</p>
                    <Link href="/armory#warriors" className="text-xs text-orange-500 hover:text-orange-400 font-semibold">
                      Browse Courses →
                    </Link>
                  </div>
                  <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4">
                    <div className="text-2xl mb-2">📖</div>
                    <h4 className="font-bold mb-1 text-sm">Doctrine Vault</h4>
                    <p className="text-xs text-gray-400 mb-3">Deep theology, verse-by-verse, the Real Jesus</p>
                    <Link href="/armory#vault" className="text-xs text-orange-500 hover:text-orange-400 font-semibold">
                      Browse Resources →
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">
                👉 These are for when you know exactly what battlefield you're on and need advanced tactics.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent"></div>

          {/* Step 4: ALL-IN ($297) */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-black text-black text-xl">
                4
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-500 text-xs font-bold mb-1">
                  COMPLETE ARSENAL
                </div>
                <h2 className="text-2xl font-black">Go All-In: Vault Platinum ($297)</h2>
              </div>
            </div>
            <div className="ml-16">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-xl font-black mb-2 text-blue-400">The Complete Theological Library</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Every course. Every guide. Every resource. Lifetime access to the full arsenal. For serious students who want it all.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <p className="text-xs text-gray-400 mb-2">Includes everything from steps 1-3 plus:</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">→</span>
                      <span>Complete verse-by-verse commentaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">→</span>
                      <span>All premium courses (past, present, future)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">→</span>
                      <span>Priority access to new releases</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/armory#vault"
                  className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  See What's Included →
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">
                👉 Don't buy this unless you've already gone through steps 1-3 and know you want everything.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10 bg-slate-950/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Still Not Sure Where to Start?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Just grab the free guide. If you like it, join the War Room for $3. Everything else can wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://biblicalman.gumroad.com/l/elmog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Download Free Guide
            </a>
            <Link
              href="/gate-pass"
              className="bg-amber-500 hover:bg-amber-400 text-black font-black px-8 py-4 rounded-lg transition-colors"
            >
              Join War Room - $3
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">© 2025 The Biblical Man. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
