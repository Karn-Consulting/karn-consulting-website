# Deployment Guide for Karn Consulting Website

## ✅ Completed Changes

### 1. Lead Generation System
- **Replaced contact form** with a prominent CTA button: "Start Your AI Transformation"
- **Added clickable image** that opens the lead form popup
- **Lead Form Features:**
  - Name field (required)
  - Company Name field (required)
  - Company Email field (validates against personal emails)
  - Phone Number with country selector (defaults to India)
  - Form validation prevents personal emails (Gmail, Yahoo, etc.)

### 2. Updated Contact Information
- Email: support@karnconsulting.co
- Phone: +91-7576956682
- Location: India

## 🚀 Recommended Free Hosting Solutions

Based on your requirements for a professional consulting website, here are my top recommendations:

### 1. **Netlify (BEST CHOICE FOR YOUR NEEDS)** ⭐⭐⭐⭐⭐

**Why Netlify is Perfect for Karn Consulting:**
- ✅ **Commercial use allowed** on free tier (perfect for business website)
- ✅ **100GB bandwidth** per month (plenty for your site)
- ✅ **Form handling included** (can capture your lead forms)
- ✅ **Automatic HTTPS** with custom domain support
- ✅ **Global CDN** for fast loading worldwide
- ✅ **Instant rollbacks** if something goes wrong

**Deployment Steps:**
```bash
# Step 1: Build your project
npm run build

# Step 2: Create netlify.toml in root directory
```

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Option A: Deploy via Drag & Drop**
1. Go to https://app.netlify.com
2. Drag your `dist` folder to the deployment area
3. Your site will be live instantly!

**Option B: Deploy via Git (Recommended)**
1. Push your code to GitHub
2. Connect GitHub to Netlify
3. Auto-deploys on every push

### 2. **Vercel (Alternative)** ⭐⭐⭐⭐

**Pros:**
- Fastest deployment speed
- Excellent for React/Vite apps
- 100GB bandwidth
- Beautiful dashboard

**Cons:**
- ⚠️ **NO commercial use on free tier** (must upgrade to Pro $20/month for business)
- Solo developer only on free tier

**If you choose Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 3. **Cloudflare Pages** ⭐⭐⭐⭐

**Pros:**
- Unlimited bandwidth
- Fastest CDN globally
- 500 builds per month
- Commercial use allowed

**Deployment:**
1. Connect to GitHub
2. Set build command: `npm run build`
3. Set build output: `dist`
4. Deploy!

## 📌 My Recommendation: **Use Netlify**

For Karn Consulting, **Netlify is the best choice** because:
1. **Free for commercial use** (unlike Vercel)
2. **Built-in form handling** for your lead generation
3. **100GB bandwidth** is more than enough
4. **Professional features** on free tier

## 🔧 Deployment Instructions for Netlify

### Step 1: Prepare Your Project
```bash
# Build the project
npm run build

# Test locally
npm run preview
```

### Step 2: Create Account
1. Go to https://www.netlify.com
2. Sign up with GitHub/GitLab/Email

### Step 3: Deploy Your Site

**Method 1: Quick Deploy (Drag & Drop)**
1. Open Netlify dashboard
2. Drag the `dist` folder to the deployment area
3. Site goes live immediately!

**Method 2: Git Integration (Recommended)**
1. Push your code to GitHub
2. In Netlify: "New site from Git"
3. Choose your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 4: Custom Domain Setup
1. In Netlify dashboard → Domain settings
2. Add custom domain: `karnconsulting.co` or `www.karnconsulting.co`
3. Update DNS settings in GoDaddy:
   - Type: A Record
   - Name: @ (for root domain)
   - Value: 75.2.60.5 (Netlify's IP)
   - OR use CNAME for www subdomain

### Step 5: Form Handling Setup

Your lead form will automatically work with Netlify Forms! To enable:

1. Netlify automatically detects forms
2. Form submissions appear in Netlify dashboard
3. Can set up email notifications for new leads

## 🌐 GoDaddy DNS Configuration

If you want to use your custom domain from GoDaddy:

### For Netlify:
1. Log into GoDaddy
2. Go to DNS Management
3. Add these records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 600

   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   TTL: 600
   ```

### SSL Certificate
- Netlify provides **free SSL automatically** once DNS is configured
- Takes 24-48 hours for DNS propagation

## 📊 Lead Form Data

With Netlify, your lead form submissions will:
1. Appear in Netlify dashboard under "Forms"
2. Can export as CSV
3. Can set up email notifications
4. Can integrate with Zapier/webhooks for CRM

## 🎯 Next Steps

1. **Choose Netlify** for free commercial hosting
2. **Deploy your site** using the steps above
3. **Configure custom domain** if you have one
4. **Test the lead form** to ensure submissions are captured

## Need Help?

If you need assistance with:
- Setting up deployment
- Configuring DNS
- Connecting to GitHub
- Any other deployment issues

Feel free to ask! The site is ready to deploy and will work perfectly on Netlify's free tier for your business needs.

## Important Notes

- The lead form validates company emails only (blocks personal emails)
- Phone number defaults to India but supports all countries
- All form submissions will be stored in Netlify's dashboard
- You can export leads as CSV or integrate with your CRM