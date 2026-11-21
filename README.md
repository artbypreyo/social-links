# Art By Preyo social links and QR

A free, static React landing page. The homepage shows Instagram, Facebook, YouTube and WhatsApp links. Add `?qr` to its URL to preview and download a QR code that opens the homepage.

## Run locally

```bash
npm install
npm run dev
```

The local QR is only for preview. Publish first, then open the published URL with `?qr` and click **Download QR code**. The downloaded SVG can be printed at any size.

## Publish for free with GitHub Pages

1. Create a public GitHub repository and push this `social-links` project into it.
2. In the repository, go to **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. The included workflow builds and deploys the site whenever you push to `main`.
4. Open the Pages URL, then append `?qr` and download the QR. Scan it with a phone before printing.

The QR stores the published page URL. If that URL changes later, you must download and print a new QR. The social destinations can be edited in `src/main.jsx` without changing the QR, as long as the published page URL stays the same.
