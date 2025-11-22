'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HubPage() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');
    }, []);

    const quickActions = [
        {
            title: "Listen to Radio",
            description: "24/7 Biblical Teaching",
            href: "/hub/radio",
            gradient: "from-amber-500 to-orange-600",
            icon: "📻",
            badge: "LIVE NOW"
        },
        {
            title: "Browse Library",
            description: "Tactical Guides & Resources",
            href: "/hub/library",
            gradient: "from-blue-500 to-purple-600",
            icon: "📚",
            badge: null
        },
        {
            title: "Join Community",
            description: "Connect With Other Men",
            href: "/hub/community",
            gradient: "from-red-500 to-pink-600",
            icon: "👥",
            badge: null
        }
    ];

    const stats = [
        { label: "Days Active", value: "12", icon: "🔥" },
        { label: "Hours Listened", value: "48", icon: "⏱️" },
        { label: "Resources Read", value: "7", icon: "📖" },
    ];

    const recentContent = [
        { title: "Biblical Masculinity", type: "Article", time: "2 days ago" },
        { title: "Marriage & Leadership", type: "Guide", time: "5 days ago" },
        { title: "Raising Sons", type: "Resource", time: "1 week ago" },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-4xl lg:text-5xl font-black mb-2">
                    {greeting}, <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">Warrior</span>
                </h1>
                <p className="text-gray-400 text-lg">Welcome back to your command center</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{stat.icon}</span>
                            <span className="text-3xl font-black text-white">{stat.value}</span>
                        </div>
                        <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {quickActions.map((action, i) => (
                        <Link
                            key={i}
                            href={action.href}
                            className="group relative"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${action.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300`}></div>

                            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-all">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="text-5xl">{action.icon}</div>
                                    {action.badge && (
                                        <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                                            {action.badge}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{action.description}</p>

                                <div className="flex items-center text-gray-400 group-hover:text-amber-400 transition-colors">
                                    <span className="text-sm font-semibold mr-2">Enter</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6">Recently Accessed</h2>
                        <div className="space-y-4">
                            {recentContent.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-2xl">
                                            📄
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">{item.title}</h3>
                                            <p className="text-sm text-gray-400">{item.type} • {item.time}</p>
                                        </div>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Daily Verse */}
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/30 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">Daily Verse</h2>
                    <div className="text-amber-400 text-4xl mb-4">📖</div>
                    <blockquote className="text-white mb-4 italic">
                        "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."
                    </blockquote>
                    <p className="text-sm text-gray-400">— Joshua 1:9 (KJV)</p>
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-black">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Invite Other Men</h3>
                        <p className="text-black/80">Help build a community of biblical men. Share your access link.</p>
                    </div>
                    <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all whitespace-nowrap">
                        Get Invite Link
                    </button>
                </div>
            </div>
        </div>
    );
}
