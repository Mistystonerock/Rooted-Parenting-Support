# Rooted Parenting Version 1

Rooted Parenting is a simple static web app for parents and caregivers of children with behavioral challenges. It brings together trauma-informed behavior guides, learning lessons, support tools, and printable worksheets in a calm mobile-friendly format.

## Main files

- `index.html` - app shell
- `styles.css` - mobile-first visual design
- `app.js` - routes, screens, lesson pages, behavior guides, and tools
- `parenting-support-app-content.json` - source behavior content
- `worksheets-printable.html` - printable worksheet pages
- `serve-rooted-parenting.ps1` - local preview server for easy testing
- `Rooted-Parenting-Concept-Summary.md` - professional concept summary

## How to test locally

### Fastest option

1. Open `index.html`.
2. Click through the app in your browser.

### Best option for full preview

1. Open PowerShell in this folder.
2. Run:

```powershell
PowerShell -ExecutionPolicy Bypass -File .\serve-rooted-parenting.ps1
```

3. Open:

```text
http://localhost:8080
```

4. Press `Ctrl+C` in PowerShell when you want to stop the server.

## What to test

- The onboarding screen appears on first open
- Bottom tabs work: `Home`, `Behaviors`, `Learn`, `Tools`, `Worksheets`
- Every behavior card opens its own guide page
- Learning topic pages open correctly
- Each Learning Path lesson opens its own page
- Lesson completion buttons work
- The `Help Me Right Now` button opens Tools
- Worksheet pages open and can be printed
- School Support opens from the Home or Tools screens
- The app is easy to use in a narrow mobile-sized browser window

## How to publish online

Because Rooted Parenting is a static web app, it is beginner-friendly to publish.

### Option 1: GitHub Pages

1. Create a GitHub account if needed.
2. Create a new repository named something like `rooted-parenting`.
3. Upload these files:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `parenting-support-app-content.json`
   - `worksheets-printable.html`
4. In the repository settings, open `Pages`.
5. Choose the main branch as the publishing source.
6. Save, then wait for GitHub Pages to give you a public web address.

### Option 2: Netlify

1. Go to [https://www.netlify.com](https://www.netlify.com).
2. Sign in or create an account.
3. Drag this app folder into Netlify Drop, or connect a GitHub repository.
4. Netlify will publish the site and give you a shareable link.

### Option 3: Vercel

1. Go to [https://vercel.com](https://vercel.com).
2. Import the project from GitHub or upload the files.
3. Use the default static site settings.
4. Publish and share the generated web address.

## Beginner publishing checklist

- Keep all app files in the same folder when publishing
- Make sure `index.html` stays at the top level
- Keep `app.js`, `styles.css`, `parenting-support-app-content.json`, and `worksheets-printable.html` together
- Test the live site after publishing by opening a few behavior and lesson pages

## Version 1 scope

Rooted Parenting Version 1 includes:

- Behavior Support selector and guide pages
- Trauma-informed learning topics
- Rooted Parenting learning path lessons
- Parent calm tools
- Printable worksheets
- School support resources
- First-time onboarding
- Mobile-friendly layout and calm visual design
