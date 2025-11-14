# Add API Key to Vercel - Quick Setup

## Steps to Add Your Anthropic API Key to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Find your project: `biblical-truth-website`

2. **Navigate to Settings**
   - Click on the project
   - Go to **Settings** tab (top navigation)
   - Click **Environment Variables** (left sidebar)

3. **Add New Variable**
   - Click **"Add New"** button
   - Fill in:
     - **Key**: `ANTHROPIC_API_KEY`
     - **Value**: `[Paste your API key here - starts with sk-ant-]`
     - **Environments**: Check all three boxes:
       - ✅ Production
       - ✅ Preview
       - ✅ Development
   - Click **Save**

4. **Redeploy**
   - Go to **Deployments** tab
   - Click the **three dots (⋯)** on the latest deployment
   - Click **"Redeploy"**
   - OR just wait - Vercel auto-deploys on git push

## That's It!

Once redeployed, your chatbot will use full Claude AI instead of fallback responses.

## Test It

After deployment:
1. Visit your live site
2. Click "Need guidance?" button (bottom-right)
3. Type: "I struggle with pornography"
4. You should get a personalized, conversational AI response

## Local Testing (Already Working)

Your local dev server already has the API key configured in `.env.local`

Test the chatbot at: **http://localhost:3003**

## Cost Monitoring

Monitor usage at: https://console.anthropic.com/

Expected cost: ~$0.01-0.05 per conversation (very cheap)
