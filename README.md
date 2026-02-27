# natnafu.com — Self-Hosted Portfolio

A clean, static HTML rebuild of natnafu.com. No frameworks, no build step, no server required.

## File Structure

```
natnafu-site/
├── index.html           ← Work / homepage
├── about.html
├── waves.html
├── remote-touch.html
├── led-dome.html
├── the-fans-of-life.html
├── frames.html
├── remote-breath.html
├── overcome.html
├── 3dp.html
├── acrylic-pour.html
├── style.css
├── main.js
└── content/              ← Put your downloaded images here
```

## Hosting Options

### Netlify (easiest — free)
1. Go to netlify.com → "Add new site" → "Deploy manually"
2. Drag the entire `natnafu-site` folder onto the deploy area
3. Done! Netlify gives you a free URL, and you can connect your custom domain.

### GitHub Pages (free)
1. Create a new GitHub repo
2. Upload all files to the repo
3. Go to Settings → Pages → set source to main branch
4. Your site will be at `yourusername.github.io/repo-name`

### Any web host / VPS
Just upload all files to your public HTML folder (e.g. `/var/www/html/` or `public_html/`).
No PHP, no database, no configuration needed.

## Images

Currently the site pulls images directly from the Squarespace CDN, which will
work as long as your Squarespace account is active. Once you cancel Squarespace,
those image URLs will break.

**Before canceling Squarespace:**
1. SiteSucker should have already downloaded your images — find them in the
   SiteSucker output folder (look for the `images.squarespace-cdn.com` subfolder)
2. Copy all your images into the `content/` folder in this site
3. Update the `src` attributes in each HTML file to point to `content/your-file.jpg`
   instead of the long Squarespace CDN URL

You can do a find-and-replace in any text editor:
- Find: `https://images.squarespace-cdn.com/content/v1/5dec15adeb7f6827970877dc/`
- Replace with: `content/` (then rename files to match)

## Videos

The OVERCOME page had two embedded videos (OVERCOME and OVERCOME - Slow Motion)
that were hosted on an external platform (likely YouTube/Vimeo). Find those video
links and add them back as iframe embeds — there's a note on the overcome.html page.

## Customization

- Fonts: Loaded from Google Fonts (DM Mono + DM Sans). Change in style.css `@import`.
- Colors: All colors are CSS variables at the top of style.css — easy to change.
- Add new projects: Copy any project HTML file, update the content, and add a
  link to it in index.html.
