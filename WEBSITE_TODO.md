# Exoria Website — Master To-Do List  
Transform the Tailwind Plus "Pocket" template into a focused marketing site for the Exoria iOS app.

---

## 1. Global Branding & Project Setup
- [ ] **Rename project:**  
      `package.json → name: "exoria-website"`
- [ ] **Global metadata:**  
      `src/app/layout.tsx` → `<title/description>` to Exoria copy.
- [ ] **Brand colours & fonts:**  
      Tailwind config / CSS variables switched from Pocket cyan to Exoria palette, update Google Font(s) if required.
- [ ] **Logos & favicon:**  
      • Replace `Logo.tsx`, `AppScreen.tsx` logo, and `favicon.ico` with Exoria assets.  
      • Add `apple-touch-icon.png`.
- [ ] **README:** Overwrite `website/README.md` with tech-focused setup notes for contributors.
- [ ] **Clean CHANGELOG:** Start a fresh changelog for the website (preserve old file in git history).

---

## 2. Content & Component Updates
- **Hero (`components/Hero.tsx`)**
  - [ ] New headline/subhead ("The First Social AI Experience" etc.).
  - [ ] Replace `AppDemo` with real Exoria screenshot carousel or video mock-up.
  - [ ] Update CTA button to TestFlight / App Store URL.
  - [ ] Remove or replace press logos.

- **Primary Features (`PrimaryFeatures.tsx`)**
  - [ ] Choose three marquee pillars (e.g. AI Characters, Creative Studio, Collaboration Boards).
  - [ ] Build new phone-frame screen mocks to match above pillars; delete stock-trading screens & `StockLogos.tsx`.

- **Secondary Features (`SecondaryFeatures.tsx`)**
  - [ ] Six quick-hit perks sourced from `FEATURES.md` (Voice & Audio, Smart Conversations, Media Gallery, etc.).
  - [ ] Update icons if necessary.

- **Call to Action (`CallToAction.tsx`)**
  - [ ] Rewrite copy to push TestFlight download.
  - [ ] Make sure AppStore/TestFlight badge uses correct URL and alt text.

- **Reviews (`Reviews.tsx`)**
  - [ ] Insert real or marketing-grade testimonials about Exoria (placeholder OK until collected).

- **Pricing (`Pricing.tsx`)**
  - [ ] Reflect Exoria's tiers (Free with 100 credits, Pro, Pro + Voice, etc.).
  - [ ] Sync plan descriptions & feature lists with current product offering.

- **FAQs (`Faqs.tsx`)**
  - [ ] Replace satire with genuine support FAQs (privacy, credits, model tiers, voice features).

- **Header/Footer**
  - [ ] Remove "Log in" / "Register" links; replace with "Download" or "Support".
  - [ ] In footer, add links to Privacy Policy, Terms of Service, and Support / Contact.

---

## 3. New Pages & Legal
| Route | Purpose |
|-------|---------|
| `/privacy` | Privacy Policy (App Store compliant) |
| `/tos`     | Terms of Service / EULA |
| `/support` | Simple contact page with mailto: or Help Center link |

> Add static MDX or simple React pages under `src/app/(legal)/`.

---

## 4. Technical SEO & Analytics
- [ ] Configure **meta tags** & Open Graph (title, description, image, twitter card).
- [ ] Add `sitemap.xml` & `robots.txt` (Next-sitemap or manual generator).
- [ ] Set `next.config.js` → `images.domains` if remote screenshots used.
- [ ] Integrate Plausible / GA4 tracking (respect GDPR consent).
- [ ] Lighthouse pass: ensure a11y colour contrast and alt text.

---

## 5. Code Cleanup & Dependencies
- [ ] Delete unused auth pages and routes (`src/app/(auth)`).
- [ ] Remove `StockLogos.tsx`, demo finance components, unused images.
- [ ] Replace `LICENSE.md` with Exoria licence or reference ToS.
- [ ] Audit `package.json` and trim dev dependencies no longer required.
- [ ] Run `npm run check` after every major change (linter, knip dead-code check).

---

## 6. Deployment & Performance
- [ ] Verify Vercel build passes after asset & route changes.
- [ ] Add 308 redirect `/download` → TestFlight/App Store URL.
- [ ] Enable image optimisation (`next/image` placeholder blur).
- [ ] Lazy-load heavy components (screenshots, video demo).
- [ ] Configure caching headers via `next.config.js` for static assets.

---

## 7. Waitlist & Clerk Integration 📥
Early-access capacity will be controlled with Clerk's **Waitlist** mode and a simple sign-in once users are approved.

