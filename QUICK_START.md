# 🚀 Quick Start Guide

## Get Your Website Live in 30 Minutes!

Follow these steps to deploy your Infinity Bless Med Solutions website:

### ✅ Step 1: Upload to GitHub (5 minutes)

```bash
cd infinity-bless-medical
git init
git add .
git commit -m "Initial commit"
```

Create repository on GitHub, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/infinity-bless-medical.git
git push -u origin main
```

### ✅ Step 2: Setup Supabase (10 minutes)

1. Go to https://supabase.com
2. Create new project
3. Copy SQL from `supabase/migrations/001_initial_schema.sql`
4. Paste into SQL Editor and run
5. Save these values:
   - Project URL
   - Anon Key
   - Service Role Key

### ✅ Step 3: Deploy to Vercel (10 minutes)

1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repo
4. Add environment variables (from `.env.example`)
5. Click "Deploy"

### ✅ Step 4: Point Your Domain (5 minutes)

In your domain registrar (GoDaddy, Namecheap, etc.):

Add DNS Records:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### ✅ Done!

Your website will be live at:
- https://infinityblessmedsolutions.com
- https://www.infinityblessmedsolutions.com

## 📞 Need Help?

See `DEPLOYMENT.md` for detailed instructions or contact Cubico Technologies.

---

**Total Time: ~30 minutes**
**Cost: $0 (using free tiers)**
