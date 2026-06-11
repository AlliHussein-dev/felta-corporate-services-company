
# FELTA Corporate Services — Build Plan

A two-part product: (1) a public marketing site with editorial luxury design, and (2) an authenticated Client Concierge Portal backed by Lovable Cloud.

## 1. Design System

Set up in `src/styles.css` using `@theme inline` + `:root` tokens (oklch):

- `--background` Sand White `#FAF7F2`
- `--secondary` Desert Beige `#EFE8DE`
- `--card` Warm Ivory `#FFFDF9`
- `--foreground` Deep Espresso `#2B2118`
- `--muted-foreground` Soft Stone `#6B7280`
- `--primary` Desert Copper `#B76E38`
- `--accent` Olive Green `#64705B`
- `--highlight` Champagne `#D8C3A5`

Fonts loaded via `<link>` in `__root.tsx`:
- Headlines: Cormorant Garamond (editorial serif)
- Body: Inter
- Accent: Manrope for eyebrows/labels

Custom utilities: `.editorial-h1`, `.eyebrow`, `.lift-card` (soft shadow + rounded-2xl), `.fade-up` (intersection-observer fade), generous spacing scale.

## 2. Public Site Routes

Each route gets its own `head()` metadata (title, description, og:title/description, og:image at leaves).

```
/                  Home — cinematic hero, story teaser, signature services, industries, journeys teaser, advisors teaser, insights teaser, CTA
/about             The FELTA Story — narrative scroll, mission, philosophy, Abu Dhabi roots
/services          Signature Services overview (4 pillars)
/services/formation        Business Formation & Expansion
/services/residency        Residency & Immigration
/services/financial        Financial Management & Compliance
/services/government       Government Relations & PRO
/industries        Industry verticals grid (6 industries with detail cards)
/journeys          Success Journeys — long-form client stories
/advisors          Meet Our Advisors — executive profile cards
/experience        The FELTA Client Experience — horizontal timeline
/gallery           Office Experience Gallery
/insights          Insights & Knowledge Center (magazine layout)
/contact           Contact & Consultation — form + map + office info
/auth              Sign in / sign up for portal
/portal            (authenticated layout)
  /portal                  Concierge dashboard / personal welcome
  /portal/documents        Secure Document Lounge
  /portal/journey          Business Journey Timeline
  /portal/billing          Billing & Services
  /portal/messages         Private Advisory Messaging
```

Shared `SiteHeader` and `SiteFooter` rendered in `__root.tsx` (hidden on `/portal/*` and `/auth`, which use their own shell).

## 3. Imagery (25+ photographs)

Generate with `imagegen` (premium where text/legibility matters, otherwise standard) and save to `src/assets/`. Categories:

- 3 hero images (Abu Dhabi skyline at golden hour, elegant office interior, advisor + client handshake)
- 4 service pillar visuals
- 6 industry visuals
- 4 client-story portraits/scenes
- 4 office gallery photos
- 4 advisor portraits
- Insights article covers

All imported as ES6 image imports; alt text + lazy loading.

## 4. Animation & Interaction

- Framer Motion for fade-up on scroll, hero parallax on scroll Y, staggered grids
- Smooth anchor transitions, restrained micro-hover (no glow)
- No glassmorphism, no aggressive gradients

## 5. Client Concierge Portal (Lovable Cloud)

Enable Lovable Cloud. Schema (migrations with explicit GRANTs + RLS):

- `profiles` — id (uuid ref auth.users), full_name, company, advisor_id, avatar_url
- `advisors` — id, full_name, title, bio, photo_url, email
- `documents` — id, user_id, folder (enum: formation/licenses/passports/financial), name, storage_path, status, uploaded_at
- `journey_milestones` — id, user_id, title, description, status (pending/in_progress/complete), due_date, sort_order
- `invoices` — id, user_id, description, amount_aed, status (due/paid), issued_at, paid_at, receipt_url
- `messages` — id, user_id, advisor_id, sender (user/advisor), body, created_at, read_at
- `user_roles` + `has_role()` security-definer (admin/client) per platform standards

Storage bucket `client-documents` (private) with RLS keyed to `auth.uid()`. Drag-and-drop upload UI with encrypted-storage indicator.

Auth: email/password via Lovable Cloud, `/auth` page, `_authenticated` layout gate redirecting unauthenticated to `/auth`. All portal data fetched via TanStack Query loaders inside the gated layout.

Stripe is optional for the "Complete Secure Payment" CTA — for v1, the billing page lists invoices and the button opens a placeholder confirmation; real payment integration can be added later on request.

## 6. SEO & Accessibility

- Unique title/description per route, single H1, semantic landmarks
- Alt text on every photo; 44px tap targets; visible focus rings in copper
- JSON-LD `LocalBusiness` on home with Abu Dhabi address
- `h-dvh` for hero, responsive grid patterns per the layout guide

## 7. Out of Scope (v1)

- Real Stripe/Paddle payment processing (stub only)
- Multilingual (English only first)
- Advisor admin CMS (insights/articles seeded via migration)
- Real-time chat (messages use polling via TanStack Query refetch)

## 8. Build Order

1. Design tokens, fonts, shared layout (header/footer)
2. Hero + home page composition with generated imagery
3. About / Services / Industries / Journeys / Advisors / Experience / Gallery / Insights / Contact
4. Enable Lovable Cloud + schema migration + storage bucket
5. Auth pages + `_authenticated` gate
6. Portal: welcome, documents, journey, billing, messages
7. Polish: animations, SEO metadata, accessibility pass

## Technical Notes

- TanStack Start file-based routing in `src/routes/`; portal under `src/routes/_authenticated.portal.*`
- Server functions in `src/lib/*.functions.ts` for portal data writes (uploads, message send) using `requireSupabaseAuth` middleware
- Public-route loaders never call protected server functions
- All images via ES6 imports from `src/assets/`
