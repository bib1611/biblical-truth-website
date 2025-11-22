export default function HubPage() {
    return (
        <>
            <header className="mb-12">
                <h1 className="text-4xl font-black text-white mb-2">WAR ROOM</h1>
                <p className="text-[#666]">Welcome back, Warrior.</p>
            </header>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Stat Cards */}
                <div className="bg-[#111] border border-[#222] p-6 rounded-xl">
                    <div className="text-[#666] text-xs font-bold uppercase mb-2">Current Streak</div>
                    <div className="text-3xl font-black text-[#FFD700]">12 DAYS</div>
                </div>
                <div className="bg-[#111] border border-[#222] p-6 rounded-xl">
                    <div className="text-[#666] text-xs font-bold uppercase mb-2">Modules Completed</div>
                    <div className="text-3xl font-black text-white">4/15</div>
                </div>
                <div className="bg-[#111] border border-[#222] p-6 rounded-xl">
                    <div className="text-[#666] text-xs font-bold uppercase mb-2">Next Live Call</div>
                    <div className="text-3xl font-black text-[#DC143C]">THU 8PM</div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Continue Learning */}
                <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-[#222] flex justify-between items-center">
                        <h3 className="font-bold text-white">CONTINUE LEARNING</h3>
                        <span className="text-xs bg-[#FFD700] text-black px-2 py-1 rounded font-bold">IN PROGRESS</span>
                    </div>
                    <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-2">The Authority Problem</h4>
                        <p className="text-[#888] text-sm mb-6">Module 3: Leading Without Tyranny</p>

                        <div className="w-full bg-[#222] h-2 rounded-full mb-6">
                            <div className="bg-[#FFD700] h-2 rounded-full w-[35%]"></div>
                        </div>

                        <button className="w-full bg-white text-black font-bold py-3 rounded hover:bg-[#ccc] transition-colors">
                            RESUME MODULE
                        </button>
                    </div>
                </div>

                {/* Latest Radio */}
                <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-[#222] flex justify-between items-center">
                        <h3 className="font-bold text-white">LATEST RADIO</h3>
                        <span className="text-xs bg-[#DC143C] text-white px-2 py-1 rounded font-bold">NEW</span>
                    </div>
                    <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-2">Ep. 45: Why Your Pastor is Weak</h4>
                        <p className="text-[#888] text-sm mb-6">Unfiltered discussion on the state of the modern pulpit.</p>

                        <div className="flex items-center gap-4">
                            <button className="flex-1 bg-[#FFD700] text-black font-bold py-3 rounded hover:bg-[#e6c200] transition-colors flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                LISTEN NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
