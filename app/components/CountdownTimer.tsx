'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const currentDay = now.getDay(); // 0 = Sunday, 5 = Friday
            const daysUntilFriday = (5 - currentDay + 7) % 7;

            const nextFriday = new Date(now);
            nextFriday.setDate(now.getDate() + daysUntilFriday);
            nextFriday.setHours(23, 59, 59, 999); // Midnight Friday

            // If it's currently Friday, check if we passed midnight (technically impossible with setHours above for "today", but good for logic)
            // Actually, if it's Friday, daysUntilFriday is 0. We want "this Friday" or "next Friday".
            // If it's Friday night, we might want next Friday.
            // Let's assume "Next Friday Midnight" is the target.

            if (daysUntilFriday === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
                // It's basically over, move to next week
                nextFriday.setDate(nextFriday.getDate() + 7);
            }

            const difference = nextFriday.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center gap-4 text-amber-500 font-mono text-xl md:text-2xl font-bold bg-black/40 px-4 py-2 rounded-lg border border-amber-500/30">
            <div className="flex flex-col items-center">
                <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">Days</span>
            </div>
            <span className="mb-4">:</span>
            <div className="flex flex-col items-center">
                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">Hrs</span>
            </div>
            <span className="mb-4">:</span>
            <div className="flex flex-col items-center">
                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">Mins</span>
            </div>
            <span className="mb-4">:</span>
            <div className="flex flex-col items-center">
                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">Secs</span>
            </div>
        </div>
    );
}
