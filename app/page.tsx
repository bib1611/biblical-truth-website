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

              {/* Bonus Offer */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-green-400 text-sm font-bold">🎁 LIMITED BONUS:</span>
                </div>
                <p className="text-sm text-gray-300">
                  Join this week and get <span className="text-green-400 font-bold">"The Uncomfortable Christ"</span> free (162+ downloads, normally separate). Instant delivery.
                </p>
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

      {/* Free Resources Section */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-bold mb-4">
              100% FREE
            </div>
            <h2 className="text-3xl font-black mb-3">Start Here: Free Resources</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Not ready to join yet? Start with these free resources to see if this is for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://biblicalman.gumroad.com/l/elmog" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
              <div className="text-3xl mb-3">📖</div>
              <div className="inline-block px-2 py-1 bg-green-500/20 rounded text-xs font-bold text-green-400 mb-2">228+ DOWNLOADS</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-500 transition-colors">How to Study the Bible Like Your Life Depends on It</h3>
              <p className="text-sm text-gray-400 mb-4">Practical tools for serious Bible students who refuse to twist Scripture.</p>
              <div className="text-sm text-green-500 font-semibold">Download Free Guide →</div>
            </a>
            <Link href="/start-here" className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-500 transition-colors">Find Your Path (Free Quiz)</h3>
              <p className="text-sm text-gray-400 mb-4">30-second quiz to discover what resources you actually need right now.</p>
              <div className="text-sm text-green-500 font-semibold">Take Quiz →</div>
            </Link>
            <a href="https://biblicalman.substack.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all group">
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-500 transition-colors">Free Articles & Teaching</h3>
              <p className="text-sm text-gray-400 mb-4">Weekly articles on biblical manhood, fatherhood, and uncompromising truth.</p>
              <div className="text-sm text-green-500 font-semibold">Read on Substack →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Women's Resources Section */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">For Women: Biblical Womanhood Without Sugar-Coating</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Yes, this site is for you too. Uncompromising biblical truth for Christian women who refuse to compromise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-pink-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-pink-400">In The War Room ($3):</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">✓</span>
                  <span>Biblical womanhood teaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">✓</span>
                  <span>Guides on submission, motherhood, & marriage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">✓</span>
                  <span>Community of biblical women</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-pink-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Premium Courses:</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">→</span>
                  <span>"The Queen's Guide: Raising Your Husband"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">→</span>
                  <span>"60 Uncomfortable Truths for Christian Women"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-0.5">→</span>
                  <span>Browse all women's resources in The Armory</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/gate-pass" className="inline-block bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Join The War Room - $3
            </Link>
          </div>
        </div>
      </section>

      {/* Substack War Room CTA Banner */}
      <section className="relative z-10 px-6 py-12 border-t border-white/10 bg-gradient-to-r from-amber-950/20 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-900/30 to-slate-900 border-2 border-amber-500/40 rounded-2xl p-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-amber-500/20 rounded-full text-xs font-bold text-amber-500 mb-2 uppercase tracking-wide">
                📰 SUBSTACK READERS
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Already Read Our Free Articles?</h3>
              <p className="text-gray-300 text-lg mb-1">
                Join The War Room for $3 and get 24/7 Bible radio + the full tactical library.
              </p>
              <p className="text-sm text-gray-400">
                12,793+ Substack readers already joined. This week only: get "The Uncomfortable Christ" free.
              </p>
            </div>
            <Link
              href="/gate-pass"
              className="bg-amber-500 hover:bg-amber-400 text-black font-black px-8 py-4 rounded-lg transition-colors whitespace-nowrap shadow-lg shadow-amber-500/30"
            >
              Join for $3 →
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Options Section */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black mb-3">Need Something Specific?</h2>
            <p className="text-gray-400">Most people start with the War Room. But if you're looking for advanced training...</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Option 1: See the Roadmap */}
            <Link
              href="/start-here-roadmap"
              className="group relative bg-gradient-to-b from-amber-950/30 to-slate-950 border-2 border-amber-500/30 rounded-xl p-6 hover:border-amber-500 transition-all duration-300"
            >
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-xl font-black mb-2 text-amber-500 group-hover:text-amber-400 transition-colors">
                See The Full Roadmap
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Your complete step-by-step path from free resources to becoming the biblical man you're called to be.
              </p>
              <div className="text-sm text-amber-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                View Roadmap →
              </div>
            </Link>

            {/* Option 2: Take Quiz */}
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
                Take Quiz →
              </div>
            </Link>

            {/* Option 3: Premium Products */}
            <Link
              href="/armory"
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="text-3xl mb-3">🗡️</div>
              <h3 className="text-xl font-black mb-2 group-hover:text-orange-500 transition-colors">
                Browse Premium Training
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Deep-dive courses for fathers, warriors, and serious students of Scripture ($27-$297).
              </p>
              <div className="text-sm text-orange-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">
                Browse The Armory →
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Stop Wandering?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Join 12,793+ men and women who found uncompromising biblical truth.
          </p>
          <Link
            href="/gate-pass"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-xl px-12 py-5 rounded-xl transition-colors shadow-2xl shadow-amber-500/30"
          >
            Join The War Room - $3
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
