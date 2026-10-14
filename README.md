# Bookmark landing page

Recruitment task – a landing page built from the provided design (mobile 375px and desktop 1440px).

**Live:** https://zadanie-rekrutacyjne1.vercel.app

## Tech stack

- React
- Webpack + Babel (own config, no Vite / CRA)
- Sass (SCSS) with BEM naming
- Prettier
- Vercel

## Features

- Responsive layout for mobile and desktop
- Mobile menu opened with the hamburger button
- Features section with three tabs
- FAQ accordion (one question open at a time)
- Newsletter form with validation – error when the input is empty or the email has no `@`
- "35,000+ already joined" counter that goes down to 0 in 20 seconds
- Modal with the "Speedy Searching" tab content, opens after 30 seconds or when the cursor moves to the top of the page
- Hover / active states for buttons, links, tabs and icons
- Blue background shapes made with CSS (no images)
- SVG `fill` / `stroke` changed with CSS (logo in footer and mobile menu, social icons, FAQ arrow, close icon)

## Decisions

- The modal shows only once per visit – after closing it does not open again, so it doesn't annoy the user.
- The counter uses `setInterval` (every 100 ms). `setInterval` is not always precise, so after 20 seconds the value is set to 0 to make sure it ends at 0.
- Newsletter validation runs on submit, not while typing.
- Styles are mobile-first, desktop styles are added with a `desktop` mixin (`min-width: 768px`).

## Getting started

```bash
npm install
npm run dev      # dev server on localhost:3000
npm run build    # production build to /dist
npm run format   # format code with Prettier
```

## Project structure

```
src/
  components/   # one folder per section (JSX + SCSS)
  images/       # SVG icons and illustrations
  styles/
    abstracts/  # variables and mixins
    base/       # reset and typography
  App.jsx
  index.jsx
```
