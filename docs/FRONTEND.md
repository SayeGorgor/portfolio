# Frontend engineering

The portfolio separates project content from rendering, uses CSS for responsive interactions and keeps motion subordinate to readable content. [Project data](../lib/projects.js), [page markup](../app/page.js) and [CSS Modules](../app/page.module.css) are the main boundaries.

## Responsive project-card stacking

Data renders with stable IDs and DOM reading order. Only direct outer list items are sticky, so badges do not inherit positioning. Cards receive `--p-index`; `--stack-intervals` is the number of gaps with a minimum of one. The step is:

```css
clamp(.5rem, calc((100svh - 34rem) / var(--stack-intervals)), 2.6rem)
```

Top is `6rem + index * step`: header clearance stays while short viewports compress spacing. At heights of 36rem or less, cards use normal flow. The container naturally ends stacking before Contact; no scroll listener, fixed count-based height or animation dependency is needed. Later siblings layer in DOM order. Focused cards gain z-index 1 to expose their links; navigation stays above at 2.

Titles are h3 headings with one accessible link name; decorative duplicate rows are hidden from assistive technology. Character hover uses half-second keyframes with 50ms staggering and stable inline-block widths before animation. External links retain `noopener noreferrer` and inset focus. Focus/reduced-motion states suppress title animation; narrow layouts disable specified hover effects/hide the duplicate row.

## Skill tiles and accessibility

Twelve informational tiles form a three-column list. Outer columns sit 2rem lower to emphasize the center without changing reading order. Desktop cards are 10rem by 8rem. About stacks at 1140px; below 580px, zero-minimum equal columns and 6rem minimum card height accommodate labels. Logos preserve aspect ratio; additional technologies wrap as chips.

IntersectionObserver activates a half-second opacity reveal with 50ms staggering. Hover animates the layered blue/red border gradient using `borderDraw` for three seconds, easing/alternating. Informational tiles add no tab stops; decorative logos are hidden from assistive technology. Reduced motion makes tiles visible without reveal fades and keeps a static blue hover border. These scoped rules do not imply every other visual effect stops.

## Particle layering and visual cost

Hero/main backgrounds use separate canvases and [shared slim-engine initialization](../components/use-particles-ready.js). A shared promise avoids duplicate initialization, allows retry on failure and guards unmounted state updates. Both configurations cap requested rendering at 60fps; this is a ceiling, not measured device performance.

Hero starts at 300 particles and reduces to 200/150 at tablet/phone breakpoints; touch-sized configurations disable hover modes. Main uses 75 particles. Cost depends on density, pixel ratio and interaction. Current main configuration disables links, while the preserved [baseline JSON](particle-background-baseline.json) records earlier `links.enable=true` with zero opacity. It is a reference snapshot, not runtime configuration or a claim of exact parity. The canvases do not implement a dedicated reduced-motion pause; review that separately before claiming all motion stops.

## Asset attribution

TypeScript/Docker logos use Devicon v2.16.0 (MIT). Preserve the [Devicon notice](../app/%28icons%29/LICENSE.devicon.txt) with the assets. OpenAI derives from Simple Icons 11.15.0 (CC0), with `currentColor` for a monochrome fill. FastAPI reuses the supplied SVG; REST APIs is a custom neutral symbol. Other logos retain existing assets. Brand marks do not imply sponsorship.

## Validation boundaries

Privately archived source reports record Chrome checks for normal/short viewport stacking, keyboard focus, stable title widths, skill ordering, hover parity, motion preferences and overflow. These are historical results, not browser suites rerun during consolidation. Physical touch/trackpad behavior, Safari/Firefox and mobile browser chrome still need acceptance. `npm run lint`/`npm run build` check implementation but do not prove visual parity.

The [contact API](../app/api/contact/route.js) is a separate server boundary. Project-stack claims should trace to each project's source; a live landing page does not prove backend/payment capabilities. This guide preserves decisions from both implementation reports without adding proficiency ratings or unsupported metrics.


Original asset references: [Devicon v2.16.0 icons](https://github.com/devicons/devicon/tree/v2.16.0/icons) and [MIT terms](https://github.com/devicons/devicon/blob/v2.16.0/LICENSE); [Simple Icons 11.15.0 OpenAI source](https://github.com/simple-icons/simple-icons/blob/11.15.0/icons/openai.svg) and [CC0 terms](https://github.com/simple-icons/simple-icons/blob/11.15.0/LICENSE.md). Preserve the local Devicon notice with its SVGs. These versioned provenance links do not imply the packages are installed dependencies.
