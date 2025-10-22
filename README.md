# VPS Synergy Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS, optimized for deployment on Cloudflare Pages.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- 🚀 **Static Export** ready for Cloudflare Pages
- 💎 **TypeScript** for type safety
- 🎯 **SEO Optimized** with metadata
- 🔧 **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vpssynergy-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Cloudflare Pages

### Method 1: Direct Upload

1. Build the project:
```bash
npm run build
```

2. Upload the `out` folder to Cloudflare Pages

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set build output directory: `out`
5. Deploy!

### Method 3: Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy:
```bash
npm run build
wrangler pages deploy out
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── .github/workflows/
│   └── deploy.yml
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
Update the content in each component file located in `src/components/`.

### Styling
Modify styles in `src/app/globals.css` or add custom Tailwind classes.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your projects!
