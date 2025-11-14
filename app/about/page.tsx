import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              From <span className="text-[#DC143C]">Garbage Collector</span><br />
              to <span className="text-[#FFD700]">Truth Teller</span>
            </h1>
            <p className="text-2xl text-gray-300">
              This isn't a success story. It's a crucifixion story.
            </p>
          </div>

          {/* Story */}
          <div className="space-y-8 text-lg mb-16">
            <div className="border-l-4 border-[#FFD700] pl-6">
              <h2 className="text-3xl font-black mb-4">The Comfortable Christian</h2>
              <p className="mb-4">
                I grew up in church. Said the right words. Prayed the right prayers. Showed up on Sunday,
                disappeared Monday through Saturday. I was the model comfortable Christian.
              </p>
              <p className="mb-4">
                I had a wife. Two kids. A "ministry." On paper, I looked like I had it together.
                Behind closed doors, I was a passive coward hiding behind religious language.
              </p>
              <p className="text-[#DC143C] font-bold">
                My wife didn't respect me. My kids didn't listen to me. I didn't respect myself.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-8">
              <h2 className="text-3xl font-black mb-4">The Breaking</h2>
              <p className="mb-4">
                God doesn't fix comfortable Christians. He breaks them.
              </p>
              <p className="mb-4">
                My breaking came through suffering I didn't ask for and couldn't escape. Loss. Pain. The kind
                that strips away every comfortable theology you've built to protect yourself from reality.
              </p>
              <p className="mb-4">
                I had two choices: become bitter or become biblical. Blame God or trust Him. Stay comfortable or embrace the cross.
              </p>
              <p className="text-[#FFD700] font-bold text-xl">
                I chose the cross. It cost me everything. It gave me everything.
              </p>
            </div>

            <div className="border-l-4 border-[#DC143C] pl-6">
              <h2 className="text-3xl font-black mb-4">Why I Started This</h2>
              <p className="mb-4">
                Because the church is full of men just like I was. Comfortable. Passive. Spiritually castrated by a culture
                that calls biblical masculinity "toxic" and a church that's too scared to disagree.
              </p>
              <p className="mb-4">
                I started writing because I was tired of seeing good men destroyed by bad theology. Tired of watching
                marriages fail because men don't know how to lead. Tired of sons growing up without fathers who know what biblical manhood looks like.
              </p>
              <p className="text-white font-bold text-xl">
                This platform exists to tell uncomfortable truths to comfortable Christians.
              </p>
            </div>

            <div className="bg-[#0a0a0a] p-8">
              <h2 className="text-3xl font-black mb-4 text-[#FFD700]">Who This Is For</h2>
              <p className="mb-4 text-xl font-bold">
                This is for men who are done playing church.
              </p>
              <ul className="space-y-3 mb-6">
                <li>✓ Men who know something is wrong but can't name it</li>
                <li>✓ Men tired of being told to "be nice" when the Bible says to be holy</li>
                <li>✓ Men who want to lead their families but don't know how</li>
                <li>✓ Men fighting sexual sin and losing</li>
                <li>✓ Men who suspect their pastor is lying to them</li>
                <li>✓ Men ready to embrace biblical masculinity regardless of the cost</li>
              </ul>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h2 className="text-3xl font-black mb-4">Who Should Leave Immediately</h2>
              <p className="mb-4 text-xl">
                If you want comfortable Christianity, this isn't for you.
              </p>
              <p className="mb-4">
                If you need your pastor's approval before you think for yourself—<span className="text-[#DC143C] font-bold">leave</span>.
              </p>
              <p className="mb-4">
                If you're offended by biblical masculinity—<span className="text-[#DC143C] font-bold">leave</span>.
              </p>
              <p className="mb-4">
                If you're looking for someone to validate your compromise—<span className="text-[#DC143C] font-bold">leave</span>.
              </p>
              <p className="text-gray-400 italic">
                I'm not here to build a comfortable community. I'm here to tell the truth.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#0a0a0a] border-2 border-[#FFD700] p-8 text-center">
              <div className="text-5xl font-black text-[#FFD700] mb-2">320K+</div>
              <p className="text-lg">Total Downloads</p>
            </div>
            <div className="bg-[#0a0a0a] border-2 border-[#FFD700] p-8 text-center">
              <div className="text-5xl font-black text-[#FFD700] mb-2">20K+</div>
              <p className="text-lg">Active Subscribers</p>
            </div>
            <div className="bg-[#0a0a0a] border-2 border-[#FFD700] p-8 text-center">
              <div className="text-5xl font-black text-[#FFD700] mb-2">15+</div>
              <p className="text-lg">Biblical Guides</p>
            </div>
          </div>

          {/* What I Believe */}
          <div className="bg-[#FFD700] text-black p-12 mb-16">
            <h2 className="text-4xl font-black mb-8 text-center">What I Believe</h2>
            <div className="space-y-4 text-lg">
              <p>• The Bible is the inspired, inerrant Word of God (KJV preferred)</p>
              <p>• Biblical masculinity is not toxic—it's commanded</p>
              <p>• Suffering is not a problem to solve—it's a tool God uses</p>
              <p>• Most modern churches preach a false gospel of comfort</p>
              <p>• Marriage is a covenant, not a contract</p>
              <p>• Men are called to lead, protect, and provide</p>
              <p>• Pornography is adultery. Full stop.</p>
              <p>• True Christianity costs everything</p>
            </div>
          </div>

          {/* Contact/CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-black mb-6">Ready to Stop Playing Church?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with truth. Move to transformation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/vault" className="btn-hostile inline-block">
                ACCESS THE VAULT
              </Link>
              <Link href="/#free-guide" className="btn-secondary inline-block">
                GET FREE GUIDE
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
