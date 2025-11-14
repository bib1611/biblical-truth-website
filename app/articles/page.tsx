import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ArticlesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-center">
              Articles: <span className="text-[#FFD700]">Uncomfortable Truth</span>
            </h1>
            <p className="text-2xl text-center text-gray-300 mb-16">
              Free content that most churches won't teach. Subscribe for weekly truth.
            </p>

            {/* Article List Placeholder */}
            <div className="space-y-8">
              {/* Sample Article */}
              <article className="bg-[#0a0a0a] border-l-4 border-[#FFD700] p-8 hover:border-[#DC143C] transition-all">
                <div className="text-sm text-[#FFD700] font-bold mb-2">BIBLICAL MASCULINITY</div>
                <h2 className="text-3xl font-black mb-4">
                  <Link href="#" className="hover:text-[#FFD700]">
                    Most Christian Men Are Spiritually Castrated
                  </Link>
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  The church has created a generation of passive men who confuse niceness with holiness.
                  Here's what biblical masculinity actually looks like...
                </p>
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-[#FFD700] font-bold hover:text-white">
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </article>

              <article className="bg-[#0a0a0a] border-l-4 border-[#FFD700] p-8 hover:border-[#DC143C] transition-all">
                <div className="text-sm text-[#FFD700] font-bold mb-2">MARRIAGE</div>
                <h2 className="text-3xl font-black mb-4">
                  <Link href="#" className="hover:text-[#FFD700]">
                    The Submission Fraud: Why Your Marriage Is Failing
                  </Link>
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  Most Christian men demand authority without accepting crucifixion. That's not biblical leadership—it's tyranny.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-[#FFD700] font-bold hover:text-white">
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">8 min read</span>
                </div>
              </article>

              <article className="bg-[#0a0a0a] border-l-4 border-[#FFD700] p-8 hover:border-[#DC143C] transition-all">
                <div className="text-sm text-[#FFD700] font-bold mb-2">SEXUAL PURITY</div>
                <h2 className="text-3xl font-black mb-4">
                  <Link href="#" className="hover:text-[#FFD700]">
                    Why Accountability Apps Don't Work (And What Does)
                  </Link>
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  You can't defeat sexual sin with software. Biblical warfare requires biblical weapons.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-[#FFD700] font-bold hover:text-white">
                    Read More →
                  </Link>
                  <span className="text-sm text-gray-500">7 min read</span>
                </div>
              </article>
            </div>

            {/* CTA Block */}
            <div className="bg-[#DC143C] text-white p-12 mt-16 text-center">
              <h3 className="text-3xl font-black mb-4">Want More?</h3>
              <p className="text-xl mb-8">
                These articles are free. The deep work happens in The Vault.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/vault" className="bg-[#FFD700] text-black px-8 py-4 font-black hover:bg-black hover:text-[#FFD700] border-2 border-[#FFD700] transition-all">
                  SEE THE VAULT
                </Link>
                <a href="https://biblicalman.substack.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 font-bold hover:bg-white hover:text-black border-2 border-white transition-all">
                  SUBSCRIBE ON SUBSTACK
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4 text-lg font-bold text-white">THE BIBLICAL MAN</p>
          <p className="mb-4">Uncomfortable truth for comfortable Christians.</p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="https://x.com/biblicalman" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">Twitter/X</a>
            <a href="https://biblicalman.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">Substack</a>
            <a href="https://biblicalman.gumroad.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">Gumroad</a>
          </div>
          <p className="text-sm">© 2024 The Biblical Man. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
