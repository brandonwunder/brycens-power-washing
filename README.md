# AZ Concrete King

Professional concrete power washing website for Arizona homeowners.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- No frameworks or build tools
- Deployed via Vercel

## Getting Started

Open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`

## Project Structure

```
├── index.html          Home page
├── services.html       Services & pricing
├── reviews.html        Customer reviews
├── about.html          About the company
├── contact.html        Contact form
├── css/                Stylesheets
├── js/                 JavaScript
├── data/               JSON data (pricing, reviews)
├── assets/             Images and fonts
└── tools/              Dev utilities
```

## Tools

```bash
# Manage pricing tiers
node tools/pricing-manager.js list
node tools/pricing-manager.js add "Name" "Desc" "Sq ft" "Price" "feature1,feature2"

# Manage customer reviews
node tools/review-collector.js list
node tools/review-collector.js add "Name" "City, AZ" 5 "Review text"

# Check image sizes
node tools/image-optimizer.js

# Pre-deploy checks
bash tools/deploy.sh
```

## Deployment

Code is hosted on GitHub and auto-deploys to Vercel on push to `main`.
