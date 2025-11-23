'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

interface ArticleLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    author?: string;
    date?: string;
    readTime?: string;
    category?: string;
}

export default function ArticleLayout({
    children,
    title,
    subtitle,
    author = "Adam (The Biblical Man)",
    date = new Date().toLocaleDateString(),
    readTime = "5 min read",
    category = "Biblical Truth"
}: ArticleLayoutProps) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">

            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-amber-600 z-50 transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Simple Navigation */}
            <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Link>
                    <Link href="/" className="font-black text-lg tracking-tight">
                        THE BIBLICAL MAN
                    </Link>
                    <Link href="/gate-pass" className="text-amber-600 hover:text-amber-500 transition-colors text-sm font-bold">
                        Join $3
                    </Link>
                </div>
            </nav>

            {/* Article Content */}
            <main className="max-w-3xl mx-auto px-6 py-20">

                {/* Header */}
                <header className="mb-16">
                    <div className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-6">
                        {category}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.95] tracking-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-2xl text-gray-400 mb-8 font-serif italic leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    <div className="flex items-center gap-6 text-sm text-gray-500 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                                A
                            </div>
                            <span>{author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {readTime}
                        </div>
                        <div>{date}</div>
                    </div>
                </header>

                {/* Article Body */}
                <article className="prose prose-invert prose-xl max-w-none
          prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white prose-headings:mt-12 prose-headings:mb-6
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-serif prose-p:mb-6
          prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-4 prose-blockquote:border-amber-600 prose-blockquote:bg-white/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:not-italic
          prose-strong:text-white prose-strong:font-bold
          prose-ul:my-6 prose-li:text-gray-300 prose-li:mb-2">
                    {children}
                </article>

                {/* CTA at Bottom */}
                <div className="mt-20 pt-12 border-t border-white/10">
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-10 text-center">
                        <h3 className="text-3xl font-black mb-4">Join The War Room</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                            Stop reading and start building. Get 24/7 radio, tactical library, and brotherhood. Lifetime access for $3.
                        </p>
                        <Link
                            href="/gate-pass"
                            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-lg transition-colors"
                        >
                            Get Access — $3
                        </Link>
                        <p className="text-xs text-gray-600 mt-4">12,402 men inside</p>
                    </div>
                </div>

                {/* Author Note */}
                <div className="mt-12 flex items-start gap-6 p-6 bg-black border border-white/10 rounded-xl">
                    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        A
                    </div>
                    <div>
                        <div className="font-bold text-white mb-1">Written by Adam</div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Founder of The Biblical Man. Fighting for a generation of men who refuse to be soft, silent, or sterile.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
