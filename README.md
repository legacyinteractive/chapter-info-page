# Chapter Information Page — demonstration

A responsive, modern and spacious Royal Arch Chapter page concept, based on the layout agreed with Roddy. Built by Legacy Interactive for illustration only.

## Preview / deployment

This repository is a framework-free **static Cloudflare Pages site**. To publish:

1. Open **Cloudflare → Workers & Pages → Create application → Pages → Import existing Git repository**.
2. Select **legacyinteractive/chapter-info-page**.
3. Choose **production branch: main**, **framework preset: None**, **build command: exit 0**, **build output directory: .** (repository root).
4. Deploy. The generated **pages.dev** URL can be shared for design review. Further pushes to `main` will trigger builds when Git integration is configured.

> Deployment is not automatic until the repository has been connected to a Cloudflare Pages project. No Cloudflare credentials or workflows are checked into this repository.

## Current functionality

- Split-image hero with chapter introduction, meeting information and joining-pack download
- Burgundy quick-link bar and modern card sections
- History, benefits, photo gallery with accessible lightbox, officers, sample meetings, FAQs and contact panel
- Responsive phone/tablet/desktop navigation
- Demo-only enquiry modal (no transmission or storage)
- Browser-generated **sample PDF** joining pack (not an official Royal Arch document)
- Search engine indexing discouraged through robots instructions and `noindex`

## Before production

- **Replace the example name, number, location, history and meeting dates** with verified Chapter details.
- Get permission to use actual Chapter images and approved badges/crests, and replace the illustrative stock photographs.
- Obtain permission for any Provincial branding; the site is currently clearly marked **not official**.
- Replace the demo-only form with a secure, consent-aware enquiry flow to the recipient agreed by the Chapter. Add anti-spam protection and a privacy notice.
- Replace the sample PDF with the Chapter's approved joining information pack.
- Remove `noindex`, X-Robots-Tag and robots disallow only when the site is approved for public launch.
- Confirm actual accessible meeting information, officer names and contact arrangements.

## Images

During this concept stage, the page uses illustrative photographs served from Pexels (IDs 35980786, 33939742, 35189972, 31282634). These are not photos of the example Chapter or the Southampton Masonic Centre. Credit and replace as appropriate before public launch.

## Stack

A single `index.html` with accessible semantic HTML, CSS and a small amount of browser JavaScript. No npm install, external JS libraries, API keys, backend or database required.
