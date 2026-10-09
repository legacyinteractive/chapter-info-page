# Chapter Information Page — demonstration

A responsive, modern and spacious Royal Arch Chapter page concept, based on the layout approved for Roddy. Built by Legacy Interactive.

## Cloudflare Worker (GitHub deployment)

This repository is configured for **Cloudflare Workers with Static Assets**, which matches the existing `chapter-info-page` application shown in Cloudflare.

Files:
- `wrangler.jsonc` — Cloudflare Worker configuration, including the `./public` assets directory
- `public/index.html` — complete standalone, responsive website
- `public/robots.txt` and `public/_headers` — demo publication safeguards
- `package.json` — no-op build and Wrangler deploy commands

For **Workers & Pages → chapter-info-page → Settings → Builds**:
- Repository: `legacyinteractive/chapter-info-page`
- Branch: `main`
- Root directory: `/` (repository root)
- Build command: `npm run build` (or leave unset)
- Deploy command: `npx wrangler deploy`
- Assets directory: automatically `./public` from Wrangler configuration

Cloudflare should install the npm development dependency and use Wrangler to upload the static assets. A successful run will serve `index.html` on the default Worker route.

If a deployment still fails, open the specific failed build → **Build logs**, copy the first clear error message, and investigate that error rather than changing the project type.

> This repository does not include Cloudflare credentials, live enquiry configuration or a backend.

## Included sections and interactions

- Split photographic hero + Chapter introduction and illustrative meeting details
- Burgundy quick-link strip; chapter history and benefits
- Gallery with image lightbox; example officers and upcoming meetings
- FAQ accordions and contact panel
- Responsive desktop, iPad and mobile styles with collapsible navigation
- Demo-only enquiry modal: personal details are not sent, saved or emailed
- Browser-generated sample joining-information PDF (not an official document)

## Before real publication

1. Confirm actual Chapter identity, location, founding history, meeting dates and officer names.
2. Replace stock imagery with approved Chapter photos; confirm rights to crests and Provincial branding.
3. Arrange a genuine consent-aware email/form delivery mechanism with CAPTCHA/anti-spam, privacy notice and data retention rules.
4. Replace the sample PDF with the official, approved information pack.
5. Remove demo ribbon, robots disallow and `noindex` only after explicit approval for public launch.

The site currently carries a prominent demo notice; the Chapter's name, meeting information, logo treatment and some photographs are illustrative.

## First polish pass (9 October 2026)

- The Chapter History panel now features a genuine dressed dining-room photograph from the Chilcomb Down House repository (rather than a generic grand hall).
- The four image gallery cards and the contact-area photo feature authentic Chilcomb Down House photography, with truthful captions and alt text. They do **not** imply that the images were taken at a Wolvesey Chapter meeting.
- Adjusted image cropping, captions, keyboard hover behaviour and panel typography/spacing.
- The site hero still uses illustrative stock imagery; authentic Chapter-specific imagery can replace it when approved. The demonstration remains marked as such.
