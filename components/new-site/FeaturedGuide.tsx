import React from 'react';

const FeaturedGuide: React.FC = () => {
  return (
    <div className="relative bg-stone-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(161, 98, 7, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(161, 98, 7, 0.2) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Cover Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-amber-700/40 to-transparent rounded-lg blur-sm group-hover:blur-md transition-all duration-500" />
              <img
                src="/wars-rumors-cover.png"
                alt="Wars and Rumors of Wars — Bible Study Guide"
                className="relative w-72 md:w-80 rounded-lg shadow-2xl shadow-amber-900/20"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-800/30 border border-amber-700/40 rounded text-amber-500 text-xs font-semibold tracking-widest uppercase">
              New Preorder
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Wars and Rumors<br />of Wars
            </h2>

            <p className="text-stone-400 text-lg leading-relaxed max-w-lg">
              A comprehensive Bible study on the Book of Revelation and Daniel&apos;s 70th Week. The spiritual hierarchy. The Nephilim bloodlines. The Antichrist&apos;s origin. The endgame prophecy most churches won&apos;t preach.
            </p>

            <div className="space-y-3">
              <p className="text-stone-500 text-sm">
                Digital PDF delivered upon completion. Every four copies sold is $100.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://buy.stripe.com/6oU3cw9bSlswgwKaRxc3m00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded transition-colors duration-300 text-center"
              >
                Preorder Now &mdash; $25
              </a>
              <a
                href="https://deadhidden.substack.com?r=2t2o3r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-stone-700 hover:border-stone-500 text-stone-400 hover:text-white font-medium rounded transition-colors duration-300 text-center"
              >
                Read the Introduction
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGuide;
