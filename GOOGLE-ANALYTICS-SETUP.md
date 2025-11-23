# Google Analytics Setup Guide

## Quick Setup (5 minutes):

### 1. Create GA4 Property
1. Go to: https://analytics.google.com
2. Click "Admin" (bottom left gear icon)
3. Click "Create Property"
4. Name: "The Biblical Man"
5. Timezone: Your timezone
6. Currency: USD
7. Click "Next"

### 2. Create Data Stream
1. Click "Web"
2. Website URL: `https://thebiblicalmantruth.com`
3. Stream name: "Main Site"
4. Click "Create stream"

### 3. Get Your Measurement ID
After creating the stream, you'll see:
**Measurement ID: G-XXXXXXXXXX**

Copy this ID.

### 4. Add to Your Site
Open `/Users/thebi/biblical-truth-website/app/layout.tsx` and replace:
- Line 35: `G-XXXXXXXXXX` → Your real ID
- Line 43: `G-XXXXXXXXXX` → Your real ID (same one)

### 5. Deploy
Run: `npx vercel --prod`

Done! Analytics will start tracking within 24 hours.

---

## What You'll Track:
- Page views
- User behavior (which pages convert best)
- Traffic sources (Google, social, direct)
- Conversion tracking (signups, purchases)

## Next Steps (Optional):
Once live, set up:
1. **Conversion Goals** (track $3 purchases)
2. **Event Tracking** (email modal opens, radio plays, etc.)
3. **Audience Segments** (returning vs new visitors)
