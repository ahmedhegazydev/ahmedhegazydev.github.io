# CV website

A one-page CV site: plain HTML, CSS and JavaScript. No build step, no backend, no API keys. It works on GitHub Pages as is.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page content |
| `style.css` | Layout and the light and dark themes |
| `script.js` | Theme toggle, mobile menu, footer year |
| `cv.pdf` | Optional: your CV, if you add a "Download CV" button (see the comment in the hero) |

## Edit your details

1. Open `index.html` and search for `EDIT:`. Every placeholder sits next to one of these comments.
2. Replace the text in square brackets, such as `[Company]` and `[YYYY]`.
3. Replace `YOUR-EMAIL@example.com`, `+20XXXXXXXXXX` and `YOUR-LINKEDIN` in the contact section and the hero.
4. Optional: put your CV in the repository root as `cv.pdf` and add the "Download CV" button from the comment in the hero section.
5. To change colours, edit the tokens at the top of `style.css`. `:root` holds the light theme and the dark block below it holds the dark theme.

To preview, open `index.html` in a browser.

## Publish on GitHub Pages

1. On GitHub, create a public repository named exactly `YOUR-GITHUB-USERNAME.github.io`, for example `ahmedhegazydev.github.io`. Don't add a README.
2. Upload the files from this folder. Either:
   - Upload them in the browser: open the repository, click "Add file" → "Upload files", drag in the files, then commit.
   - Or push with git:
     ```bash
     git init
     git add .
     git commit -m "Add CV website"
     git branch -M main
     git remote add origin git@github.com:YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git
     git push -u origin main
     ```
3. Open the repository's Settings → Pages. Under "Build and deployment", set the source to "Deploy from a branch", the branch to `main` and the folder to `/ (root)`, then save.
4. After a minute or two, the site is live at `https://YOUR-GITHUB-USERNAME.github.io`.

Every push to `main` updates the site.
