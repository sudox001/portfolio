# Portfolio Website

A modern portfolio website built with Next.js 14, React 18, and Tailwind CSS.

## Recent Updates (2024)

### Modern Features Added
- Container queries for improved responsive design
- Enhanced animations with Framer Motion
- Improved accessibility
- Modern gradient effects
- Performance optimizations
- Better SEO configuration
- Suspense and error boundaries
- Reduced motion support

### Technical Improvements
- Container query support via @tailwindcss/container-queries
- Modern animation patterns
- Enhanced TypeScript patterns
- Improved component architecture
- Better state management
- Performance optimizations

## Rolling Back Changes

If you need to revert to the previous version:

1. The original code is backed up in the `backup-original` directory
2. To restore:
```bash
# Remove current files
rm -rf app components lib constants types *.{js,ts,json}

# Restore from backup
cp -r backup-original/* .

# Reinstall dependencies
npm install
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features

- Modern, responsive design with container queries
- Smooth animations with Framer Motion
- Accessible components
- SEO optimized
- Performance focused
- TypeScript support
- Modern development practices

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI

## Project Structure

```
├── app/                  # Next.js 14 app directory
├── components/          
│   ├── providers/       # React providers
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── constants/           # Constants and configuration
├── lib/                 # Utility functions
└── types/              # TypeScript types
