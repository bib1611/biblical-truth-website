'use client';

import { useState } from 'react';

interface EmailCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    redirectUrl: string;
}

export default function EmailCaptureModal({ isOpen, onClose, redirectUrl }: EmailCaptureModalProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send to API
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'homepage_modal' }),
            });
        } catch (error) {
            console.error('Failed to save lead:', error);
            // We continue anyway to not block the sale
        }

        // Redirect to Stripe
        window.location.href = redirectUrl;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-slate-900 border border-amber-500/30 rounded-2xl p-8 shadow-2xl shadow-amber-500/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    ✕
                </button>

                <div className="text-center mb-6">
                    <div className="inline-block p-3 bg-amber-500/10 rounded-full mb-4">
                        <span className="text-3xl">🔒</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">One Last Step</h3>
                    <p className="text-gray-400">
                        Enter your email to create your secure account profile before checkout.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Enter your best email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black text-lg py-3 rounded-lg transition-colors shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            'Continue to Secure Checkout →'
                        )}
                    </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. No spam.
                </p>
            </div>
        </div>
    );
}
