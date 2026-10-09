# Wolvesey Chapter No. 6818 — preview and approval handover

Prepared for Roddy and the Wolvesey Chapter website review — 9 October 2026.

## Review links

- [Chapter preview](https://chapter-info-page.jack-576.workers.dev/)
- [GitHub source](https://github.com/legacyinteractive/chapter-info-page)
- [Passed visual QA and screenshots](https://github.com/legacyinteractive/chapter-info-page/actions/runs/37919321999): open the run, find **Artifacts**, and download **wolvesey-chapter-visual-qa** to inspect the desktop, laptop, iPad and phone views.
- Source commit: `3776641a28dc2b0c667bf6ab0e6babc067053e96`.

## What is ready for review

- Modern, spacious Chapter page with **Classic & Prestigious** footer in midnight navy, muted gold and ivory.
- Consistent Manrope typeface, responsive layouts, provincial crest and **North Central Area** label.
- Winchester Cathedral photograph used as local context; authentic Wolvesey Chapter group portrait in the history panel; Chilcomb Down House gallery photography accurately described as illustrative venue imagery.
- Chapter name **Wolvesey Chapter No. 6818** and meeting location **Winchester Masonic Centre**.
- Regular meetings shown as January, March, October and December. **Exact dates have not been confirmed** and are not presented as scheduled events.
- Chapter history, leadership role placeholders, FAQs, sample joining PDF and demo-only enquiry form.
- Descriptive local Royal Arch footer, relevant section navigation, official UGLE link, honest photo credits and Legacy Interactive attribution.
- Demonstration marked `noindex` and not represented as an official Provincial publication.

## Technical checks recorded

On 9 October 2026, [GitHub Actions run #37919321999](https://github.com/legacyinteractive/chapter-info-page/actions/runs/37919321999) completed successfully. Its private local Chromium preview checked:

| View | Width |
| --- | ---: |
| Desktop | 1440px |
| Laptop | 1280px |
| iPad-sized tablet | 820px |
| Phone | 390px |
| Small phone | 360px |

The run also checked horizontal overflow, local crest/group images, mobile menu open/Escape-close, gallery lightbox and sample PDF download; screenshot artifacts were saved.

These tests do **not** confirm that the current Cloudflare production preview is deployed successfully. The live Worker must still be checked in real browsers, and the saved screenshots should be visually reviewed before sharing widely.

## Remaining publication gates

1. **Chapter approval:** Check page wording and agree the Chapter's real history and milestones, officer names/roles and any photos to publish.
2. **Meeting information:** Confirm actual summons/convocation dates, opening times, dining arrangements and the Chapter contact channel.
3. **Enquiry and privacy:** Decide the recipient and approved secure sending route. The current demo form deliberately **sends and stores nothing**; add consent-aware processing and anti-spam controls before accepting real enquiries.
4. **Images and branding:** Confirm permission for the Provincial crest and Chapter group portrait. Replace illustrative Chilcomb gallery images if authentic Chapter images are available. The clear group portrait is 1536 × 1024 black-and-white; a true full-resolution colour master is still needed for a genuine 4K colour image.
5. **Joining information:** Replace the clearly labelled sample PDF with approved official wording and verify links.
6. **Launch operations:** Verify Cloudflare deployment, production route and browser smoke tests. Agree the final domain and canonical URL, and only then remove demo notice/`noindex` after written approval.

## Suggested feedback for Roddy

Review the page on desktop and mobile and comment on the crest, Cathedral hero image, history photograph, footer composition, legibility, meeting presentation and which facts or names can be approved for publication.

**Do not publish as an official website or enable indexing or live enquiries until the remaining gates are approved.**
