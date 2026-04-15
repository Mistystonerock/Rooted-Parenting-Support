# Rooted Parenting App

Rooted Parenting is a trauma-informed parenting support web app designed to help caregivers respond to children with behavioral challenges using calm, non-judgmental, skill-building guidance.

## Project files

- `index.html`
- `app.js`
- `styles.css`
- `worksheets-printable.html`
- `parenting-support-app-content.json`

## How to test locally

### Quick option

Open `index.html` in your browser.

### Better local preview

Run this in PowerShell from the project folder:

```powershell
PowerShell -ExecutionPolicy Bypass -File .\serve-rooted-parenting.ps1
```

Then open:

```text
http://localhost:8080
```

## What Version 1 includes

- Home screen with onboarding
- Behavior Support screen with individual guide pages
- Learn screen with trauma-informed topics and lesson pages
- Tools screen with grounding, breathing, and regulation support
- Worksheets screen with printable resources
- Mobile-friendly layout with calm, supportive design

## How to publish online

This is a static app, so it can be published easily on:

- GitHub Pages
- Netlify
- Vercel

For the simplest publish:

1. Put these files in one folder:
   - `index.html`
   - `app.js`
   - `styles.css`
   - `worksheets-printable.html`
   - `parenting-support-app-content.json`
2. Upload them to GitHub Pages, Netlify, or Vercel.
3. Open the live site and test the tabs, behavior guides, lessons, and worksheets.
