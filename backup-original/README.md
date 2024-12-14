# Modern Portfolio Website

A modern, animated portfolio website built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

### Components Structure
- **Layout**: Organized with client providers and proper metadata
- **Sections**:
  - Hero (with typewriter effect)
  - About
  - Skills
  - Projects
  - Contact
  - Footer

### UI Components
- **TypewriterText**: Custom component with smooth typing animation and persistent cursor
- **Button**: Reusable component with hover effects
- **Toast**: Context-based notification system
- **Input/Textarea**: Form components with proper styling

### Animations & Interactions
- Typewriter effect on hero name with custom cursor
- Smooth scroll animations using Framer Motion
- Social media buttons with brand colors and hover effects
- Staggered animations for skills and projects
- Interactive project cards with hover effects
- Scroll-triggered animations for sections

### Design Improvements
- Proper spacing between sections
- Consistent typography and color scheme
- Responsive design for all screen sizes
- Modern hover animations
- Brand-colored social media buttons
- Gradient text effects
- Smooth transitions

### Technical Features
- Server/Client component separation
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Next.js 13 App Router
- Proper metadata configuration
- Progressive web app ready

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── providers/
│   │   ├── client-providers.tsx
│   │   └── motion-provider.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── TypewriterText.tsx
│   │   └── toast/
│   └── Footer.tsx
├── types/
│   └── index.ts
├── constants/
│   └── data.ts
└── public/
    ├── site.webmanifest
    └── placeholder.svg
```

## Recent Improvements

1. **TypewriterText Component**:
   - Custom implementation with smooth typing animation
   - Configurable typing speed
   - Persistent blinking cursor
   - Proper cursor alignment with text

2. **Hero Section**:
   - Added typewriter effect
   - Improved social button animations
   - Added brand colors to social buttons
   - Better spacing and layout

3. **Section Spacing**:
   - Consistent spacing between sections
   - Better vertical rhythm
   - Improved mobile responsiveness

4. **Footer**:
   - Added comprehensive footer with navigation
   - Social links integration
   - Contact information
   - Copyright notice

## Running the Project

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Future Improvements

- Add dark/light theme toggle
- Implement blog section
- Add project filtering
- Enhance accessibility
- Add more interactive animations
- Implement contact form functionality
- Add image optimization
- Improve SEO
