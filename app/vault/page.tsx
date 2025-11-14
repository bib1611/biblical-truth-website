import Navigation from '@/components/Navigation';

export default function VaultPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#DC143C] text-white px-6 py-2 font-black text-sm mb-6">
              ENROLLMENT OPEN
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              THE VAULT:<br />
              <span className="text-[#FFD700]">Everything You Need to Stop Playing Church</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12">
              Lifetime access to 15+ biblical guides, exclusive content, and a private community of men who refuse comfortable Christianity.
            </p>

            <div className="bg-[#FFD700] text-black p-12 mb-12">
              <div className="text-7xl font-black mb-4">$365</div>
              <p className="text-2xl font-bold mb-6">One payment. Lifetime access. No subscriptions.</p>
              <a
                href="https://biblicalman.gumroad.com/l/vault"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#FFD700] px-12 py-5 font-black text-xl hover:bg-[#DC143C] hover:text-white border-4 border-black transition-all inline-block"
              >
                BUY THE VAULT NOW
              </a>
            </div>
          </div>
        </section>

        {/* Problem Agitation */}
        <section className="bg-[#0a0a0a] py-20 mb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-black mb-12 text-center">
              The Problem: <span className="text-[#DC143C]">Comfortable Christianity is Killing You</span>
            </h2>

            <div className="space-y-8 text-lg">
              <p>
                Your church says be nice. Smile. Don't offend anyone. Submit to authority (but only the authority that validates their theology).
                Love your wife (but don't lead her). Raise your kids (but let the world define masculinity for them).
              </p>

              <p className="text-xl font-bold text-[#FFD700]">
                You know something is wrong. You feel it in your bones.
              </p>

              <p>
                You're watching porn when no one's looking. Your wife doesn't respect you. Your kids ignore you.
                You go to church on Sunday, say the right things, sing the songs—but Monday through Saturday you're just another comfortable, compromised man.
              </p>

              <p className="text-xl font-bold text-[#DC143C]">
                The world calls this "normal Christianity." The Bible calls it lukewarm.
              </p>

              <p>
                You've read the books. You've listened to the podcasts. You've tried to be the "better man" those influencers promise you can become.
                But they're selling you masculinity theater. Tactics without truth. Strategies without sacrifice.
              </p>

              <p className="text-2xl font-black text-white border-l-4 border-[#FFD700] pl-6">
                "I know your deeds, that you are neither cold nor hot. I wish you were either one or the other!
                So, because you are lukewarm—neither hot nor cold—I am about to spit you out of my mouth."
                <span className="block text-base text-gray-400 mt-2">— Revelation 3:15-16</span>
              </p>
            </div>
          </div>
        </section>

        {/* Biblical Solution */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">
              The Solution: <span className="text-[#FFD700]">Biblical Truth That Burns</span>
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                Jesus didn't die so you could be comfortable. Paul wasn't beheaded so you could watch Netflix and call yourself a believer.
                Peter wasn't crucified upside down so you could show up to church, check a box, and go home unchanged.
              </p>

              <p className="text-xl font-bold">
                Biblical manhood costs everything. Always has. Always will.
              </p>

              <p>
                The Vault exists because most men need more than Sunday sermons. They need concentrated, unfiltered biblical teaching
                that doesn't apologize, doesn't compromise, and doesn't care if it offends your pastor.
              </p>

              <p>
                This is 15+ guides covering everything the comfortable church won't touch: real authority in marriage,
                defeating sexual sin, raising sons in a feminized culture, suffering as a Christian, spiritual warfare, and more.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="bg-[#0a0a0a] py-20 mb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-black mb-16 text-center">
              What's Inside <span className="text-[#FFD700]">The Vault</span>
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'The Submission Fraud',
                  desc: 'Why most Christian men demand authority without accepting crucifixion. The biblical pattern no one teaches.',
                  value: '$29'
                },
                {
                  title: 'Biblical Masculinity Blueprint',
                  desc: 'What actual biblical manhood looks like when stripped of cultural baggage and church-approved cowardice.',
                  value: '$39'
                },
                {
                  title: 'Sexual Purity Warfare',
                  desc: 'How to fight pornography, lust, and sexual sin with weapons that actually work. Not accountability apps.',
                  value: '$25'
                },
                {
                  title: 'The Suffering Saint',
                  desc: 'Biblical theology of suffering. Why God allows it. What it produces. How to endure without becoming bitter.',
                  value: '$35'
                },
                {
                  title: 'Raising Sons in Babylon',
                  desc: 'Practical biblical framework for raising masculine sons in a culture that hates masculinity.',
                  value: '$29'
                },
                {
                  title: 'The Authority Problem',
                  desc: 'What biblical authority actually means. How to lead without being a tyrant or a coward.',
                  value: '$29'
                },
                {
                  title: 'Spiritual Warfare Manual',
                  desc: 'Demons are real. Spiritual warfare is real. Here\'s how to fight battles you can\'t see.',
                  value: '$35'
                },
                {
                  title: 'The Prosperity Gospel Lie',
                  desc: 'Why "name it and claim it" is satanic. What the Bible actually promises (and doesn\'t).',
                  value: '$25'
                },
                {
                  title: 'Biblical Dating & Marriage',
                  desc: 'Courtship, dating, finding a wife, leading a marriage. Biblical patterns the church abandoned.',
                  value: '$39'
                },
                {
                  title: 'The Narrow Gate Protocol',
                  desc: 'Most Christians are taking the wide road. Here\'s how to identify it and get off.',
                  value: '$29'
                },
                {
                  title: 'Church Discernment Guide',
                  desc: 'How to identify false teaching, when to leave a church, and what biblical ecclesiology looks like.',
                  value: '$35'
                },
                {
                  title: 'The Masculine Prayer Life',
                  desc: 'Prayer for warriors, not for weak men who need God to validate their feelings.',
                  value: '$25'
                },
              ].map((guide, idx) => (
                <div key={idx} className="bg-black border-2 border-[#FFD700] p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-black text-[#FFD700]">{guide.title}</h3>
                    <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{guide.value}</span>
                  </div>
                  <p className="text-gray-300">{guide.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-black border-2 border-white p-6 text-center">
                <h3 className="text-2xl font-black mb-2 text-[#FFD700]">BONUS #1</h3>
                <p className="text-lg">Exclusive Audio Content</p>
                <p className="text-sm text-gray-400 mt-2">Deep dives and teachings not available anywhere else</p>
              </div>
              <div className="bg-black border-2 border-white p-6 text-center">
                <h3 className="text-2xl font-black mb-2 text-[#FFD700]">BONUS #2</h3>
                <p className="text-lg">Private Community Access</p>
                <p className="text-sm text-gray-400 mt-2">Connect with serious men who refuse comfort</p>
              </div>
              <div className="bg-black border-2 border-white p-6 text-center">
                <h3 className="text-2xl font-black mb-2 text-[#FFD700]">BONUS #3</h3>
                <p className="text-lg">Lifetime Updates</p>
                <p className="text-sm text-gray-400 mt-2">New content added monthly, yours forever</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center">
              What <span className="text-[#FFD700]">Men Are Saying</span>
            </h2>

            <div className="space-y-8">
              <div className="bg-[#0a0a0a] border-l-4 border-[#FFD700] p-8">
                <p className="text-xl italic mb-4">
                  "I've spent thousands on men's conferences, Christian books, and programs. This $365 investment did more in 3 months than 10 years of comfortable Christianity. My wife notices. My kids notice. I'm leading like a man for the first time."
                </p>
                <p className="font-bold text-[#FFD700]">— James K., Texas</p>
              </div>

              <div className="bg-[#0a0a0a] border-l-4 border-[#FFD700] p-8">
                <p className="text-xl italic mb-4">
                  "I was addicted to porn for 15 years. Tried accountability groups, filters, promises. The Sexual Purity Warfare guide broke the cycle in a way nothing else did. Biblical warfare works."
                </p>
                <p className="font-bold text-[#FFD700]">— Marcus T., Pennsylvania</p>
              </div>

              <div className="bg-[#0a0a0a] border-l-4 border-[#FFD700] p-8">
                <p className="text-xl italic mb-4">
                  "My pastor told me this content is 'too extreme.' That's how I knew it was biblical. Comfortable Christians will hate this. Warriors will recognize truth."
                </p>
                <p className="font-bold text-[#FFD700]">— David R., Colorado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Justification */}
        <section className="bg-[#FFD700] text-black py-20 mb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-black mb-12 text-center">
              Let's Talk About the Price
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                <strong>$365 = $1 per day.</strong> Less than your daily coffee. Less than your streaming services.
                Less than the money you waste on distractions that keep you comfortable.
              </p>

              <div className="bg-black text-white p-8 my-8">
                <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Simple Math:</h3>
                <ul className="space-y-2">
                  <li>• 12 individual guides at retail = <span className="line-through text-gray-400">$380</span></li>
                  <li>• Exclusive audio content = <span className="line-through text-gray-400">$99</span></li>
                  <li>• Community access = <span className="line-through text-gray-400">$15/month x 12 = $180</span></li>
                  <li>• Lifetime updates = <span className="line-through text-gray-400">Priceless</span></li>
                  <li className="text-2xl font-black text-[#FFD700] pt-4">Total Value: $659+</li>
                  <li className="text-3xl font-black text-white">Your Price: $365</li>
                </ul>
              </div>

              <p className="text-xl font-bold">
                You'll spend more on garbage this year. You'll waste more on things that don't matter.
                You'll invest in comfort while your soul starves.
              </p>

              <p>
                Or you can make one decision that changes everything.
              </p>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0a0a0a] border-4 border-[#DC143C] p-12 text-center">
              <h2 className="text-3xl font-black mb-6">
                30-Day "I'm Too Comfortable" Guarantee
              </h2>
              <p className="text-xl mb-6">
                If The Vault doesn't challenge every comfortable belief you hold about Christianity,
                if it doesn't force you to confront your own cowardice, if it doesn't make you uncomfortable—
                <span className="block text-2xl font-black text-[#FFD700] mt-4">I'll refund every penny.</span>
              </p>
              <p className="text-gray-400">
                30 days. Full refund. No questions asked. (But you won't need it.)
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto bg-black border-4 border-[#FFD700] p-12 text-center">
            <h2 className="text-5xl font-black mb-8">
              Make the Decision
            </h2>
            <p className="text-2xl mb-8 text-gray-300">
              Most men will close this page. They'll stay comfortable. They'll keep playing church.
              They'll die having never truly lived as biblical men.
            </p>
            <p className="text-3xl font-black mb-12 text-[#FFD700]">
              Are you most men?
            </p>

            <a
              href="https://biblicalman.gumroad.com/l/vault"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-16 py-6 font-black text-2xl hover:bg-white transition-all inline-block shadow-lg"
            >
              GET VAULT ACCESS - $365
            </a>

            <p className="text-sm text-gray-500 mt-8">
              One-time payment • Lifetime access • 30-day guarantee
            </p>
          </div>
        </section>
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
