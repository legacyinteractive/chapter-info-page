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

## Chapter layout and accessibility polish — 9 October 2026

- First responsive polish batch: mobile navigation now collapses before tablet/laptop links collide; Escape, outside click and viewport resize close the menu.
- Added a skip-to-content link, refined focus states, slightly larger card typography and balanced mobile/desktop section spacing.
- Replaced misleading 'Find a Chapter' navigation with a Wolvesey-specific contact action; removed arrow-only affordances from the non-clickable provisional meeting rows.
- Clarified that Chilcomb Down House gallery images are not photographs of Winchester Masonic Centre.
- Added dependency-free static checks via `npm run check`, also run automatically during `npm run build`. They check broken internal anchors, duplicate IDs, missing local images, unsafe new-window links, demo noindex, meeting months, and JavaScript syntax.
- This batch does not enable an enquiry backend, publish official meeting dates or relax the preview/demo safeguards.

## Chapter gallery, officers, regular meetings and local SEO footer — 9 October 2026

- Replaced the ambiguous "Upcoming Meetings" heading with "Regular Chapter Meetings" and displayed the four meeting months clearly, without inventing actual meeting dates.
- Improved responsive Chapter officer cards and their role markers; names are still marked as awaiting confirmation.
- Added improved gallery overlay cues and prominent provenance text. Chilcomb Down House is identified as a *different venue*, not the Chapter meeting centre.
- Rebuilt the footer with a descriptive **Wolvesey Chapter No. 6818 / Royal Arch Freemasonry in Winchester** heading, semantically labelled Chapter navigation, meeting location and regular months, real internal content links, official UGLE external information, and the Legacy Interactive credit.
- Improved the title and meta description for a possible eventual production launch. `noindex`, demo disclaimers and mock enquiry operation remain unchanged. Do not remove noindex or advertise the site as official until there is publication approval and real contact details.
- Updated the static QA checks for the changed meeting presentation, semantic footer and accurate gallery/officer disclaimers.

## Header and site polish — 9 October 2026

- Removed the main header's Contact Wolvesey button; existing enquiry sections and footer links remain.
- Removed the fake search icon that only jumped to FAQs.
- Refined header balance and navigation focus/hover, mobile menu target, hero image positioning, informational spacing, officer card finish, gallery shadows and FAQ cues.
- Added static regression guards for the removal and the retained Chapter enquiry feature. Preview noindex is unchanged.

## Classic and Prestigious footer in midnight navy (9 October 2026)

- Implemented the approved classic five-column layout in the deep midnight-navy, champagne-gold and ivory colours of Concept 3.
- Preserved provincial crest and Manrope typography; added a subtle Winchester Cathedral backdrop.
- Footer includes Chapter introduction, internal navigation, official UGLE Royal Arch link, January/March/October/December meeting months, Winchester Masonic Centre, honest photo notes and Legacy Interactive credit.
- Responsive two/three-column tablet and stacked mobile layout. No invented privacy, social or sitemap links.
- Updated QA. Demo noindex and the non-sending sample enquiry form are unchanged until approved.

## Post-launch-preview polish — 9 October 2026

- Improved the approved Classic & Prestigious navy-and-gold footer: stronger readability, larger links, tablet/mobile touch targets, and a functional gold-accented Back to top link.
- Corrected the quick-link from “View upcoming meetings” to “Regular Chapter meetings”, because only meeting months have been confirmed, not actual dates.
- Corrected Winchester Cathedral imagery description and the demonstration ribbon to avoid suggesting the landmark is the Chapter meeting venue.
- The non-sending enquiry form now clears entered values when its dialog closes, a privacy-friendly behaviour for the demonstration.
- Added regression checks for the new footer control, honest meeting label, demo form reset and contrast/spacing styles. Existing noindex, meeting months, location and original palette remain unchanged.
- A live Cloudflare screenshot review remains outstanding; remote tool access to the Worker was unavailable during the check.

## Automated cross-device browser QA — 9 October 2026

GitHub Actions workflow `.github/workflows/chapter-visual-qa.yml` now checks the static demo in Chromium on pushes to `main` and on manual dispatch. Its Playwright script `scripts/visual-audit.mjs` captures whole-page and footer screenshots at **1440, 1280, 820, 390 and 360 pixels wide**, checking layout overflow, the mobile menu (including Escape), locally hosted crest/group images, the photo lightbox and sample joining-PDF download.

You can retrieve the screenshots from **GitHub → Actions → Chapter visual QA → latest run → Artifacts → wolvesey-chapter-visual-qa**. Successful source checks are not a substitute for a manual visual review; inspect the screenshots before approval.

This workflow runs a private local preview within GitHub Actions. It **does not change Cloudflare settings, deployments, real contact details or production data**.

### Outstanding human approval before launch
- Confirm the Chapter's official history, principals, Scribe E, real dates/times and approved enquiry destination.
- Provide any preferred authentic gallery imagery and, if necessary, an authorised original full-resolution **colour** group photo. The current clear B&W image is 1536 × 1024, not native 4K colour.
- Confirm provincial crest approval, photographic rights and brand usage.
- Decide on privacy notice/contact processing and approved PDF contents.
- Confirm Cloudflare browser smoke tests, mobile screenshots and successful deployment. **Do not remove noindex or the demo-only enquiry behaviour** before those gates.
