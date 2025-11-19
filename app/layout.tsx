import type { Metadata } from "next";
import "./globals.css";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import AIChat from "@/components/AIChat";
import { BehavioralTracker } from "@/components/BehavioralTracker";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Biblical Man | Uncomfortable Truth for Comfortable Christians",
  description: "Biblical masculinity, marriage, and truth that most churches won't teach. 320,000+ downloads. No compromise. No comfort.",
  keywords: "biblical masculinity, Christian men, marriage, biblical manhood, spiritual warfare, sexual purity",
  authors: [{ name: "The Biblical Man" }],
  openGraph: {
    title: "The Biblical Man | Uncomfortable Truth for Comfortable Christians",
    description: "Biblical masculinity, marriage, and truth that most churches won't teach.",
    type: "website",
    url: "https://thebiblicalmantruth.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Biblical Man",
    description: "Uncomfortable truth for comfortable Christians.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <BehavioralTracker />
        {children}
        <ExitIntentPopup />
        <AIChat />
      </body>
    </html>
  );
}
