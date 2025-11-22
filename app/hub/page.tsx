import Link from 'next/link';

export default function HubPage() {
    const sections = [
        {
            title: "KING'S RADIO",
            description: "24/7 streaming of uncompromising biblical teaching",
            href: "/hub/radio",
            gradient: "from-yellow-500/20 to-orange-600/20",
            borderColor: "border-yellow-500/50",
            hoverBorder: "hover:border-yellow-500",
            iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            )
        },
        {
            title: "THE LIBRARY",
            description: "Tactical guides on marriage, fatherhood, and leadership",
            href: "/hub/library",
            gradient: "from-blue-500/20 to-purple-600/20",
            borderColor: "border-blue-500/50",
            hoverBorder: "hover:border-blue-500",
            iconBg: "bg-gradient-to-br from-blue-500 to-purple-600",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "COMMUNITY",
            description: "Connect with other men in the War Room",
            href: "/hub/community",
            gradient: "from-red-500/20 to-pink-600/20",
            borderColor: "border-red-500/50",
            hoverBorder: "hover:border-red-500",
            iconBg: "bg-gradient-to-br from-red-500 to-pink-600",
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Animated background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-500/5 to-orange-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <header className="mb-16 pt-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"></div>
                        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                            WAR ROOM
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg ml-16">Command Center</p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <Link
                            key={section.title}
                            href={section.href}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glow effect on hover */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>

                            {/* Card */}
                            <div className={`relative bg-gray-900/50 backdrop-blur-xl border ${section.borderColor} ${section.hoverBorder} rounded-2xl p-8 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                                {/* Icon */}
                                <div className={`inline-flex p-4 ${section.iconBg} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {section.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {section.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {section.description}
                                </p>

                                {/* Arrow */}
                                <div className="flex items-center text-gray-500 group-hover:text-white transition-colors">
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
        </div>
    );
}
