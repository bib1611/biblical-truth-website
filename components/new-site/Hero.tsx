import React from 'react';
import Link from 'next/link';
import { NavSection } from './types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-stone-950 to-black opacity-90" />

      <div className="z-10 max-w-4xl space-y-8 fade-in">
        {/* Social proof badge */}
        <div className="flex items-center justify-center gap-2 text-amber-500">
          <span className="text-sm font-semibold tracking-wide">
            40,000+ men read this every week
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-tight">
          I Write What Your Pastor <br className="hidden sm:block" />
          <span className="text-amber-500">Won&apos;t Say</span>
        </h1>

        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
          The Biblical Man isn&apos;t a devotional. It&apos;s a field manual for men building faith with dirty hands.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-4 text-stone-500">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">320,000+</div>
            <div className="text-xs md:text-sm uppercase tracking-wide">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">12,000+</div>
            <div className="text-xs md:text-sm uppercase tracking-wide">War Room Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1M+</div>
            <div className="text-xs md:text-sm uppercase tracking-wide">Monthly Reads</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="/free"
            className="px-8 py-4 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/30 text-lg"
          >
            Get the Free 40-Page Guide
          </Link>
          <button
            onClick={() => onNavigate(NavSection.WRITINGS)}
            className="px-8 py-4 border border-stone-700 bg-transparent text-white font-medium rounded hover:bg-stone-900 transition-colors"
          >
            Read the Substack
          </button>
        </div>

        <p className="text-stone-600 text-sm pt-4">
          No spam. No soft Christianity. Just the truth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
