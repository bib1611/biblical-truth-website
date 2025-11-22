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
      <section className="relative z-10 px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Pick Your Door
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
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
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🚪</div>
              <div className="inline-block px-2 py-0.5 bg-gray-800 rounded text-xs font-bold text-gray-400 mb-2">
                FOR THE CONFUSED
              </div>
              <h3 className="text-xl font-black mb-2 group-hover:text-amber-500 transition-colors">
                START HERE
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Not sure where you fit? Figure out what kind of man you are and what you need.
              </p>
              <div className="text-sm text-amber-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Find Your Path →
              </div>
            </Link>

            {/* Door 2: WAR ROOM */}
            <Link
              href="/gate-pass"
              className="group relative bg-gradient-to-b from-amber-950/30 to-slate-950 border-2 border-amber-500 rounded-xl p-6 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              <div className="absolute -top-2 -right-2 bg-amber-500 text-black px-2 py-0.5 rounded text-xs font-black">
                MOST POPULAR
              </div>
              <div className="text-2xl mb-3">⚔️</div>
              <div className="inline-block px-2 py-0.5 bg-amber-500/20 rounded text-xs font-bold text-amber-500 mb-2">
                FOR THE READY
              </div>
              <h3 className="text-xl font-black mb-2 text-amber-500 group-hover:text-amber-400 transition-colors">
                WAR ROOM
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Radio, library, study tools, and 12,000+ member community.
              </p>
              <div className="text-xs text-gray-500 mb-4">
                One-time payment • Lifetime access
              </div>
              <div className="bg-amber-500 text-black px-4 py-2 rounded-lg font-black text-sm text-center group-hover:bg-amber-400 transition-colors">
                GET ACCESS - $3
              </div>
            </Link>

            {/* Door 3: THE ARMORY */}
            <Link
              href="/armory"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="text-2xl mb-3">🗡️</div>
              <div className="inline-block px-2 py-0.5 bg-gray-800 rounded text-xs font-bold text-gray-400 mb-2">
                FOR THE EQUIPPED
              </div>
              <h3 className="text-xl font-black mb-2 group-hover:text-orange-500 transition-colors">
                THE ARMORY
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Premium courses and guides for fathers, warriors, and serious students of Scripture.
              </p>
              <div className="text-sm text-orange-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Browse Products →
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-3">
            Not sure which door to pick?
          </p>
          <Link
            href="/start-here"
            className="inline-block text-sm bg-white/5 border border-white/20 hover:bg-white/10 px-6 py-2 rounded-lg font-semibold transition-all"
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
