# nichemash_public

Marketing site for the NicheMash brand (`nichemash.com`), built with Vite + React and deployed to [GitHub Pages](https://pages.github.com/).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

Static output is written to `dist/`.

## Deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`, which builds the site and publishes to GitHub Pages. Custom domain: **nichemash.com** (`public/CNAME`).
