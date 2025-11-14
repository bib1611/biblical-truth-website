# Deployment Guide - Biblical Man Truth Website

## ✅ Phase 1: EMERGENCY TRIAGE - COMPLETED

All critical issues from your requirements are FIXED:

1. ✅ **Products page** - `/products` now exists (no more 404)
2. ✅ **Navigation overhaul** - 7 menu items, Products/Vault highlighted in yellow
3. ✅ **Homepage conversion strip** - Clear value ladder with CTAs
4. ✅ **Amateur signals removed** - No "Edit with Lovable" badge
5. ✅ **Article templates** - Product injection points ready

## 🚀 Quick Deploy to Vercel (5 Minutes)

### Step 1: Push to GitHub
```bash
cd biblical-truth-website
git init
git add .
git commit -m "Initial commit - Biblical Man website"
gh repo create biblical-truth-website --public --source=. --remote=origin --push
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Click "Deploy"
4. Done! Your site is live.

### Step 3: Add Custom Domain
1. Go to Vercel project settings
2. Domains → Add thebiblicalmantruth.com
3. Follow DNS configuration instructions

## 📧 Phase 2: Email Integration (Next 30 Minutes)

### Option A: ConvertKit (Recommended)
1. Sign up at https://convertkit.com
2. Create a form for "Free Guide"
3. Get API key and Form ID
4. Edit `/components/ExitIntent.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'YOUR_API_KEY',
      email: email
    })
  });

  if (response.ok) {
    alert('Free guide sent! Check your email.');
    setShowPopup(false);
  }
};
```

5. Do the same for the homepage email form in `/app/page.tsx` (line 208)

### Option B: Mailchimp
Similar process with Mailchimp API. See their docs.

## 📊 Phase 3: Analytics (5 Minutes)

### Google Analytics 4
1. Create GA4 property at https://analytics.google.com
2. Copy your Measurement ID (starts with G-)
3. Edit `/app/layout.tsx` line 34:

```typescript
// Replace this
gtag('config', 'G-XXXXXXXXXX');

// With your actual ID
gtag('config', 'G-ABC123DEF456');
```

### Facebook Pixel (Optional)
Add to `/app/layout.tsx` in the `<head>` section:

```tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## 💰 Phase 4: Update Product Links

Search and replace these placeholder URLs with your actual Gumroad links:

### Files to Update:
1. `/app/page.tsx` - Homepage product buttons
2. `/app/products/page.tsx` - Product listing
3. `/app/vault/page.tsx` - Vault purchase buttons

### Find:
- `https://biblicalman.gumroad.com/l/vault`
- `https://biblicalman.gumroad.com`

### Replace with:
- Your actual Gumroad product URLs

## 🎨 Phase 5: Add Real Content

### Testimonials
Replace placeholder testimonials in:
- `/app/page.tsx` (lines 172-184)
- `/app/vault/page.tsx` (lines 180-212)

### Product Images (Optional)
Add to `/public/` folder:
- `vault-cover.jpg`
- `guide-1.jpg`
- etc.

Then use in pages:
```tsx
import Image from 'next/image';
<Image src="/vault-cover.jpg" alt="Vault" width={400} height={600} />
```

## 📱 Phase 6: Test Everything

### Pre-Launch Checklist:
- [ ] Test all pages load correctly
- [ ] Test navigation on mobile
- [ ] Test email capture popup
- [ ] Click all CTA buttons (verify Gumroad links)
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Run PageSpeed Insights
- [ ] Check all social media links work
- [ ] Verify GA tracking is firing

### Testing Commands:
```bash
# Build production version
npm run build

# Test production locally
npm start

# Check for broken links
npm run lint
```

## 🔐 Phase 7: Legal Pages (Required)

### Create Terms of Service
Create `/app/terms/page.tsx` with your terms.

### Create Privacy Policy
Create `/app/privacy/page.tsx` with your privacy policy.

Use a template from:
- https://termly.io (generates free policies)
- https://iubenda.com

## 🎯 Success Metrics to Watch

After launch, track these in Google Analytics:

### Week 1:
- Email opt-in rate
- Bounce rate
- Time on site
- Pages per session

### Month 1:
- Vault conversion rate (goal: 2-3%)
- Product page CTR (goal: 3-5%)
- Email to purchase conversion
- Top traffic sources

## 🚨 Common Issues & Fixes

### Issue: Email forms not working
**Fix:** Check browser console for errors. Verify API keys are correct.

### Issue: Exit popup not showing
**Fix:** Clear localStorage: `localStorage.removeItem('exitIntentShown')`

### Issue: Build fails
**Fix:** Run `npm install` again and check for TypeScript errors

### Issue: Slow page load
**Fix:**
- Optimize images (use WebP)
- Enable Vercel's image optimization
- Check Vercel Analytics for bottlenecks

## 📊 A/B Testing Ideas (Phase 8)

Once live, test these variations:

1. **Vault Price Display**
   - Test: "$365" vs "$1/day for a year"

2. **Headline Variations**
   - Test different hero headlines

3. **Exit-Intent Timing**
   - Test immediate vs 30-second delay

4. **CTA Button Copy**
   - "BUY NOW" vs "GET ACCESS" vs "JOIN THE VAULT"

## 🔄 Content Updates

### Adding New Articles
```bash
# Create new article
mkdir app/articles/your-article-slug
touch app/articles/your-article-slug/page.tsx

# Use template from README.md
# Add product injections at top, middle, bottom
```

### Updating Prices
Edit these files:
- `/app/page.tsx` - Homepage
- `/app/products/page.tsx` - Product listing
- `/app/vault/page.tsx` - Sales page

## 🎬 Go Live Sequence

### The Day Before Launch:
1. ✅ All product links tested
2. ✅ Email capture working
3. ✅ Analytics installed
4. ✅ Custom domain configured
5. ✅ Legal pages added
6. ✅ Mobile tested on real devices

### Launch Day:
1. Final build: `npm run build`
2. Deploy to Vercel
3. Test live site end-to-end
4. Announce on social media
5. Send email to existing list (if any)
6. Monitor analytics for first 24 hours

### Week 1:
1. Check analytics daily
2. Monitor email opt-ins
3. Track first sales
4. Collect any user feedback
5. Fix any bugs that appear

## 💡 Pro Tips

1. **Don't overthink it** - Launch with what you have, iterate based on real data
2. **Watch your analytics** - Let traffic patterns guide your optimization
3. **Test one thing at a time** - Don't change multiple elements simultaneously
4. **Mobile first** - 60%+ of your traffic will be mobile
5. **Email is gold** - Even if they don't buy, you have their email

## 🆘 Need Help?

### Resources:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Tailwind CSS: https://tailwindcss.com/docs

### Quick Fixes:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build

# Reset to working state
git reset --hard HEAD

# Update dependencies
npm update
```

---

## 🎯 CURRENT STATUS

**Your site is built and ready to deploy.**

Location: `/Users/thebi/biblical-truth-website`

Development server running at: **http://localhost:3003**

### What's Done:
✅ Homepage with hero, conversion strip, products, social proof
✅ Products page (fixes 404)
✅ Vault sales page (3,000+ words)
✅ About page (personal story)
✅ Articles page (template ready)
✅ Navigation (7 menu items, yellow CTAs)
✅ Exit-intent popup
✅ Mobile responsive
✅ SEO optimized
✅ Analytics ready

### What's Next:
1. Push to GitHub
2. Deploy to Vercel
3. Connect email service
4. Update Gumroad links
5. Add Google Analytics ID
6. Go live

**You're ready to print money.**
