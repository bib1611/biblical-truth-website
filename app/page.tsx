import Link from 'next/link';

export default function HomePage() {
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
            <div>
              <h1 className="text-2xl font-black text-white">THE BIBLICAL MAN</h1>
              <p className="text-xs text-gray-400 mt-1">Uncompromising Truth for Modern Men</p>
            </div>
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
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Pick Your Door
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            You're standing at a crossroads. Behind each door is a different path.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Most men wander in circles their entire lives. Don't be most men.
          </p>
        </div>
      </section>

      {/* Three Doors Section */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Door 1: START HERE */}
            <Link
              href="/start-here"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                🚪
              </div>

              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs font-bold text-gray-400 mb-4">
                  FOR THE CONFUSED
                </div>
                <h3 className="text-3xl font-black mb-3 group-hover:text-amber-500 transition-colors">
                  START HERE
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Lost? Overwhelmed? Not sure where you fit in this thing called biblical manhood?
                </p>
                <p className="text-white font-medium leading-relaxed">
                  This door helps you figure out what kind of man you are and what you actually need right now.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-3">You'll discover:</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">→</span>
                    <span>Your current path (Father, Warrior, or Student)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">→</span>
                    <span>What resources match where you are</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">→</span>
                    <span>How this whole ecosystem works</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-amber-500 font-bold group-hover:translate-x-1 transition-transform inline-block">
                Enter →
              </div>
            </Link>

            {/* Door 2: WAR ROOM */}
            <Link
              href="/gate-pass"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500 rounded-2xl p-8 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                ⚔️
              </div>

              <div className="absolute -top-3 left-6">
                <div className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-black">
                  $3 GATE PASS
                </div>
              </div>

              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-amber-500/10 rounded-full text-xs font-bold text-amber-500 mb-4">
                  FOR THE READY
                </div>
                <h3 className="text-3xl font-black mb-3 text-amber-500 group-hover:text-amber-400 transition-colors">
                  WAR ROOM
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Already know what you're here for? Skip the intro and get straight to the tools.
                </p>
                <p className="text-white font-medium leading-relaxed">
                  24/7 radio, tactical guides, Bible study tools, and a community of men who refuse to compromise.
                </p>
              </div>

              <div className="pt-6 border-t border-amber-500/20">
                <p className="text-sm text-gray-500 mb-3">Instant access to:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span><strong>Final Fight Bible Radio</strong> - 24/7 KJV teaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span><strong>The Library</strong> - Tactical content for fathers & warriors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span><strong>Study Tools</strong> - Deep Bible reference materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    <span><strong>Community</strong> - Connect with 12,000+ members</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 bg-amber-500 text-black px-6 py-3 rounded-lg font-black text-center group-hover:bg-amber-400 transition-colors">
                GET ACCESS - $3
              </div>
            </Link>

            {/* Door 3: THE ARMORY */}
            <Link
              href="/armory"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                🗡️
              </div>

              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs font-bold text-gray-400 mb-4">
                  FOR THE EQUIPPED
                </div>
                <h3 className="text-3xl font-black mb-3 group-hover:text-orange-500 transition-colors">
                  THE ARMORY
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Need weapons-grade resources? Looking for specific training for specific battles?
                </p>
                <p className="text-white font-medium leading-relaxed">
                  Premium courses, books, and tactical guides designed for the battles you're actually fighting.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500 mb-3">Browse by category:</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    <span><strong>For Fathers</strong> - Raising warriors, not wimps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    <span><strong>For Warriors</strong> - Marriage, mission, masculinity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">→</span>
                    <span><strong>The Doctrine Vault</strong> - Deep biblical theology</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-orange-500 font-bold group-hover:translate-x-1 transition-transform inline-block">
                Browse Products →
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-lg mb-6">
            Not sure which door to pick?
          </p>
          <Link
            href="/start-here"
            className="inline-block bg-white/5 border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Start with Door #1
          </Link>
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
