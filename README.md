# Infinity Bless Med Solutions LLC - Website

Modern, professional medical equipment supplier website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, sophisticated design with custom brand colors
- 📱 Fully responsive for all devices
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🔐 Admin dashboard with authentication
- 🖼️ Image upload and management system
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- ♿ Accessible components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Database**: Supabase
- **Authentication**: NextAuth.js
- **Image Upload**: UploadThing
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account (for database)
- UploadThing account (for image uploads)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/infinity-bless-medical.git
cd infinity-bless-medical
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Then edit `.env` with your actual credentials.

4. Set up Supabase database:
- Create a new project at [supabase.com](https://supabase.com)
- Run the SQL migrations in `supabase/migrations`
- Copy your project URL and keys to `.env`

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables from `.env`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Domain Configuration

After deployment, point your domain to Vercel:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `infinityblessmedsolutions.com`
4. Follow the DNS configuration instructions
5. Add these DNS records at your domain registrar:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Environment Variables on Vercel

Add all variables from `.env` in:
**Project Settings → Environment Variables**

## Admin Dashboard

Access the admin dashboard at `/admin` after logging in with:
- Email: (set in ADMIN_EMAIL env variable)
- Password: (set in ADMIN_PASSWORD env variable)

### Admin Features:
- Upload and manage product images
- Edit hero section content
- Manage testimonials
- Update contact information
- Edit product categories

## Project Structure

```
infinity-bless-medical/
├── app/                    # Next.js 14 App Router
│   ├── (main)/            # Main site pages
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Products page
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation
│   └── footer.tsx        # Footer
├── lib/                  # Utility functions
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # Helper functions
└── public/              # Static assets
    └── logo.svg         # Company logo
```

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  primary: {
    DEFAULT: "#60a33a", // Your brand green
    ...
  },
}
```

### Adding Content

1. **Homepage**: Edit `app/(main)/page.tsx`
2. **Products**: Edit `app/(main)/products/page.tsx`
3. **About**: Edit `app/(main)/about/page.tsx`

### Managing Images

Upload images through the admin dashboard at `/admin` or place them in `public/` folder.

## Support

For issues or questions:
- Email: infinityblessmedsolutions@gmail.com
- Phone: (908) 304-9596

## License

© 2025 Infinity Bless Med Solutions LLC. All rights reserved.

---

**Developed by**: Cubico Technologies
