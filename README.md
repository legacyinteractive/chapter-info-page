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

- The Chapter History panel now features the group photograph supplied for Wolvesey Chapter No. 6818 (rather than the Chilcomb Down House dining-room photo). Its 480 × 360 AVIF copy is optimised for the demo; the original can replace it when required.
- The four image gallery cards and the contact-area photo continue to feature authentic Chilcomb Down House photography, with truthful captions and alt text. They do **not** imply that the images were taken at a Wolvesey Chapter meeting.
- Adjusted image cropping, captions, keyboard hover behaviour and panel typography/spacing; the Chapter group photo is positioned to keep faces in view on desktop and fully visible on mobile.
- The site hero still uses illustrative stock imagery; authentic Chapter-specific imagery can replace it when approved. The demonstration remains marked as such.

## Header & typography update (9 October 2026)

- The Chapter site now uses a local web-optimised rendition of the user-supplied provincial coat of arms in both header and footer, replacing the former circular symbol. The 'ROYAL ARCH CONCEPT' header subtitle has been removed; the top-of-page demo disclaimer remains until approval.
- Black body/card/officer/meeting/FAQ text replaces light grey copy for legibility. White text remains on dark hero, burgundy and footer backgrounds.
- The supplied crest source was 408 × 469 pixels. For a true high-detail 4K logo, a larger authorised original is needed; simple enlargement cannot create detail. The deployed image is an optimised website icon, not a true 4K photograph.

## Header and contrast refinement (9 October 2026)

- Header/footer now use the Provincial Grand Lodge crest cropped from the established high-resolution transparent Provincial artwork, stored locally at `public/images/hampshire-provincial-lockup-hd.png`. The 2000px-wide lockup provides a detailed shield for small displays; this is **not** the requested 4K restoration master.
- Black body copy replaces grey text on light surfaces; white content remains white on dark panels.
- The group photo is presented uncropped with slightly more contrast. The **current low-resolution AVIF is unchanged**; the previously prepared higher-resolution photograph still needs importing for genuine sharpness.
- The noindex and demo safeguards remain.
