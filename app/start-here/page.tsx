import Link from 'next/link';

export default function StartHerePage() {
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
            Let's Get You Oriented
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            You're not lost. You're just at the beginning. And that's exactly where every warrior starts.
          </p>
        </div>
      </section>

      {/* Path Selection */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black mb-4">Which Path Are You On?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pick the one that describes where you are right now. Not where you wish you were. Where you actually are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Father Path */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">👨‍👦</div>
              <h3 className="text-2xl font-black mb-4">The Father Path</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                You have kids (or are about to). You're tired of the culture raising your family while you watch.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">You need:</strong> Tactical parenting frameworks. How to raise sons. How to disciple daughters. How to lead family worship without feeling like a fraud.
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Start with:</strong> The War Room ($3) + "Before the World Does" (The Armory)
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/gate-pass"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg text-center transition-colors"
                >
                  Get War Room Access - $3
                </Link>
                <Link
                  href="/armory"
                  className="block w-full bg-white/5 border border-white/20 hover:bg-white/10 font-semibold py-3 rounded-lg text-center transition-colors"
                >
                  Browse Father Resources
                </Link>
              </div>
            </div>

            {/* Warrior Path */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500 rounded-2xl p-8">
              <div className="absolute -top-3 left-6">
                <div className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-black">
                  MOST POPULAR
                </div>
              </div>
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-2xl font-black mb-4 text-amber-500">The Man at War Path</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                You're fighting battles on multiple fronts: marriage, career, spiritual growth, becoming the man God called you to be.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">You need:</strong> Daily spiritual disciplines. Brotherhood. Tactical marriage wisdom. Resources for when the fight gets real.
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Start with:</strong> The War Room ($3) for radio, library, and community.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/gate-pass"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg text-center transition-colors"
                >
                  Get War Room Access - $3
                </Link>
                <Link
                  href="/armory"
                  className="block w-full bg-white/5 border border-amber-500/50 hover:bg-white/10 font-semibold py-3 rounded-lg text-center transition-colors"
                >
                  Browse Warrior Resources
                </Link>
              </div>
            </div>

            {/* Doctrine Path */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-white/10 rounded-2xl p-8">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-black mb-4">The Real Jesus Path</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                You're tired of watered-down theology. You want to know what the KJV actually says, not what your pastor wishes it said.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">You need:</strong> Deep Bible study tools. Verse-by-verse teaching. Theology that doesn't compromise. The Real Jesus, not the TikTok version.
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Start with:</strong> The War Room ($3) for radio + study tools, then explore The Doctrine Vault
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/gate-pass"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg text-center transition-colors"
                >
                  Get War Room Access - $3
                </Link>
                <Link
                  href="/armory"
                  className="block w-full bg-white/5 border border-white/20 hover:bg-white/10 font-semibold py-3 rounded-lg text-center transition-colors"
                >
                  Browse Doctrine Resources
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">How This Whole Thing Works</h2>
            <p className="text-gray-400">
              Simple. No tricks. No subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-black text-black flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The War Room ($3 One-Time)</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Your base camp. 24/7 radio, tactical library, Bible study tools, and a community of 12,000+ men. Pay once. Access forever. No subscription.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-black text-black flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Armory (Premium Products)</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    When you need heavy artillery. Premium courses, books, and training for specific battles. Buy what you need, when you need it. No fluff.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-8 text-center">
            <p className="text-amber-500 font-bold mb-2">RECOMMENDED</p>
            <p className="text-white text-lg mb-4">
              Start with the $3 War Room. Get access to everything. Explore. Then grab specific resources from The Armory as you need them.
            </p>
            <Link
              href="/gate-pass"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Get Started - $3
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Is this another "Christian alpha male" grift?</h3>
              <p className="text-gray-400 leading-relaxed">
                No. This is biblical manhood, not Andrew Tate with a cross. We teach what the KJV 1611 actually says, not what makes you feel powerful.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Why only $3 for the War Room?</h3>
              <p className="text-gray-400 leading-relaxed">
                Because the goal isn't to extract maximum revenue from you. It's to make biblical truth accessible while keeping tourists out. $3 is low enough that any man can afford it, high enough that you actually value it.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What if I'm not married or don't have kids yet?</h3>
              <p className="text-gray-400 leading-relaxed">
                Perfect. Start with The Man at War path. Build your foundation now. Learn to lead yourself before you lead a family.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Is this denomination-specific?</h3>
              <p className="text-gray-400 leading-relaxed">
                We teach from the KJV 1611. If your church contradicts Scripture, we'll say so. We're not here to validate your denomination. We're here to teach what the Bible actually says.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Stop Wandering?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Pick your path. Get in the War Room. Start becoming the man God called you to be.
          </p>
          <Link
            href="/gate-pass"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-lg px-12 py-4 rounded-lg transition-colors"
          >
            Get War Room Access - $3
          </Link>
          <p className="text-sm text-gray-500 mt-4">One payment. Lifetime access. 12,000+ members.</p>
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
