# Exoria Website

Marketing website for the Exoria iOS app - a social AI experience platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# View at http://localhost:3000
```

## 🛠 Development

This website is built with:
- **Next.js 14** (App Router)
- **TypeScript** 
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **Clerk** for waitlist and authentication

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production  
npm run start      # Start production server
npm run lint       # Run ESLint
npm run check      # Run comprehensive project checks
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── (legal)/           # Legal pages (privacy, tos)
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
│   ├── Hero.tsx          # Homepage hero section
│   ├── PrimaryFeatures.tsx # Main feature showcase
│   └── ...               # Other UI components
├── images/               # Static images and icons
└── styles/               # Global CSS and Tailwind config
```

## 🎨 Customization

### Brand Colors
Update brand colors in `src/styles/tailwind.css` - look for CSS custom properties.

### Content
- **Hero copy**: `src/components/Hero.tsx`
- **Features**: `src/components/PrimaryFeatures.tsx` & `SecondaryFeatures.tsx`
- **Pricing**: `src/components/Pricing.tsx`
- **FAQs**: `src/components/Faqs.tsx`

### Legal Pages
Add content to pages in `src/app/(legal)/` directory.

## 🔐 Environment Variables

Create `.env.local`:

```bash
# Clerk (Waitlist & Auth)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-...
```

## 📱 Deployment

- **Production**: https://exoria-website.vercel.app (auto-deploy from main branch)
- **GitHub**: https://github.com/exoria-ai/website
- **Vercel Dashboard**: [Project Settings](https://vercel.com/dashboard)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally
3. Run checks: `npm run check`
4. Commit with clear message
5. Push and create PR

## 📋 TODO

See `WEBSITE_TODO.md` for current project roadmap and tasks.

## 📄 License

Proprietary - Exoria AI Inc.
