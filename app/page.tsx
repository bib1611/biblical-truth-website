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

      {/* Hero Section - War Room Primary CTA */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Tired of Weak Christianity?
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            You're in the Right Place.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            24/7 Bible radio, tactical content for fathers & warriors, and a community of 12,000+ men who refuse to compromise.
          </p>

          {/* Primary CTA */}
          <div className="bg-gradient-to-b from-amber-950/30 to-slate-950 border-2 border-amber-500 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="mb-6">
              <div className="inline-block px-4 py-1 bg-amber-500 text-black rounded-full text-sm font-black mb-4">
                12,793+ MEMBERS
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-3 text-amber-500">
                Join The War Room
              </h2>
              <p className="text-xl text-gray-300 mb-2">
                $3 One-Time Payment • Lifetime Access
              </p>
              <p className="text-sm text-gray-400 mb-6">
                No subscription. No upsells. Just immediate access to everything.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span className="text-sm text-gray-300">24/7 Final Fight Bible Radio</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span className="text-sm text-gray-300">Tactical Library for Fathers & Warriors</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span className="text-sm text-gray-300">Deep Bible Study Tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span className="text-sm text-gray-300">12,000+ Member Community</span>
                </div>
              </div>

              <Link
                href="/gate-pass"
                className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-black text-lg md:text-xl py-5 md:py-4 rounded-xl transition-colors shadow-2xl shadow-amber-500/30 active:scale-95"
              >
                GET INSTANT ACCESS - $3 →
              </Link>
            </div>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-gray-500">
            One payment. Lifetime access. Join 12,793+ men who stopped wandering.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">What Men Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 italic">
                "Finally found a place that doesn't water down Scripture. The radio alone is worth way more than $3."
              </p>
              <p className="text-sm text-gray-500">— Marcus T., Father of 3</p>
            </div>
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 italic">
                "I was tired of pastors who won't preach what the KJV actually says. This is the real deal."
              </p>
              <p className="text-sm text-gray-500">— David R., Bible Student</p>
            </div>
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 italic">
                "Best $3 I ever spent. The community alone changed how I lead my family."
              </p>
              <p className="text-sm text-gray-500">— James K., Married 8 Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Options Section */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black mb-3">Need Something Else?</h2>
            <p className="text-gray-400">Most men start with the War Room. But if you're looking for something specific...</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Option 1: Not Sure Where to Start */}
            <Link
              href="/start-here"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3">🚪</div>
              <h3 className="text-xl font-black mb-2 group-hover:text-amber-500 transition-colors">
                Not Sure Where to Start?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Take 30 seconds to figure out what kind of man you are and what you actually need right now.
              </p>
              <div className="text-sm text-amber-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Find Your Path →
              </div>
            </Link>

            {/* Option 2: Premium Products */}
            <Link
              href="/armory"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="text-3xl mb-3">🗡️</div>
              <h3 className="text-xl font-black mb-2 group-hover:text-orange-500 transition-colors">
                Need Specific Training?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Browse premium courses and resources for fathers, warriors, and serious students of Scripture.
              </p>
              <div className="text-sm text-orange-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Browse The Armory →
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