1. **Dependencies & Env**
   - [ ] `npm install @clerk/nextjs`
   - [ ] Add to `.env`  
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=…
     CLERK_SECRET_KEY=…
     NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
     ```
2. **Provider & Middleware**
   - [ ] Wrap root layout with  
     ```tsx
     <ClerkProvider waitlistUrl="/" >
       …children…
     </ClerkProvider>
     ```
   - [ ] Create `middleware.ts` with `clerkMiddleware()` (see guide matcher block).
3. **Waitlist Component**
   - [ ] Add `Waitlist` page (likely `/` until launch, or dedicated `/waitlist`).
   - [ ] After launch, keep the Waitlist component visible for overflow users.
4. **Sign-In Flow**
   - [ ] Add `<SignIn />` page at `app/sign-in/[[...sign-in]]/page.tsx`.
   - [ ] Update buttons/links (header/footer/CTA) to route to `/sign-in` post-approval.
5. **Dashboard Configuration**
   - [ ] Enable **Waitlist** mode in Clerk Dashboard → Restrictions.
   - [ ] Process invites manually via Dashboard until capacity increases.

> Note: All marketing pages remain public; only authenticated (app) routes will sit behind Clerk once the web dashboard is needed.

---

## 8. Post-Launch Checklist
- [ ] Submit site to App Store Connect for domain association (`apple-app-site-association` if deep links required).
- [ ] Verify legal pages pass Apple & Google review guidelines.
- [ ] Share TestFlight link in hero & CTA; swap to App Store link on public release.
- [ ] Set up uptime monitoring.

---

*Last updated: TODO — set date when tasks are next reviewed.* 

---

## 🚀 Implementation Roadmap

### ✅ Ready to Start (Can begin immediately)

**Quick Wins - Project Setup:**
- [ ] Rename project in `package.json` 
- [ ] Overwrite `README.md` with contributor setup notes
- [ ] Clean `CHANGELOG.md` and start fresh
- [ ] Delete unused auth pages (`src/app/(auth)/`)
- [ ] Remove `StockLogos.tsx` and stock trading demo components
- [ ] Audit and clean `package.json` dependencies
- [ ] Run `npm run check` for code quality

**Technical Infrastructure:**
- [ ] Install `@clerk/nextjs` and set up basic structure
- [ ] Create middleware.ts skeleton for Clerk
- [ ] Add sitemap.xml and robots.txt generation
- [ ] Configure `next.config.js` for image domains
- [ ] Enable Next.js image optimization with placeholder blur
- [ ] Implement lazy loading for heavy components
- [ ] Configure caching headers for static assets
- [ ] Run Lighthouse audit and fix accessibility issues

**Content Structure (Generic):**
- [ ] Update header/footer structure (remove auth links)
- [ ] Create legal page routes (`/privacy`, `/tos`, `/support`)
- [ ] Draft generic FAQ structure from `FEATURES.md`
- [ ] Update secondary features section using `FEATURES.md`
- [ ] Create basic waitlist component structure

### 🔄 Needs Information (Blocked pending details)

**Brand Assets & Identity:**
- [ ] **Brand colors & fonts** → Need Exoria's design system/brand guide
- [ ] **Logos & favicon** → Need Exoria logo files (.svg, .ico, .png)
- [ ] **Site metadata** → Need final site title and description copy
- [ ] **OG image** → Need social sharing image asset

**Content & Copy:**
- [ ] **Hero section copy** → Need headline, subheadline, and value prop
- [ ] **Primary features pillars** → Which 3 core features to highlight?
- [ ] **App screenshots** → Need current Exoria UI screenshots for demos
- [ ] **Testimonials** → Need real user reviews/testimonials
- [ ] **Legal pages content** → Need actual Privacy Policy and Terms of Service text

**URLs & Links:**
- [ ] **TestFlight URL** → Need current TestFlight invitation link
- [ ] **App Store URL** → Need final App Store link (when published)
- [ ] **Support contact** → Need support email or help center URL

**Pricing & Plans:**
- [ ] **Subscription tiers** → Need exact pricing, features, and plan names
- [ ] **Credit system** → How does the "100 free credits" system work?

**Services & Credentials:**
- [ ] **Clerk API keys** → Need Clerk dashboard access and API keys
- [ ] **Analytics setup** → Which service? (Plausible/GA4) Need tracking ID
- [ ] **Clerk waitlist config** → Need access to enable waitlist mode

### 📋 Dependencies Between Tasks
- Legal page content → Footer links → Header navigation
- Brand assets → All visual components
- TestFlight URL → All CTA buttons and download links
- Clerk keys → Waitlist functionality → Sign-in flow
- App screenshots → Hero demo → Primary features screens

---

*Last updated: January 2025* 