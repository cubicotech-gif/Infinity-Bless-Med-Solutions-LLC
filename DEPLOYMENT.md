# Deployment Guide for Infinity Bless Med Solutions Website

## Quick Start Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works)
- Supabase account (free tier works)

### Step 1: Push to GitHub

1. Initialize git repository:
```bash
cd infinity-bless-medical
git init
git add .
git commit -m "Initial commit: Infinity Bless Medical website"
```

2. Create new repository on GitHub:
- Go to github.com
- Click "New Repository"
- Name it: `infinity-bless-medical`
- DO NOT initialize with README (we already have one)

3. Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/infinity-bless-medical.git
git branch -M main
git push -u origin main
```

### Step 2: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create account
2. Create new project:
   - Name: infinity-bless-medical
   - Database Password: (save this!)
   - Region: Choose closest to New Jersey (e.g., US East)

3. Run database migrations:
   - Go to SQL Editor in Supabase dashboard
   - Copy contents of `supabase/migrations/001_initial_schema.sql`
   - Paste and run the SQL

4. Get your credentials:
   - Project URL: Found in Settings → API
   - Anon Key: Found in Settings → API
   - Service Role Key: Found in Settings → API (keep secret!)

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub

2. Click "Import Project"

3. Import your GitHub repository:
   - Select `infinity-bless-medical`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`

4. Add Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXTAUTH_SECRET=generate-using-openssl-rand-base64-32
NEXTAUTH_URL=https://your-vercel-url.vercel.app
ADMIN_EMAIL=admin@infinityblessmedsolutions.com
ADMIN_PASSWORD=create-strong-password
```

5. Click "Deploy"

### Step 4: Configure Custom Domain

1. In Vercel dashboard, go to your project

2. Go to Settings → Domains

3. Add your domain:
   ```
   infinityblessmedsolutions.com
   www.infinityblessmedsolutions.com
   ```

4. Follow Vercel's DNS instructions:

**For GoDaddy / Namecheap / Most Registrars:**

Add these DNS records:

```
Type    Name    Value                           TTL
A       @       76.76.21.21                     600
CNAME   www     cname.vercel-dns.com           600
```

**Alternative (if A record doesn't work):**
```
Type    Name    Value                           TTL
CNAME   @       cname.vercel-dns.com           600
CNAME   www     cname.vercel-dns.com           600
```

5. Wait for propagation (5 minutes - 48 hours, usually ~10 minutes)

6. Vercel will automatically provision SSL certificate

### Step 5: Update Environment Variables for Production

1. In Vercel dashboard → Settings → Environment Variables

2. Update `NEXTAUTH_URL`:
```
NEXTAUTH_URL=https://infinityblessmedsolutions.com
```

3. Redeploy to apply changes

### Step 6: Verify Deployment

Test these URLs:
- Homepage: https://infinityblessmedsolutions.com
- Products: https://infinityblessmedsolutions.com/products
- About: https://infinityblessmedsolutions.com/about
- Contact: https://infinityblessmedsolutions.com/contact
- Admin (when implemented): https://infinityblessmedsolutions.com/admin

## Troubleshooting

### Images Not Loading
- Check Supabase storage bucket permissions
- Verify image URLs in database
- Check Next.js image domains in `next.config.js`

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify DNS records match Vercel's requirements
- Try clearing browser cache
- Wait up to 48 hours for full propagation

### Build Errors
- Check all environment variables are set
- Verify TypeScript has no errors locally
- Check Vercel build logs for specific errors

### Database Issues
- Verify Supabase migrations ran successfully
- Check database connection in Supabase dashboard
- Ensure RLS policies are set correctly

## Post-Deployment Tasks

### 1. Test All Features
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Forms work (when implemented)
- [ ] Mobile responsiveness
- [ ] Performance (should be A+ on GTmetrix)

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if needed)
- [ ] Verify meta tags
- [ ] Test social media previews

### 3. Security
- [ ] Change default admin password
- [ ] Enable 2FA on Vercel account
- [ ] Enable 2FA on Supabase account
- [ ] Review and restrict API keys

### 4. Monitoring
- [ ] Set up Vercel Analytics
- [ ] Configure error tracking (Sentry optional)
- [ ] Set up uptime monitoring

## Continuous Deployment

Any push to `main` branch will automatically:
1. Trigger Vercel build
2. Run tests (if configured)
3. Deploy to production

To deploy changes:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

## Support

For deployment issues:
- Vercel Support: https://vercel.com/support
- Supabase Support: https://supabase.com/support
- GitHub Issues: Create issue in repository

---

**Deployed by**: Cubico Technologies
**Date**: 2025
