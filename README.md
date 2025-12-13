# BarberQueue Landing Page

A static landing page for BarberQueue - a mobile app connecting customers with barber shops for instant booking.

## Quick Start

Open `index.html` in any browser to view locally.

## Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Under "Source", select `main` branch and `/` (root)
4. Click **Save**
5. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Project Structure

```
/
├── index.html          # Main landing page
├── styles/
│   └── main.css        # All styles (CSS custom properties)
├── scripts/
│   └── main.js         # Minimal JS (tabs, smooth scroll)
├── assets/
│   └── images/         # Screenshots & assets (add here)
└── README.md           # This file
```

## Editing Content

### Update Hero Section
Edit `index.html` lines 28-42:
- `hero__title`: Main headline
- `hero__subtitle`: Subheadline description

### Update Features
Edit `index.html` lines 95-160:
- Customer features in `#panel-customer`
- Shop features in `#panel-shop`

### Update Design Links
Edit `index.html` lines 200-230:
- Replace `href="#"` with actual Figma URL
- Replace `href="#"` with actual Behance URL

### Add App Screenshots
1. Add images to `assets/images/`
2. Replace placeholder `<div>` elements with `<img>` tags in:
   - Hero phone mockup (line 44)
   - Preview gallery (lines 168-190)

### Customize Colors
Edit `styles/main.css` lines 10-15:
```css
:root {
  --primary: #FF6B35;      /* Main orange */
  --secondary: #F7931E;    /* Accent orange */
  --dark: #1A1A1A;         /* Text/dark backgrounds */
  --light: #FFF3E6;        /* Light backgrounds */
}
```

## Tech Stack

- Pure HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

No build step required. Zero dependencies.

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

University project. All rights reserved.
