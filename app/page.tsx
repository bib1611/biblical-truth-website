import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Top Bar */}
      <div className="w-full border-b border-[#222] bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-end">
          <Link
            href="/login"
            className="text-sm font-bold text-[#666] hover:text-white transition-colors flex items-center gap-2"
          >
            MEMBER LOGIN <span className="text-[#FFD700]">→</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 tracking-tight">
            "I got kicked out of Bible school for preaching what the King James Bible actually says about manhood."
          </h1>

          <p className="text-xl md:text-2xl text-[#888] font-medium leading-relaxed mb-12">
            They wanted me to be "nice." They wanted me to compromise. I chose to tell the truth instead.
          </p>

          <div className="prose prose-invert prose-lg text-[#ccc]">
            <p className="mb-6">
              <strong className="text-white">Dear Christian Man,</strong>
            </p>
            <p className="mb-6">
              If you look around your church and feel like something is missing... if you're tired of "soft" sermons that sound more like therapy than theology... if you're wondering where the men have gone...
            </p>
            <p className="mb-8">
              <span className="text-white font-bold border-b-2 border-[#FFD700]">You are not alone.</span>
            </p>
            <p className="mb-6">
              I'm a preacher with calluses. I learned biblical truth the hard way—through 22 years of marriage, raising children, working with my hands, and refusing to compromise when the cost was high.
            </p>
            <p className="mb-8">
              The modern church has been feminized. It tells men to be passive. To "share their feelings" instead of leading their families. To apologize for their God-given authority.
            </p>

            <div className="bg-[#111] border-l-4 border-[#DC143C] p-6 my-8">
              <p className="text-white font-bold mb-4">The result?</p>
              <ul className="space-y-3 text-[#999] list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-[#DC143C]">❌</span>
                  Men who abdicate their role as spiritual leaders.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC143C]">❌</span>
                  Wives who are forced to lead because their husbands won't.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC143C]">❌</span>
                  Children who grow up without a strong example of biblical masculinity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Hub Section */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#222]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6">It's Time to Stop Apologizing.</h2>
          <p className="text-lg text-[#888] mb-12">
            The Biblical Man Hub is not for everyone. It is a command center for men who are done with games. Men who want the raw, undiluted truth of Scripture.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-black border border-[#222] p-6 rounded-lg">
              <div className="text-2xl mb-3">⚔️</div>
              <h3 className="text-xl font-bold text-white mb-2">The War Room</h3>
              <p className="text-[#666] text-sm">Deep KJV Bible study tools to sharpen your sword.</p>
            </div>
            <div className="bg-black border border-[#222] p-6 rounded-lg">
              <div className="text-2xl mb-3">📻</div>
              <h3 className="text-xl font-bold text-white mb-2">King's Radio</h3>
              <p className="text-[#666] text-sm">24/7 streaming of uncompromising biblical teaching.</p>
            </div>
            <div className="bg-black border border-[#222] p-6 rounded-lg">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Intel Articles</h3>
              <p className="text-[#666] text-sm">Tactical guides on marriage, fatherhood, and leadership.</p>
            </div>
            <div className="bg-black border border-[#222] p-6 rounded-lg">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">The Armory</h3>
              <p className="text-[#666] text-sm">Resources to equip you for the spiritual battle.</p>
            </div>
          </div>

          <p className="text-lg text-white font-medium">
            I am inviting you to join 20,000+ men who have decided to stop being passive and start leading.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#FFD700] text-black text-xs font-black px-3 py-1 rounded mb-6">
            LIMITED TIME OFFER
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Get Full Access to<br />The Biblical Man Hub
          </h2>

          <p className="text-xl text-[#888] mb-10 max-w-xl mx-auto">
            Access all resources, the War Room, King's Radio, Intel Articles, and The Armory for just <span className="text-white font-bold underline decoration-[#FFD700]">$3</span>.
          </p>

          <div className="bg-[#111] border border-[#333] p-8 rounded-2xl max-w-md mx-auto mb-12">
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3 text-[#ccc]">
                <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                One-time payment
              </li>
              <li className="flex items-center gap-3 text-[#ccc]">
                <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Lifetime access
              </li>
              <li className="flex items-center gap-3 text-[#ccc]">
                <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Instant email instructions
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/3cIaEYgbC1uh5I45VIcMM26"
              className="block w-full bg-[#FFD700] hover:bg-[#ffe44d] text-black font-black text-xl py-5 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              GET ACCESS NOW ($3)
            </a>
            <p className="text-xs text-[#666] mt-4">
              Secure payment via Stripe. Instant access.
            </p>
          </div>

          <div className="text-[#666] text-sm">
            Already a member? <Link href="/login" className="text-[#FFD700] hover:underline">Login here</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#222] bg-black text-center">
        <p className="text-[#444] text-sm">
          © 2024 The Biblical Man. Uncomfortable truth for comfortable Christians.
        </p>
      </footer>
    </main>
  );
}
