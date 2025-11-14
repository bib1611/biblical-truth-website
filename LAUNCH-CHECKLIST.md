# 🚀 Launch Checklist - The Biblical Man

## ✅ COMPLETED
- [x] All pages built and working (/, /products, /vault, /about, /articles)
- [x] Modern Dan Koe-inspired design implemented
- [x] Mobile responsive design
- [x] Navigation with orange CTAs
- [x] Email capture forms (homepage + exit-intent popup)
- [x] Product showcase with pricing
- [x] Social proof sections
- [x] SEO optimization
- [x] Pushed to GitHub (bib1611/biblical-truth-website)
- [x] vercel.json configuration added
- [x] Local build tested successfully

## 🔥 IMMEDIATE NEXT STEPS

### 1. Vercel Deployment (5 minutes)
The vercel.json fix has been pushed. Now:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Find your project**: biblical-truth-website
3. **Trigger redeploy**:
   - Click on the latest deployment
   - Click "Redeploy" button
   - OR wait for automatic deployment from latest commit (48acfab)
4. **Verify deployment**: Check build logs for success

**Expected Result**: Deployment should succeed now that vercel.json is configured.

### 2. Custom Domain Setup (15 minutes)
Once Vercel deployment succeeds:

1. **In Vercel Project Settings**:
   - Go to Settings → Domains
   - Add: `thebiblicalmantruth.com`
   - Add: `www.thebiblicalmantruth.com`

2. **Update DNS at your registrar**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait 5-30 minutes** for DNS propagation

### 3. Update Product Links (10 minutes)
Replace placeholder Gumroad URLs with your actual product links:

**Files to edit:**
- `app/page.tsx` line 108
- `app/products/page.tsx` (all Buy buttons)
- `app/vault/page.tsx` (all Get Access buttons)

**Search for**: `https://biblicalman.gumroad.com`
**Replace with**: Your actual Gumroad URLs

### 4. Add Google Analytics (2 minutes)
1. Create GA4 property at https://analytics.google.com
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Edit `app/layout.tsx` line 34
4. Replace `G-XXXXXXXXXX` with your actual ID
5. Commit and push

### 5. Connect Email Service (30 minutes)

**Option A: ConvertKit (Recommended)**
1. Sign up at https://convertkit.com
2. Create form "Free Guide Download"
3. Get API Key + Form ID
4. Edit these files:
   - `app/page.tsx` line 192 (homepage form)
   - `components/ExitIntent.tsx` line 23 (popup form)

**Replace this:**
```typescript
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
```

**With this:**
```typescript
<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
```

**Add handler:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get('email');

  await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'YOUR_API_KEY',
      email: email
    })
  });

  alert('Free guide sent! Check your email.');
};
```

## 📋 PRE-LAUNCH TESTING

### Test on Vercel Preview URL:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Products page displays all 3 products
- [ ] Vault page loads completely
- [ ] About page accessible
- [ ] Mobile menu works on phone
- [ ] Forms don't error (even if not connected yet)
- [ ] Exit popup appears when mouse leaves viewport
- [ ] All CTA buttons clickable
- [ ] Footer links work

### Test on Mobile Devices:
- [ ] iPhone Safari - Homepage
- [ ] iPhone Safari - Products page
- [ ] Android Chrome - Homepage
- [ ] Android Chrome - Navigation
- [ ] Tablet view (iPad)

### Performance:
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Target: 90+ performance score
- [ ] Check mobile score

## 🔐 LEGAL REQUIREMENTS

### Before accepting payments:
- [ ] Create Terms of Service page (`/app/terms/page.tsx`)
- [ ] Create Privacy Policy page (`/app/privacy/page.tsx`)
- [ ] Add links to footer
- [ ] Use generator: https://termly.io (free)

## 📊 POST-LAUNCH (Week 1)

### Day 1:
- [ ] Verify GA tracking is recording visits
- [ ] Test email form submissions
- [ ] Monitor Vercel analytics
- [ ] Check all Gumroad links work

### Day 2-7:
- [ ] Track email opt-in rate (target: 5-7%)
- [ ] Monitor product page traffic
- [ ] Check conversion funnel in GA
- [ ] Collect first testimonials

## 🎯 OPTIMIZATION TARGETS

### Week 1 Metrics:
- **Email opt-in rate**: 5-7%
- **Product page CTR**: 3-5%
- **Bounce rate**: <60%
- **Avg session duration**: 2+ minutes

### Month 1 Metrics:
- **Vault conversions**: 2-3% of email list
- **Substack subscribers**: 100+
- **Total revenue**: Track in Gumroad
- **Email list growth**: 500+ subscribers

## 🚨 TROUBLESHOOTING

### If Vercel deployment still fails:
1. Check build logs for specific error
2. Verify Next.js version compatibility
3. Try manual build: `npm run build`
4. Check for TypeScript errors: `npm run lint`

### If domain not connecting:
1. Verify DNS records at registrar
2. Wait 24 hours for full propagation
3. Use DNS checker: https://dnschecker.org
4. Check Vercel domain status

### If forms not working:
1. Check browser console for errors
2. Verify API keys are correct
3. Test with dummy email first
4. Check ConvertKit logs

## 💰 REVENUE TRACKING

### Set up in Gumroad:
- [ ] Enable analytics
- [ ] Set up sales notifications
- [ ] Track conversion sources
- [ ] Monitor refund rate

### Track These Numbers Weekly:
- Total revenue
- Vault sales count
- Average order value
- Email → Purchase conversion rate
- Traffic sources (Twitter, Substack, etc.)

## 🎬 LAUNCH SEQUENCE

**Hour 0 (Now)**:
1. Redeploy on Vercel with vercel.json fix
2. Verify deployment succeeds
3. Update Gumroad product links
4. Add GA tracking ID

**Hour 1-2**:
1. Configure custom domain
2. Test site end-to-end
3. Connect email service
4. Final mobile test

**Hour 3**:
1. Add Terms & Privacy pages
2. Final content review
3. Screenshot site for social proof

**Hour 4 (GO LIVE)**:
1. Announce on Twitter/X
2. Post to Substack
3. Email existing list (if any)
4. Monitor analytics

## 📍 CURRENT STATUS

**Project Location**: `/Users/thebi/biblical-truth-website`

**GitHub Repo**: https://github.com/bib1611/biblical-truth-website

**Dev Server**: http://localhost:3003 (running)

**Latest Commit**: 48acfab - "Add Vercel configuration file"

**Next Action**: Go to Vercel and redeploy with new vercel.json

---

## 🔥 You're Ready

Your website is built. The code works. The design is modern and conversion-focused.

All that's left is:
1. Deploy to Vercel (should work now)
2. Connect domain
3. Update product links
4. Go live

**Time to stop building and start selling.**

The Vault is ready. The Products page works. The conversion infrastructure is in place.

Launch it.
