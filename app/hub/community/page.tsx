import Link from 'next/link';

export default function CommunityPage() {
    return (
        <>
            <header className="mb-12">
                <Link href="/hub" className="text-[#FFD700] text-sm font-bold mb-4 inline-block hover:underline">
                    ← BACK TO DASHBOARD
                </Link>
                <h1 className="text-4xl font-black text-white mb-2">COMMUNITY</h1>
                <p className="text-[#666]">Connect with the brotherhood.</p>
            </header>

            <div className="bg-[#111] border border-[#222] p-12 rounded-xl text-center">
                <div className="inline-block p-4 bg-[#222] rounded-full mb-6">
                    <svg className="w-12 h-12 text-[#DC143C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">BARRACKS UNDER CONSTRUCTION</h2>
                <p className="text-[#888] max-w-md mx-auto">
                    The secure communications channel is being established. Prepare to connect with other men in the War Room.
                </p>
            </div>
        </>
    );
}
