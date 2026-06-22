# katsuyaswan.github.io

Personal website of **Katsuya Shiratori, Ph.D.** — a plain, static site (no build
step, no dependencies). Hosted free on GitHub Pages at
<https://katsuyaswan.github.io/>.

Design system: *“The Quarto Press”* — a typeset-journal look (Fraunces + Newsreader +
IBM Plex Mono, warm ivory paper, clay accent) with automatic light/dark mode.

---

## File structure

```
.
├── index.html          ← Home: hero + research, education, experience, awards, skills
├── publications.html   ← Papers + conference presentations
├── races.html          ← Marathon / half / triathlon results
├── 404.html            ← "Page not found"
├── assets/
│   ├── style.css        ← ALL styling + design tokens (colours, fonts, spacing)
│   ├── main.js          ← Light/dark theme toggle
│   ├── profile.jpg      ← Portrait photo (optimised for web)
│   ├── favicon.svg      ← "K" monogram tab icon
│   └── apple-touch-icon.png
├── robots.txt          ← Search-crawler hints
├── sitemap.xml         ← List of pages for search engines
├── .nojekyll           ← Serve files as-is (no Jekyll processing)
├── LICENSE
└── README.md           ← This file
```

There is no framework and nothing to install. Open any `.html` file in a browser to
preview it, edit, save, refresh.

---

## How to edit content

All text lives directly in the `.html` files, between clearly-commented sections
(look for `<!-- ===== ... ===== -->`). You only edit plain text and links.

### Update your bio, education, experience, skills
Edit **`index.html`**. Each block is its own `<section>` with a heading comment naming the
section — search the file for `EDUCATION`, `EXPERIENCE`, `SKILLS`, etc. Copy an existing
entry and change the text.

### Add a publication
Edit **`publications.html`**. Copy one `<li class="pub"> … </li>` block and edit the
authors, title, and venue. For an unpublished item use a status badge:
```html
<span class="pub__venue"><span class="badge">In Preparation</span></span>
```
For a published item, link out instead:
```html
<span class="pub__venue"><em>Journal Name</em>, 2025.
  <a class="result-link" href="https://doi.org/…" target="_blank" rel="noopener">View ↗</a></span>
```
Papers are numbered automatically (01, 02 …) — don't number them by hand.

### Add a race
Edit **`races.html`**. Copy one `<li class="result"> … </li>` block, set the time and
the event name, and point the link at the official results page.

### Change your social links
Search the `.html` files for the profile URLs (e.g. `github.com/SWAN88`). They appear in the
hero on `index.html` and in each page's footer. To add a contact email, insert an `<li>` with a
`mailto:` link into those social lists (each link opens in a new tab via `target="_blank"`).

### Replace the photo
Drop a new portrait at `assets/profile.jpg` (portrait orientation works best).
To keep the page fast, resize large photos first, e.g. on macOS:
```bash
sips --resampleWidth 720 -s formatOptions 82 your-photo.jpg --out assets/profile.jpg
```

---

## Changing the look

All design "knobs" are CSS custom properties at the very top of **`assets/style.css`**,
in the `:root { … }` block — colours, fonts, type scale, and spacing. Edit a value
there and it updates everywhere. The dark theme lives in one place just below
(`html[data-theme="dark"] { … }`).

---

## Publishing

This repo **is** the website. Commit and push to the `main` branch and GitHub Pages
publishes the changes automatically within a minute or two:

```bash
git add -A
git commit -m "Update content"
git push
```

---

Built as a clean rewrite of an earlier Jekyll (Academic Pages) site.
