import Link from 'next/link';

export default function GatePassPage() {
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
              Already have access? Sign In →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 font-bold text-sm mb-6">
            ONE-TIME PAYMENT • LIFETIME ACCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            The $3 Gate Pass
          </h1>
          <p className="text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Full access to the War Room for the price of a coffee.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            No subscription. No recurring charges. No upsells. Pay once, access forever.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Powered by Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
          </div>

          <a
            href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-xl px-12 py-5 rounded-lg transition-colors shadow-lg shadow-amber-500/20"
          >
            Get Instant Access - $3
          </a>
          <p className="text-sm text-gray-500 mt-3">Secure payment processing via Stripe</p>
          <p className="text-sm text-gray-500">12,793 members and counting</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">What You Get</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to grow as a biblical man. All for $3. Forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            {/* Radio */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">📻</div>
              <h3 className="text-2xl font-black mb-3">Final Fight Bible Radio</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                24/7 uncompromising KJV 1611 teaching. Stream from anywhere. No fluff. No prosperity gospel. Just what Scripture actually says.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Live teaching from Genesis to Revelation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Verse-by-verse exposition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Mobile app access (coming soon)</span>
                </li>
              </ul>
            </div>

            {/* Library */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-black mb-3">The Library</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Tactical content for fathers and warriors. Marriage wisdom. Parenting frameworks. Spiritual warfare guides. Practical, actionable, biblical.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Weekly new content and teachings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Topical guides on marriage, parenting, mission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Downloadable resources</span>
                </li>
              </ul>
            </div>

            {/* Study Tools */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-black mb-3">Bible Study Tools</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Deep reference materials for serious students of Scripture. Concordances, commentaries, and study guides rooted in the KJV 1611.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>KJV word studies and cross-references</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Doctrine deep-dives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Study plans and reading schedules</span>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-black mb-3">The Community</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                12,000+ men who've rejected compromised Christianity. Ask questions. Share victories. Find brothers who actually believe the Bible.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Private member discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Q&A with leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  <span>Prayer requests and accountability</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bonus Offer */}
          <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-3 mb-3">
              <div className="text-3xl">🎁</div>
              <div>
                <p className="text-green-400 font-black text-lg mb-2">LIMITED BONUS: Join This Week</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get <span className="text-green-400 font-bold">"The Uncomfortable Christ"</span> absolutely free (162+ downloads, normally sold separately). Instant delivery to your email when you join.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center">This bonus offer expires when the week ends. Don't miss it.</p>
          </div>

          <div className="bg-amber-500/10 border-2 border-amber-500/20 rounded-2xl p-8 text-center">
            <p className="text-amber-500 font-bold mb-2 uppercase text-sm tracking-wide">Lifetime Access</p>
            <p className="text-white text-lg mb-1">
              Every resource listed above. Every future update. Every new piece of content.
            </p>
            <p className="text-gray-400 text-lg">
              Pay once. Access forever. For less than a single month of Netflix.
            </p>
          </div>
        </div>
      </section>

      {/* Why So Cheap? */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-center">Why Only $3?</h2>

          <div className="space-y-6 mb-10">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">This Isn't a Grift</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm not here to extract maximum revenue from you. The goal is to make biblical truth accessible to as many men as possible, while keeping out the tourists who don't actually value it.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Low Enough That Anyone Can Afford It</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a college student, a single dad, or building a business, $3 shouldn't be a barrier. If you can't afford $3, email me. I'll comp you in.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">High Enough That You Actually Value It</h3>
              <p className="text-gray-400 leading-relaxed">
                Free content gets ignored. $3 is high enough that you'll actually log in, engage, and use what's inside. Skin in the game matters.
              </p>
            </div>
          </div>

          <div className="text-center">
            {/* Trust Badges */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trusted by 12,793+ Members</span>
              </div>
            </div>

            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-xl px-12 py-4 rounded-lg transition-colors"
            >
              Get Access Now - $3
            </a>
            <p className="text-sm text-gray-500 mt-4">Instant access • Secure checkout via Stripe</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">What Members Are Saying</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "I've been in church my whole life and never heard half of what's taught here. This is what I needed 10 years ago."
              </p>
              <p className="text-sm text-gray-500">— Marcus T., Married 12 Years</p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Within 3 weeks my wife asked ME to lead family devotionals for the first time in 5 years. This changed everything."
              </p>
              <p className="text-sm text-gray-500">— James R., Father of 2</p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Best $3 I've ever spent. The radio alone is worth 100x that. Everything else is a bonus."
              </p>
              <p className="text-sm text-gray-500">— David K., Single, 28</p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Finally found a community of men who don't apologize for what Scripture actually says. Worth every penny."
              </p>
              <p className="text-sm text-gray-500">— Aaron M., Deacon</p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-8 text-center">Common Questions</h2>

          <div className="space-y-6">

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Is this really lifetime access?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. Pay $3 once. Access everything forever. No recurring charges. No "renewal fees." No fine print.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">What if I don't like it?</h3>
              <p className="text-gray-400 leading-relaxed">
                It's $3. If you genuinely feel you wasted your money, email me and I'll refund you. But I'm confident you won't ask.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Do I need the Armory products too?</h3>
              <p className="text-gray-400 leading-relaxed">
                No. The War Room gives you everything you need. The Armory is for when you want premium courses or specific tactical guides. Start with the War Room. Buy from the Armory only when you actually need it.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Is this KJV-only?</h3>
              <p className="text-gray-400 leading-relaxed">
                Yes. We teach from the KJV 1611. If that's a dealbreaker for you, this isn't the place for you.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">What is Stripe? Is it safe?</h3>
              <p className="text-gray-400 leading-relaxed">
                Stripe is the world's leading payment processor, used by companies like Amazon, Google, and Shopify. We never see your credit card information—Stripe handles all payment security with bank-level encryption. Your payment is 100% secure.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">How do I access everything after I pay?</h3>
              <p className="text-gray-400 leading-relaxed">
                You'll receive an email instantly with your login credentials. Log in at thebiblicalmantruth.com/login and you're in.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Either You Want This, Or You Don't
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            12,793 men have already joined. They're in the War Room right now, growing, learning, and becoming the men God called them to be.
          </p>

          <a
            href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-2xl px-16 py-6 rounded-lg transition-colors shadow-2xl shadow-amber-500/30"
          >
            Get Instant Access - $3
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Subscription</span>
            </div>
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
