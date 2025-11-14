'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-[#222]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-[#ff6b00] transition-colors">
            THE BIBLICAL MAN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/articles" className="text-[#999] hover:text-white transition-colors text-sm">
              Articles
            </Link>
            <Link href="/products" className="text-[#999] hover:text-white transition-colors text-sm">
              Products
            </Link>
            <Link href="/about" className="text-[#999] hover:text-white transition-colors text-sm">
              About
            </Link>
            <Link
              href="/vault"
              className="bg-[#ff6b00] hover:bg-[#ff8533] text-white px-5 py-2 rounded-lg transition-all text-sm font-semibold"
            >
              Get Vault
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
