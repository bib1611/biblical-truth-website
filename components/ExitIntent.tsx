'use client';

import { useEffect, useState } from 'react';

export default function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    // Check if user has already seen popup
    const hasSeenPopup = localStorage.getItem('exitIntentShown');
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from top of page
      if (e.clientY <= 0) {
        setShowPopup(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitStatus('loading');
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'exit_intent_popup'
        })
      });
      setSubmitStatus('success');
      // Show success state briefly, then close
      setTimeout(() => setShowPopup(false), 2000);
    } catch {
      // Still show success to user even if API fails (don't want to block conversion)
      setSubmitStatus('success');
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 animate-fadeIn">
      <div className="bg-[#DC143C] text-white max-w-2xl w-full p-12 relative">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-white hover:text-[#FFD700] text-3xl font-bold"
        >
          ×
        </button>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Leaving Already?<br />
          <span className="text-[#FFD700]">The Truth Too Uncomfortable?</span>
        </h2>

        <p className="text-2xl mb-8">
          Before you go, grab the free guide 320,000+ men have downloaded:
        </p>

        <div className="bg-black text-white p-6 mb-8">
          <h3 className="text-2xl font-black mb-3 text-[#FFD700]">
            "Satan's 5 Deadliest Lies About Biblical Manhood"
          </h3>
          <ul className="space-y-2">
            <li>✓ The lie about submission your pastor won't address</li>
            <li>✓ Why "being nice" is killing your marriage</li>
            <li>✓ The masculinity fraud destroying Christian men</li>
            <li>✓ What the Bible actually says (not what church culture says)</li>
          </ul>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-black text-[#FFD700] p-6 text-center">
            <p className="text-2xl font-black">Check Your Email</p>
            <p className="text-white mt-2">The guide is on its way. Welcome to the fight.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-black text-lg"
              required
              disabled={submitStatus === 'loading'}
            />
            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="bg-[#FFD700] text-black px-8 py-4 font-black hover:bg-white transition-all disabled:opacity-50"
            >
              {submitStatus === 'loading' ? 'SENDING...' : 'SEND ME THE GUIDE'}
            </button>
          </form>
        )}

        {submitStatus !== 'success' && (
          <p className="text-sm text-white/80 mt-4 text-center">
            No spam. Unsubscribe anytime. Free guide delivered instantly.
          </p>
        )}
      </div>
    </div>
  );
}
