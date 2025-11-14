# The Biblical Man Truth Website

A high-conversion, confrontational website built to sell biblical masculinity products with zero compromise.

## 🎯 What's Built

### Core Pages
- **Homepage** - Hero section, conversion strip, product showcase, social proof, email capture
- **/products** - Complete product listing with comparison table (FIXES 404)
- **/vault** - 3,000+ word sales page with full copy
- **/about** - Personal transformation story
- **/articles** - Article listing with product injection points

### Features Implemented ✅
- Sticky navigation with yellow CTA buttons
- Black & gold "hostile design" theme
- Exit-intent popup with confrontational copy
- Product comparison table
- Social proof (320K+ downloads, 20K+ subscribers)
- Multiple CTAs on every page
- Mobile-responsive
- SEO optimized
- Google Analytics ready

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📋 Phase 1: COMPLETED ✅

All emergency triage items from your requirements:

1. ✅ **Products page created** - No more 404
2. ✅ **Navigation overhaul** - 7 menu items, Products/Vault highlighted in yellow
3. ✅ **Homepage conversion strip** - Clear value ladder displayed
4. ✅ **Amateur signals removed** - Professional, focused design
5. ✅ **Article money injections** - Template with 3 product placement points

## 🔧 Quick Configuration

### 1. Connect Email Service
Edit `/components/ExitIntent.tsx` - Line 23:
```typescript
// Replace with ConvertKit/Mailchimp API call
console.log('Email submitted:', email);
```

### 2. Add Google Analytics
Edit `/app/layout.tsx` - Line 34:
```typescript
// Replace G-XXXXXXXXXX with your GA4 ID
```

### 3. Update Gumroad Links
Search and replace throughout codebase:
- `https://biblicalman.gumroad.com/l/vault`
- `https://biblicalman.gumroad.com`

## 🎨 Design System

**Colors:**
- Black: `#000000`
- Yellow: `#FFD700` (hostile CTAs)
- Red: `#DC143C` (urgency)

**Button Classes:**
```tsx
<button className="btn-hostile">Primary CTA</button>
<button className="btn-secondary">Secondary</button>
```

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub → Import to Vercel
```

### Environment Variables Needed
```
CONVERTKIT_API_KEY=your_key
GA_TRACKING_ID=G-XXXXXXXXXX
```

## 📊 Key Metrics to Track
- Email opt-in rate (target: 5-7%)
- Product CTR (target: 3-5%)
- Vault conversion (target: 2-3%)
- Mobile conversion: 60% of desktop

## 📝 Adding Articles

Create `/app/articles/[slug]/page.tsx`:

```tsx
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Article() {
  return (
    <>
      <Navigation />

      {/* Top injection */}
      <div className="bg-[#FFD700] text-black p-4 text-center">
        This article is free. Deep work happens in <Link href="/vault">The Vault</Link>
      </div>

      <article>{/* Your content */}</article>

      {/* Bottom CTA */}
      <section className="bg-[#DC143C] py-12">
        <Link href="/products" className="btn-hostile">SEE PRODUCTS</Link>
      </section>
    </>
  );
}
```

## 🚨 TODO Before Launch

- [ ] Replace GA tracking ID in `layout.tsx`
- [ ] Connect email forms to ESP
- [ ] Update all Gumroad product links
- [ ] Add real testimonials
- [ ] Test mobile on real devices
- [ ] Configure domain DNS
- [ ] Add Terms of Service page
- [ ] Add Privacy Policy page

## 📄 File Structure

```
biblical-truth-website/
├── app/
│   ├── about/page.tsx          # About page
│   ├── articles/page.tsx       # Articles
│   ├── products/page.tsx       # Products (FIXES 404)
│   ├── vault/page.tsx          # Sales page
│   ├── layout.tsx              # Root + analytics
│   ├── page.tsx                # Homepage
│   └── globals.css             # Design system
├── components/
│   ├── Navigation.tsx          # Sticky nav
│   └── ExitIntent.tsx          # Exit popup
└── README.md
```

## 💰 What You Got

Every page designed for conversion:
- Forces binary decisions
- Builds urgency without countdown timers
- Heavy social proof
- Clear value ladders
- Product injection in content
- Exit-intent capture
- Mobile-optimized

**Built with Next.js 14+, TypeScript, Tailwind CSS.**

Time to stop playing church and start printing money.
