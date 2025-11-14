import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Stop Window Shopping.<br />
              <span className="text-[#FFD700]">Make a Decision.</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Three options. Every one demands something from you. Pick your level of commitment.
            </p>
          </div>

          {/* The Vault - Premium Placement */}
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-1 mb-12 max-w-5xl mx-auto">
            <div className="bg-black p-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="bg-[#DC143C] text-white px-4 py-1 text-sm font-black">BEST VALUE</span>
                <span className="bg-[#FFD700] text-black px-4 py-1 text-sm font-black">MOST POPULAR</span>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-5xl font-black mb-4">THE VAULT</h2>
                  <div className="text-6xl font-black text-[#FFD700] mb-6">$365</div>
                  <p className="text-xl text-gray-300 mb-6">
                    Lifetime access to everything. Every guide. Every resource. Every piece of content I've ever created, plus everything I create in the future.
                  </p>
                  <p className="text-lg text-gray-400 mb-8">
                    This is for men who are done playing games. You get it all. No monthly fees. No upsells. Just full access, forever.
                  </p>
                  <a
                    href="https://biblicalman.gumroad.com/l/vault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hostile inline-block"
                  >
                    BUY THE VAULT NOW
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[#FFD700]">What You Get:</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-2xl">✓</span>
                      <span><strong>15+ Complete Guides</strong> - Biblical masculinity, marriage, sexual purity, spiritual warfare, suffering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-2xl">✓</span>
                      <span><strong>Exclusive Audio Content</strong> - Deep dives you won't find anywhere else</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-2xl">✓</span>
                      <span><strong>Private Community Access</strong> - Connect with serious men on the same path</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-2xl">✓</span>
                      <span><strong>New Content Monthly</strong> - Fresh resources added regularly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FFD700] text-2xl">✓</span>
                      <span><strong>Lifetime Updates</strong> - One payment, unlimited access forever</span>
                    </li>
                  </ul>

                  <div className="mt-8 p-6 bg-[#0a0a0a] border-2 border-[#FFD700]">
                    <p className="text-sm text-gray-400 mb-2">SIMPLE MATH:</p>
                    <p className="text-lg">Individual guides: $15-60 each</p>
                    <p className="text-lg">15 guides = <span className="line-through text-gray-500">$500+</span></p>
                    <p className="text-2xl font-black text-[#FFD700] mt-2">Vault price: $365</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Products */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Substack */}
            <div className="bg-[#0a0a0a] border-2 border-white p-8">
              <h2 className="text-4xl font-black mb-4">SUBSTACK</h2>
              <div className="text-5xl font-black mb-2">$5<span className="text-2xl">/month</span></div>
              <p className="text-sm text-gray-400 mb-6">Cancel anytime. No commitment.</p>

              <p className="text-lg text-gray-300 mb-6">
                Weekly long-form articles diving into uncomfortable biblical truths. The content your pastor won't preach.
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">What You Get:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-white">•</span>
                  <span>2-3 in-depth articles per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">•</span>
                  <span>Member-only posts and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">•</span>
                  <span>Full archive access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">•</span>
                  <span>Community comment section</span>
                </li>
              </ul>

              <a
                href="https://biblicalman.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center block"
              >
                SUBSCRIBE ON SUBSTACK
              </a>
            </div>

            {/* Individual Guides */}
            <div className="bg-[#0a0a0a] border-2 border-gray-600 p-8">
              <h2 className="text-4xl font-black mb-4">INDIVIDUAL GUIDES</h2>
              <div className="text-5xl font-black mb-2">$15-60</div>
              <p className="text-sm text-gray-400 mb-6">À la carte. One-time purchase.</p>

              <p className="text-lg text-gray-300 mb-6">
                Need help with a specific battle? Get targeted biblical truth for the fight you're in right now.
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">Available Guides:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  <span>The Submission Fraud ($29)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  <span>Biblical Masculinity Blueprint ($39)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  <span>Sexual Purity Warfare ($25)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  <span>The Suffering Saint ($35)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  <span>+ 11 more guides</span>
                </li>
              </ul>

              <a
                href="https://biblicalman.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center block"
              >
                BROWSE ALL GUIDES
              </a>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-center mb-12">
              <span className="text-[#FFD700]">Compare</span> Your Options
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-2 border-gray-700">
                <thead>
                  <tr className="bg-[#0a0a0a]">
                    <th className="border border-gray-700 p-4 text-left font-black">PRODUCT</th>
                    <th className="border border-gray-700 p-4 text-left font-black">PRICE</th>
                    <th className="border border-gray-700 p-4 text-left font-black">FOR MEN WHO</th>
                    <th className="border border-gray-700 p-4 text-left font-black">GET ACCESS TO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-black">
                    <td className="border border-gray-700 p-4 font-bold">Free Guide</td>
                    <td className="border border-gray-700 p-4 text-[#FFD700]">$0</td>
                    <td className="border border-gray-700 p-4">Are curious</td>
                    <td className="border border-gray-700 p-4">Satan's 5 lies exposed</td>
                  </tr>
                  <tr className="bg-[#0a0a0a]">
                    <td className="border border-gray-700 p-4 font-bold">Substack</td>
                    <td className="border border-gray-700 p-4 text-[#FFD700]">$5/mo</td>
                    <td className="border border-gray-700 p-4">Want weekly truth</td>
                    <td className="border border-gray-700 p-4">Deep biblical teaching</td>
                  </tr>
                  <tr className="bg-black">
                    <td className="border border-gray-700 p-4 font-bold">Individual Guides</td>
                    <td className="border border-gray-700 p-4 text-[#FFD700]">$15-60</td>
                    <td className="border border-gray-700 p-4">Need specific help</td>
                    <td className="border border-gray-700 p-4">Targeted transformation</td>
                  </tr>
                  <tr className="bg-[#FFD700] text-black">
                    <td className="border border-black p-4 font-black">THE VAULT</td>
                    <td className="border border-black p-4 font-black">$365</td>
                    <td className="border border-black p-4 font-bold">Are serious</td>
                    <td className="border border-black p-4 font-bold">Everything + exclusive content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#DC143C] text-white p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">
              Still Undecided?
            </h2>
            <p className="text-2xl mb-8">
              That's a decision too. Most men stay comfortable.
            </p>
            <p className="text-xl mb-8 text-white/90">
              But if you're ready to stop playing church and start living biblically—
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/vault" className="bg-[#FFD700] text-black px-8 py-4 font-black hover:bg-black hover:text-[#FFD700] border-2 border-[#FFD700] transition-all">
                GET THE VAULT
              </Link>
              <Link href="/#free-guide" className="bg-black text-white px-8 py-4 font-bold hover:bg-white hover:text-black border-2 border-white transition-all">
                START WITH FREE GUIDE
              </Link>
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
