import Link from 'next/link';

export default function HubPage() {
    const sections = [
        {
            title: "KING'S RADIO",
            description: "24/7 streaming of uncompromising biblical teaching.",
            href: "/hub/radio",
            icon: (
                <svg className="w-8 h-8 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            ),
            color: "border-[#FFD700]"
        },
        {
            title: "THE LIBRARY",
            description: "Tactical guides on marriage, fatherhood, and leadership.",
            href: "/hub/library",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            color: "border-white"
        },
        {
            title: "COMMUNITY",
            description: "Connect with other men in the War Room.",
            href: "/hub/community",
            icon: (
                <svg className="w-8 h-8 text-[#DC143C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "border-[#DC143C]"
        }
    ];

    return (
        <>
            <header className="mb-12">
                <h1 className="text-4xl font-black text-white mb-2">WAR ROOM</h1>
                <p className="text-[#666]">Command Center</p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section) => (
                    <Link
                        key={section.title}
                        href={section.href}
                        className={`bg-[#111] border ${section.color} p-8 rounded-xl hover:bg-[#1a1a1a] transition-all group`}
                    >
                        <div className="mb-6 group-transform group-hover:scale-110 transition-transform duration-300">
                            {section.icon}
                        </div>
                        <h3 className="text-xl font-black text-white mb-3">{section.title}</h3>
                        <p className="text-[#888] text-sm leading-relaxed">
                            {section.description}
                        </p>
                    </Link>
                ))}
            </div>
        </>
    );
}
