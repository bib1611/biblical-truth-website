import Link from 'next/link';

export default function HowItWorksPage() {
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
      <section className="relative z-10 px-6 py-16 md:py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            How It Works
          </h1>
          <p className="text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Simple structure. No games. No confusing pricing tiers.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here's the entire ecosystem in plain English.
          </p>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="relative z-10 px-6 py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">The Entire Ecosystem</h2>

          <div className="space-y-8">

            {/* War Room */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  ⚔️
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-black">The War Room</h3>
                    <span className="px-3 py-1 bg-amber-500 text-black rounded-full text-sm font-black">
                      $3 ONE-TIME
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Your base camp. This is where you start, and for most men, it's everything you'll ever need.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-amber-500">📻 Final Fight Bible Radio</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        24/7 uncompromising KJV 1611 teaching. Verse-by-verse exposition. Stream from anywhere.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-amber-500">📚 The Library</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Tactical content for fathers and warriors. Marriage wisdom. Parenting frameworks. New content weekly.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-amber-500">📖 Bible Study Tools</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Deep reference materials, concordances, doctrine deep-dives, and study plans rooted in KJV 1611.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-amber-500">👥 Community Access</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        12,000+ men who refuse to compromise. Ask questions. Find accountability. Pray with brothers.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white font-bold mb-2">What You Get:</p>
                    <p className="text-gray-400 leading-relaxed">
                      Pay $3 once. Access everything above forever. No subscription. No renewal fees. Every future update included.
                    </p>
                  </div>

                  <Link
                    href="/gate-pass"
                    className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg mt-6 transition-colors"
                  >
                    Get War Room Access - $3
                  </Link>
                </div>
              </div>
            </div>

            {/* The Armory */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  🗡️
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-black">The Armory</h3>
                    <span className="px-3 py-1 bg-white/10 text-gray-400 rounded-full text-sm font-bold">
                      PREMIUM PRODUCTS
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Weapons-grade resources for specific battles. You don't need these to succeed. But when you're ready for advanced training, they're here.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-orange-500">For Fathers</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Tactical parenting courses. How to raise warriors. Family discipleship frameworks.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-orange-500">For Warriors</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Marriage masterclasses. Mission clarity guides. Spiritual warfare training.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-orange-500">Doctrine Vault</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Deep theological training. Systematic theology courses. Biblical exegesis.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white font-bold mb-2">How Pricing Works:</p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Each product is priced individually ($27-$197). Buy only what you need, when you need it. No bundles. No forced purchases.
                    </p>
                    <p className="text-amber-500 text-sm font-semibold">
                      💡 Pro tip: Start with the $3 War Room. Browse the library. Then buy from The Armory only when you know exactly what battle you're fighting.
                    </p>
                  </div>

                  <Link
                    href="/armory"
                    className="inline-block bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3 rounded-lg mt-6 transition-colors"
                  >
                    Browse The Armory
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decision Tree */}
      <section className="relative z-10 px-6 py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Where Should You Start?</h2>

          <div className="space-y-6">

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">If you're new here...</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Start with the <Link href="/start-here" className="text-amber-500 hover:text-amber-400 underline">START HERE</Link> page. It'll help you figure out which path you're on (Father, Warrior, or Student) and what resources match where you are.
              </p>
              <Link
                href="/start-here"
                className="inline-block bg-white/5 border border-white/20 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Go to Start Here →
              </Link>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3 text-amber-500">If you already know what you want...</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Get the $3 War Room. Full access to radio, library, tools, and community. Lifetime access. No subscription.
              </p>
              <Link
                href="/gate-pass"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Get War Room Access - $3 →
              </Link>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">If you need advanced training...</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Browse The Armory for premium courses and books. Each product is standalone—buy only what you need.
              </p>
              <Link
                href="/armory"
                className="inline-block bg-white/5 border border-white/20 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse The Armory →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-16 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-center">Common Questions</h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold mb-2">Do I need The Armory products to succeed?</h3>
              <p className="text-gray-400 leading-relaxed">
                No. The $3 War Room gives you everything you need. The Armory is for when you want specialized training for specific battles. Most men never need it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Can I get everything in a bundle?</h3>
              <p className="text-gray-400 leading-relaxed">
                No. That's intentional. Bundles force you to buy stuff you don't need. We'd rather you buy only what's useful to you right now.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Is the War Room really lifetime access?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. Pay $3 once. Access everything in the War Room forever. Every new feature. Every new piece of content. No renewal fees. No subscription.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What if I want a refund?</h3>
              <p className="text-gray-400 leading-relaxed">
                It's $3. But if you genuinely feel you wasted your money, email me and I'll refund you. No questions asked.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Is this KJV-only?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. We teach exclusively from the KJV 1611. If that's a problem for you, this isn't the place for you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 12,000+ men in the War Room. Pay once. Access forever.
          </p>
          <Link
            href="/gate-pass"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-xl px-12 py-4 rounded-lg transition-colors"
          >
            Get War Room Access - $3
          </Link>
          <p className="text-sm text-gray-500 mt-4">One payment. Lifetime access. No subscription.</p>
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
