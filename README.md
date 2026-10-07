# BN JetWashes

High-performance Astro website for **BN JetWashes** — local jet washing across Daventry and surrounding areas.

## Pages

- Home
- About us
- Services (+ individual service pages)
- Projects
- Areas we cover (+ local area pages)
- Contact
- Privacy

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## SEO included

- Semantic HTML and accessible navigation
- `robots.txt` and XML sitemap (`@astrojs/sitemap`)
- Canonical URLs, Open Graph and Twitter meta
- LocalBusiness, Service, FAQ and Breadcrumb JSON-LD
- Local area landing pages for Daventry and nearby villages

## Deploy / go live

On every push to `main`, GitHub Actions builds the site and publishes it to the `gh-pages` branch.

To make it public:

1. Open [Settings → Pages](https://github.com/CreativeMKStudios/BN-Jetwash/settings/pages)
2. Set **Source** to **Deploy from a branch**
3. Choose branch `gh-pages` and folder `/ (root)`, then Save
4. (Recommended) Add custom domain `bnjetwashes.co.uk` to match the site canonical URL

Until Pages is enabled, the `gh-pages` branch still updates automatically so the site is ready to publish.

## Contact (from business leaflet)

- 07305 958661 / 07423 274109
- brownebailey44@gmail.com
