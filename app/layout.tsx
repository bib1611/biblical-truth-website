import type { Metadata } from "next";
import "./globals.css";
import ExitIntent from "@/components/ExitIntent";
import AIChat from "@/components/AIChat";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://thebiblicalmantruth.com'),
  title: {
    default: "The Biblical Man | Biblical Masculinity & Truth for Men",
    template: "%s | The Biblical Man"
  },
  description: "Join 12,000+ men learning biblical masculinity, marriage, and spiritual warfare. 320,000+ downloads. $3 lifetime access to the War Room. No compromise. No comfort.",
  keywords: [
    "biblical masculinity",
    "Christian men",
    "biblical marriage",
    "spiritual warfare",
    "biblical manhood",
    "Christian marriage advice",
    "sexual purity for men",
    "biblical father",
    "christian men's ministry",
    "biblical truth",
    "uncomfortable christ",
    "biblical man podcast"
  ],
  authors: [{ name: "Adam (The Biblical Man)", url: "https://thebiblicalmantruth.com" }],
  creator: "The Biblical Man",
  publisher: "The Biblical Man",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebiblicalmantruth.com",
    siteName: "The Biblical Man",
    title: "The Biblical Man | Biblical Masculinity & Truth for Men",
    description: "Join 12,000+ men learning biblical masculinity, marriage, and spiritual warfare. $3 lifetime access.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Biblical Man - Uncomfortable Truth for Comfortable Christians"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Biblical Man",
    description: "Biblical masculinity, marriage, and truth that most churches won't teach.",
    creator: "@biblicalman1611",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Biblical Man',
              url: 'https://thebiblicalmantruth.com',
              logo: 'https://thebiblicalmantruth.com/logo.png',
              description: 'Biblical masculinity, marriage, and truth for men. Join 12,000+ warriors.',
              sameAs: [
                'https://twitter.com/biblicalman1611',
                'https://biblicalman.substack.com'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'adam@thebiblicalmantruth.com',
                contactType: 'Customer Service'
              }
            })
          }}
        />
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
        {children}
      </body>
    </html>
  );
}
