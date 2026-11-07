# Seven-project stack update

## Audit before implementation

- `app/page.js` renders four hardcoded cards with indices 0–3. Each contains a title/link and arrow, duplicate title for the character-slide animation, technology badges, and a description.
- `app/page.module.css` implements stacking with `.projects-list li { position: sticky; top: calc(((var(--p-index) * 2.6 + 1) * 1rem) + 5rem); }`. This descendant selector also unintentionally matches technology badge list items.
- Normal offsets are 6rem plus 2.6rem per card. At widths up to 500px the original step increases to 4rem. Seven cards would put the last mobile card at 30rem before accounting for its height.
- The list is a vertical flex container with 1rem gaps. Cards are 40rem wide with 1rem padding, 2px borders, 1rem corner radii, white backgrounds, black text, and wrapping blue badges. At 750px and below cards have a 90vw maximum width.
- Cards have no explicit z-index. Later positioned siblings paint above earlier siblings. Navigation is sticky at top: 0 with z-index: 2.
- The list's natural content height defines the sticky boundary; there are no transforms, scroll listeners, or fixed four-card heights. The containing Projects section has a viewport minimum height and 3rem bottom padding, followed by Contact.
- Title hover uses `charSlideUp .5s ease` with 50ms per-character delays. Characters already have inline-block display at rest, preserving the previous fix for pre-animation expansion. Hover animation is disabled below 1024px. Duplicate titles are hidden below 500px.
- Existing breakpoints: 1140, 1024, 800, 750, 580, 500, 420, and 400px. Existing About/hero/particle code must remain unchanged.

## Content evidence

All three supplied live URLs returned HTTP 200 when checked. Public landing pages cannot establish their backend stacks; local source provides the following evidence:

- LessonMapr: `LessonMap/frontend/package.json` and `LessonMapr-Reconstruction/frontend/package.json` confirm Next.js, React, TypeScript, and Neon Auth. Backend requirements, README, SQL schema, and API confirm FastAPI and PostgreSQL plus student management, scheduling, resources, role-based workspaces, messaging, invoices, and manual payment records. The reconstruction also includes Stripe requirements, an adapter, and webhook handling. The adapter is read-only and does not establish working card checkout or subscription billing. Avoid claiming those features.
- tutorME: frontend package manifest confirms Next.js, React, TypeScript, Neon Auth. Backend requirements confirm FastAPI, SQLAlchemy, and PostgreSQL's psycopg driver. Tutor search, tutor profile pages, role-based dashboard routes, and availability models confirm subject/location discovery and weekly/date-specific scheduling.
- SKG Games: package manifest, README, database schema, and daily-game modules confirm Next.js, React, TypeScript, PostgreSQL, Drizzle ORM, Neon Auth, Daily Alibi, Perfect Stack, daily challenges, local progress, and account-backed persistence support.
- Existing project stacks and URLs are retained from the portfolio. No GitHub URLs or new metrics are invented.

The three supplied new URLs are retained exactly. The owner confirmed LessonMapr remains in development and Stripe is not yet integrated. Stripe is omitted from the displayed badges and LessonMapr is described as actively developed. Other supplied technologies and projects were confirmed by the owner.

## Implementation

- Added lib/projects.js with stable IDs, titles, live URLs, technology lists, and descriptions. Original four projects retain their relative order and technologies; KSU VSA spacing and a duplicated RTL sentence were corrected.
- app/page.js maps all seven projects to the existing white-card structure. Each index supplies --p-index; --stack-intervals derives from the project count, with a minimum of 1.
- Sticky positioning stays on the outer list items only. Top remains 6rem plus an index-based step, preserving the existing header clearance. The step is clamp(.5rem, (100svh - 34rem) / intervals, 2.6rem): the original 2.6rem desktop spacing remains when it fits; shorter viewports compress it while reserving card space. Removed the old 4rem mobile step, which would consume excessive height with seven projects.
- At viewport heights of 36rem or less, cards use normal flow so the full content remains readable. No viewport listeners, scrolling state, animation packages, transforms, or fixed section heights are added.
- DOM paint order still layers later cards above earlier ones. A keyboard-focused card gets z-index 1 so its link cannot remain covered; navigation retains z-index 2.
- Project titles are semantic h3 headings. The split-character link has one accessible name, a visible inset blue focus outline, and noopener noreferrer. The duplicate animation row is hidden from assistive technology and contains a span instead of an empty link.
- Existing character keyframes, durations, delays, external-arrow styling, and the inline-block pre-hover spacing fix remain. Focus and reduced-motion states suppress the character motion for readability.
- About, header, Contact, and particle implementations remain unchanged. No dependencies are added or upgraded.

## Validation

- npm run lint: passed, zero errors/warnings.
- npm run build: passed; home and /api/contact compile.
- npm audit --omit=dev: zero vulnerabilities.
- git diff --check: passed.
- Chrome/Playwright used the installed local browser and an existing Playwright installation from a sibling project. No browser/test dependency was added to this portfolio.
- Baseline four-card stack recorded before building the update. Updated seven-card stack checked at 1440x900, 1024x768, 768x1024, 480x800, 375x667, plus 1440x600 and 375x500.
- All seven titles, URLs, safe link attributes, and technology lists match project data. DOM order matches visual order. Badges no longer inherit sticky positioning.
- At each normal-height viewport, every active card fits entirely below the header and within the viewport at its pin point. Every down/up coordinate sample is identical. At 375x500 the normal-flow fallback is active.
- Mouse wheel and direct emulated touch swipes move the page. Sequential Tab navigation reaches each of the seven project links in order, each with a visible outline and its center point unobscured.
- Project title widths do not change between rest and hover. Reduced-motion checks report no character animation. Two particle canvases remain present; no browser page errors were recorded.
- When Contact is reached, the last project's bottom is at or above Contact's top, so no stack remains pinned over Contact.
- Source comparison verifies all page markup and logic outside Projects remain unchanged from the pre-task working tree. Earlier uncommitted About and title-spacing work is preserved.

## Manual checks

- Review normal-motion scrolling and title hover timing on a physical trackpad or touchscreen, especially mobile browser chrome resizing and landscape rotation.
- Check Safari and Firefox; automated checks used Chrome only.
- Project pages returned HTTP 200 and local source supports descriptions, but no authenticated project workflow or payment flow was executed.
- No commit, merge, push, or deployment was performed.
