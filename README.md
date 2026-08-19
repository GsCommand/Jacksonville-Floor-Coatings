# Jacksonville Floor Coatings

Design-forward website foundation for **Jacksonville Floor Coatings**.

## Brand position

**Luxury home improvement first. Coating contractor second.**

The homepage leads with designer resin interiors and room-level visual outcomes. Garage floor coatings remain the repeatable everyday service and receive their own conversion-focused route. The site architecture is built to expand into finish collections, real project case studies, local service-area pages and eventually the internal room-scan / pour-map training product.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Plain CSS design system (no UI-framework dependency)
- Resend + Zod lead endpoint
- Metadata, sitemap, robots and LocalBusiness schema

## Run locally

```bash
npm install
npm run dev
```

## Lead form

Copy `.env.example` to `.env.local` and configure:

- `RESEND_API_KEY`
- `LEADS_TO_EMAIL`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

The form intentionally returns a clear configuration error until email delivery is connected rather than pretending a lead was captured.

## Photography

The first layout uses licensed-source remote editorial placeholders for room context. Replace them with Jacksonville Floor Coatings project photography as soon as real installs are available. Finish swatches are generated in CSS and are design-direction placeholders, not claims of completed projects.
