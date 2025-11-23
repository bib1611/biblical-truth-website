import Link from 'next/link';
import { Clock, Lock, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'The Arsenal | Biblical Truth Articles',
    description: 'Unfiltered biblical truth for men. No fluff. No compromise.',
};

const articles = [
    {
        slug: 'why-christian-men-fail',
        title: 'Why Christian Men Fail (And How to Stop)',
        excerpt: 'The church has lied to you. They told you to be nice. Jesus told you to be dangerous. Here is the uncomfortable truth about why you are losing.',
        date: 'Nov 23, 2025',
        readTime: '7 min read',
        category: 'Biblical Masculinity',
        premium: false,
    },
    {
        slug: 'the-uncomfortable-christ',
        title: 'The Uncomfortable Christ: Why Jesus Wasn\'t "Nice"',
        excerpt: 'Stop worshipping a hippie. The Jesus of the Bible flipped tables, insulted Pharisees, and demanded death to self. Meet the real King.',
        date: 'Nov 20, 2025',
        readTime: '12 min read',
        category: 'Theology',
        premium: true,
    },
    {
        slug: 'marriage-warfare',
        title: 'Your Marriage is a War Zone (Act Like It)',
        excerpt: 'You think your wife is the enemy? Wrong. The enemy is using your passivity to destroy her. Wake up, soldier.',
        date: 'Nov 15, 2025',
        readTime: '9 min read',
        category: 'Marriage',
        premium: true,
    }
];

export default function ReadPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <header className="py-20 px-6 border-b border-white/10 bg-gradient-to-b from-zinc-900 to-[#0a0a0a]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">THE ARSENAL</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-serif italic">
                        "Iron sharpens iron, and one man sharpens another." — Proverbs 27:17
                    </p>
                </div>
            </header>

            {/* Articles Grid */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="grid gap-12">
                    {articles.map((article) => (
                        <article key={article.slug} className="group relative border border-white/10 bg-zinc-900/30 rounded-2xl p-8 hover:bg-zinc-900/50 transition-all hover:border-amber-500/30">

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4 text-xs font-bold tracking-widest uppercase">
                                        <span className="text-amber-500">{article.category}</span>
                                        <span className="text-gray-600">•</span>
                                        <span className="text-gray-500">{article.date}</span>
                                        {article.premium && (
                                            <span className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded border border-amber-500/20 flex items-center gap-1 ml-auto md:ml-0">
                                                <Lock className="w-3 h-3" /> Premium
                                            </span>
                                        )}
                                    </div>

                                    <h2 className="text-3xl font-black mb-4 group-hover:text-amber-500 transition-colors leading-tight">
                                        <Link href={article.premium ? '/gate-pass' : `/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-400 mb-6 leading-relaxed font-serif text-lg">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {article.readTime}
                                        </div>
                                        <Link
                                            href={article.premium ? '/gate-pass' : `/blog/${article.slug}`}
                                            className="flex items-center font-bold text-white group-hover:text-amber-500 transition-colors"
                                        >
                                            Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-24 bg-amber-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">Don't Miss a Round.</h3>
                        <p className="text-amber-100 mb-8 text-lg max-w-xl mx-auto">
                            Get new articles sent directly to your inbox. No spam. Just ammunition.
                        </p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-lg bg-white text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20"
                            />
                            <button className="bg-black text-white px-8 py-4 rounded-lg font-black uppercase tracking-wide hover:bg-gray-900 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%">
                            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" className="text-black" fill="currentColor" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
                        </svg>
                    </div>
                </div>
            </main>
        </div>
    );
}
