# Connect thebiblicalmantruth.com to Vercel

## Step 1: Add Domain in Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Find and click your project: `biblical-truth-website`

2. **Navigate to Domains**
   - Click **Settings** tab (top navigation)
   - Click **Domains** in the left sidebar

3. **Add Your Domain**
   - Click **"Add"** button
   - Enter: `thebiblicalmantruth.com`
   - Click **"Add"**

4. **Add WWW Subdomain** (Optional but Recommended)
   - Click **"Add"** again
   - Enter: `www.thebiblicalmantruth.com`
   - Click **"Add"**

Vercel will show you the DNS records you need to add.

---

## Step 2: Update DNS Records at Your Domain Registrar

You'll need to add these DNS records where you bought your domain (GoDaddy, Namecheap, Cloudflare, etc.)

### Option A: If Vercel Shows A Record (Most Common)

Add this A record:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto or 3600
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

### Option B: If Vercel Shows CNAME Record

Add this CNAME record:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: Auto or 3600
```

**Note**: Some registrars don't allow CNAME for root domain. Use the A record method instead.

---

## Step 3: Find Your Domain Registrar

Where did you buy `thebiblicalmantruth.com`? Here are quick links:

### GoDaddy
1. Go to: https://dcc.godaddy.com/manage/dns
2. Find `thebiblicalmantruth.com`
3. Click **DNS** → **Manage DNS**
4. Add the records from Step 2

### Namecheap
1. Go to: https://ap.www.namecheap.com/domains/list/
2. Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add the records from Step 2

### Cloudflare
1. Go to: https://dash.cloudflare.com/
2. Select `thebiblicalmantruth.com`
3. Click **DNS** tab
4. Add the records from Step 2

### Other Registrars
1. Log into your domain registrar
2. Find DNS settings (sometimes called "DNS Management", "Name Servers", or "Advanced DNS")
3. Add the records from Step 2

---

## Step 4: Wait for DNS Propagation

- **Typical time**: 5-30 minutes
- **Maximum time**: 24-48 hours (rare)
- **Check status**: https://dnschecker.org/#A/thebiblicalmantruth.com

While waiting, you can check if it's working by visiting:
- http://thebiblicalmantruth.com
- https://thebiblicalmantruth.com

---

## Step 5: Verify SSL Certificate

Once DNS propagates:

1. Vercel will automatically generate an SSL certificate (HTTPS)
2. This takes 1-5 minutes after DNS is detected
3. Your site will be available at both:
   - http://thebiblicalmantruth.com (redirects to https)
   - https://thebiblicalmantruth.com (secure)

---

## Troubleshooting

### Domain not connecting after 24 hours?

1. **Check DNS records are correct**
   - Visit: https://dnschecker.org/
   - Enter: `thebiblicalmantruth.com`
   - Should show: `76.76.21.21` (A record) or `cname.vercel-dns.com` (CNAME)

2. **Verify in Vercel**
   - Go to your project → Settings → Domains
   - Domain should show: ✅ "Valid Configuration"
   - If it shows ⚠️, click it to see the issue

3. **Remove old DNS records**
   - Check if there are conflicting A records
   - Delete any old records pointing elsewhere
   - Keep only the Vercel records

### SSL certificate not generating?

1. Wait 5-10 minutes after DNS propagates
2. Go to Vercel → Settings → Domains
3. Click the **three dots (⋯)** next to your domain
4. Click **"Refresh SSL Certificate"**

### WWW not working?

Make sure you added both:
- `thebiblicalmantruth.com` (root domain)
- `www.thebiblicalmantruth.com` (www subdomain)

Both need their own DNS records.

---

## Quick Verification Checklist

Before you start:
- [ ] Know where you bought the domain
- [ ] Have login access to your domain registrar
- [ ] Latest code is deployed on Vercel

During setup:
- [ ] Added domain in Vercel
- [ ] Added A record: `@` → `76.76.21.21`
- [ ] Added CNAME for www: `www` → `cname.vercel-dns.com`
- [ ] Removed any conflicting DNS records

After setup:
- [ ] Wait 30 minutes minimum
- [ ] Check https://thebiblicalmantruth.com loads your site
- [ ] Check HTTPS (lock icon) is working
- [ ] Test on mobile
- [ ] Test the chatbot works

---

## Current Status

✅ **Website built and ready**
✅ **Chatbot working** (smart fallback responses)
✅ **Code pushed to GitHub** (commit c97af58)
✅ **Vercel deployed** (should be live now)

🟡 **Domain connection** ← You're here

---

## Need Help?

**Where is your domain registered?** Tell me and I can give you specific step-by-step instructions for your registrar.

Common registrars:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Hover
- Domain.com

Once you tell me, I'll walk you through the exact clicks.
