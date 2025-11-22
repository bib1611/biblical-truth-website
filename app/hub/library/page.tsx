import Link from 'next/link';

export default function LibraryPage() {
    return (
        <>
            <header className="mb-12">
                <Link href="/hub" className="text-[#FFD700] text-sm font-bold mb-4 inline-block hover:underline">
                    ← BACK TO DASHBOARD
                </Link>
                <h1 className="text-4xl font-black text-white mb-2">THE LIBRARY</h1>
                <p className="text-[#666]">Tactical guides and intel.</p>
            </header>

            <div className="bg-[#111] border border-[#222] p-12 rounded-xl text-center">
                <div className="inline-block p-4 bg-[#222] rounded-full mb-6">
                    <svg className="w-12 h-12 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">CLASSIFIED INTEL COMING SOON</h2>
                <p className="text-[#888] max-w-md mx-auto">
                    We are currently declassifying documents for the War Room. Check back shortly for tactical guides on marriage, fatherhood, and leadership.
                </p>
            </div>
        </>
    );
}
