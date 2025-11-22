import Link from 'next/link';
import { products, getProductsByCategory } from '@/lib/products';

export default function ArmoryPage() {
  const fatherProducts = getProductsByCategory('fathers');
  const warriorProducts = getProductsByCategory('warriors');
  const vaultProducts = getProductsByCategory('vault');

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
          <div className="text-6xl mb-6">🗡️</div>
          <h1 className="text-5xl md:text-7xl font-black mb-3 leading-tight">
            The Armory
          </h1>
          <p className="text-xl text-gray-500 mb-6 uppercase tracking-wide font-bold">
            Premium Courses & Study Guides
          </p>
          <p className="text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            In-depth training for the battles you're actually fighting.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Deep-dive courses for fathers, warriors, and students of the Word. Start with the $3 War Room below—these are for when you need something specific.
          </p>
        </div>
      </section>

      {/* War Room Upsell */}
      <section className="relative z-10 px-6 py-12 border-b border-white/10 bg-amber-500/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 to-slate-950 border-2 border-amber-500/30 rounded-2xl p-8">
            <div className="flex-1">
              <p className="text-amber-500 font-bold text-sm mb-2 uppercase tracking-wide">Not a member yet?</p>
              <h3 className="text-2xl font-black mb-2">Start with the War Room ($3)</h3>
              <p className="text-gray-400">
                Get 24/7 radio, tactical library, and community access before diving into premium products.
              </p>
            </div>
            <Link
              href="/gate-pass"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Access - $3
            </Link>
          </div>
        </div>
      </section>

      {/* For Fathers */}
      <section className="relative z-10 px-6 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">👨‍👦</div>
              <h2 className="text-4xl font-black">For Fathers</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Raising warriors, not wimps. Tactical frameworks for fathers who refuse to let culture raise their kids.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fatherProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    {product.featured && (
                      <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold mb-3">
                        BESTSELLER
                      </div>
                    )}
                    <h3 className="text-2xl font-black mb-2 group-hover:text-amber-500 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-4">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">What you're buying:</p>
                    <p className="text-white text-sm leading-relaxed italic">
                      "{product.identityTagline}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-amber-500">{product.price}</span>
                    <a
                      href={product.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                      Get This →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Warriors */}
      <section className="relative z-10 px-6 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">⚔️</div>
              <h2 className="text-4xl font-black">For Warriors</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Marriage. Mission. Masculinity. Resources for men at war on multiple fronts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warriorProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    {product.featured && (
                      <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-xs font-bold mb-3">
                        BESTSELLER
                      </div>
                    )}
                    <h3 className="text-2xl font-black mb-2 group-hover:text-orange-500 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-4">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">What you're buying:</p>
                    <p className="text-white text-sm leading-relaxed italic">
                      "{product.identityTagline}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-orange-500">{product.price}</span>
                    <a
                      href={product.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                      Get This →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Doctrine Vault */}
      <section className="relative z-10 px-6 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">📖</div>
              <h2 className="text-4xl font-black">The Doctrine Vault</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Deep theological training for students who want what the KJV 1611 actually says, not what your denomination wishes it said.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaultProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    {product.featured && (
                      <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-xs font-bold mb-3">
                        BESTSELLER
                      </div>
                    )}
                    <h3 className="text-2xl font-black mb-2 group-hover:text-blue-500 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-4">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">What you're buying:</p>
                    <p className="text-white text-sm leading-relaxed italic">
                      "{product.identityTagline}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-blue-500">{product.price}</span>
                    <a
                      href={product.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
                    >
                      Get This →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the $3 War Room first. Explore the community, listen to the radio, browse the library. Then come back here when you know what you need.
          </p>
          <Link
            href="/gate-pass"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-black text-xl px-12 py-4 rounded-lg transition-colors"
          >
            Start with the War Room - $3
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
