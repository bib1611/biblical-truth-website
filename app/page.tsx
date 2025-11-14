import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero - Dan Koe Style */}
      <section className="min-h-screen flex items-center bg-black pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Most Christian Men Are <br/><span className="bg-gradient-to-r from-[#ff6b00] to-[#ff8533] bg-clip-text text-transparent">Spiritually Weak</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#999] mb-12 leading-relaxed max-w-2xl">
              Comfortable Christianity created passive men. The Bible demands warriors. This is biblical truth without compromise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/vault" className="btn-hostile text-center px-8 py-4">
                Get The Vault - $365
              </Link>
              <Link href="#free-guide" className="btn-secondary text-center px-8 py-4">
                Start with Free Guide
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#666]">
              <span className="font-semibold text-white">320K+</span>
              <span>downloads</span>
              <span className="opacity-50">•</span>
              <span className="font-semibold text-white">20K+</span>
              <span>subscribers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Value Prop */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The church preaches a Jesus who never offends and never costs anything.</h2>
          <p className="text-lg text-[#999] leading-relaxed">
            This is biblical truth without compromise. For men ready to reject comfortable Christianity.
          </p>
        </div>
      </section>

      {/* Products - Modern Pricing */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-[#999] text-lg">From curious to committed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vault */}
            <div className="bg-gradient-to-b from-[#ff6b00]/10 to-transparent border-2 border-[#ff6b00] p-8 rounded-xl relative">
              <div className="absolute -top-3 left-6 bg-[#ff6b00] text-black px-3 py-1 rounded-full text-xs font-bold">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-4">The Vault</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold">$365</span>
                <span className="text-[#666]">one-time</span>
              </div>
              <p className="text-[#999] mb-8 leading-relaxed">
                Everything. Lifetime access to all guides, audio content, and community.
              </p>
              <ul className="space-y-3 mb-8">
                {['15+ Complete Guides', 'Exclusive Audio', 'Private Community', 'Lifetime Updates', 'New Content Monthly'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#999]">
                    <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/vault" className="btn-hostile w-full text-center block">
                Get Access
              </Link>
            </div>

            {/* Substack */}
            <div className="bg-[#111] border border-[#222] p-8 rounded-xl hover:border-[#333] transition-colors">
              <h3 className="text-2xl font-bold mb-2">Substack</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold">$5</span>
                <span className="text-[#666]">/month</span>
              </div>
              <p className="text-[#999] mb-8 leading-relaxed">
                Weekly deep dives. Cancel anytime.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-[#999]">
                <li>• 2-3 articles per week</li>
                <li>• Member-only posts</li>
                <li>• Full archive access</li>
                <li>• Community discussion</li>
              </ul>
              <a href="https://biblicalman.substack.com" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-center block">
                Subscribe
              </a>
            </div>

            {/* Guides */}
            <div className="bg-[#111] border border-[#222] p-8 rounded-xl hover:border-[#333] transition-colors">
              <h3 className="text-2xl font-bold mb-2">Guides</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold">$15</span>
                <span className="text-[#666]">- $60</span>
              </div>
              <p className="text-[#999] mb-8 leading-relaxed">
                Pick your battle. Targeted transformation.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-[#999]">
                <li>• Biblical Masculinity</li>
                <li>• Marriage & Authority</li>
                <li>• Sexual Purity</li>
                <li>• Spiritual Warfare</li>
              </ul>
              <Link href="/products" className="btn-secondary w-full text-center block">
                Browse All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Social Proof */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl text-[#999] italic mb-2">
            "Destroyed every comfortable lie I believed."
          </p>
          <p className="text-sm text-[#666]">— Marcus T.</p>
        </div>
      </section>

      {/* Free Guide CTA */}
      <section id="free-guide" className="py-32 bg-gradient-to-br from-[#ff6b00] to-[#ff8533]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Start Here</h2>
          <p className="text-xl mb-4 text-black/80">
            Download "Satan's 5 Deadliest Lies About Biblical Manhood"
          </p>
          <p className="mb-12 text-black/70">
            Free. No credit card. Just truth.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-white/90 backdrop-blur text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
              required
            />
            <button type="submit" className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-all">
              Get Guide
            </button>
          </form>

          <p className="text-sm text-black/60 mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#222] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-2">THE BIBLICAL MAN</p>
              <p className="text-sm text-[#666]">Uncomfortable truth for comfortable Christians</p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="https://x.com/biblicalman" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white transition-colors">Twitter</a>
              <a href="https://biblicalman.substack.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white transition-colors">Substack</a>
              <a href="https://biblicalman.gumroad.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white transition-colors">Gumroad</a>
            </div>
          </div>
          <div className="text-center text-sm text-[#666] border-t border-[#222] pt-8">
            © 2024 The Biblical Man
          </div>
        </div>
      </footer>
    </>
  );
}
