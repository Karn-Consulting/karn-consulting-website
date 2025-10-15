# 🚀 Deploy to Vercel in 5 Minutes

## Step 1: Push Your Code to GitHub

Since Vercel needs a GitHub repo, let's create one:

### Option A: Using GitHub Desktop (Easiest)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in to your GitHub account
3. Click "File" → "New Repository"
4. Name: `karn-consulting`
5. Click "Create Repository"
6. Click "Publish Repository"

### Option B: Using Command Line
```bash
# In your project folder (in Replit terminal)
git init
git add .
git commit -m "Initial commit"

# Go to github.com and create a new repository named "karn-consulting"
# Then run these commands with YOUR username:
git remote add origin https://github.com/YOUR_USERNAME/karn-consulting.git
git branch -M main
git push -u origin main
```

### Option C: Download & Upload
1. Download your project from Replit (three dots menu → Download as ZIP)
2. Go to [github.com/new](https://github.com/new)
3. Create repository "karn-consulting"
4. Click "uploading an existing file"
5. Drag your project files
6. Commit

## Step 2: Deploy to Vercel

1. **Go back to Vercel import page**
2. **Select your GitHub account** (alphabaron05)
3. **Search for "karn-consulting"**
4. **Click Import**

## Step 3: Configure Environment Variables

In Vercel dashboard, add these:

```
DATABASE_URL = [Your PostgreSQL URL from Neon/Supabase]
SESSION_SECRET = any-random-32-character-string-here
RESEND_API_KEY = [Optional - for email functionality]
```

### Get a Free Database:
**Option 1: Neon (Recommended)**
- Go to [neon.tech](https://neon.tech)
- Create free account
- Create database
- Copy connection string

**Option 2: Supabase**
- Go to [supabase.com](https://supabase.com)
- Create project
- Go to Settings → Database
- Copy connection string

## Step 4: Deploy!

1. Click **Deploy**
2. Wait 2-3 minutes
3. Your site is live! 🎉

## Step 5: Add Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your domain: `karnconsulting.com`
3. Follow DNS instructions (add CNAME or A record)

## 🔧 What I've Already Done For You:

✅ **Created Vercel Functions** (`api/leads.ts`)
- Converted Express routes to serverless functions
- Handles lead capture and retrieval
- **Email functionality integrated** - sends thank you emails and notifications

✅ **Added Vercel Config** (`vercel.json`)
- Build settings configured
- Routes set up correctly

✅ **Email System Ready**
- Thank you popup always shows (no configuration needed)
- Automated emails work when you add RESEND_API_KEY
- Email templates included in `api/email-templates.ts`

✅ **Database Ready**
- Works with any PostgreSQL (Neon, Supabase, etc.)

## 🎯 Quick Checklist:

- [ ] Push code to GitHub
- [ ] Import repo in Vercel
- [ ] Add DATABASE_URL from Neon/Supabase
- [ ] Add SESSION_SECRET
- [ ] Click Deploy
- [ ] Add custom domain

## 📝 Notes:

- **Free Forever**: Vercel free tier is generous
- **No Sleep**: Always awake, instant loading
- **Auto Deploy**: Every GitHub push auto-deploys
- **Global CDN**: Fast worldwide

## 🆘 Troubleshooting:

**"Cannot find repository"**
- Make sure repository is public
- Or click "Adjust GitHub Permissions" in Vercel

**"Build failed"**
- Check environment variables are set
- Make sure DATABASE_URL is correct

**"Database connection failed"**
- Use Neon or Supabase (not local PostgreSQL)
- Check connection string format

---

**That's it! Your site will be live in 5 minutes on Vercel with your custom domain!**