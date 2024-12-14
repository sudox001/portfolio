/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
          '50%': { transform: 'translateY(20px) rotate(45deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-12deg)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1) blur(10px)' },
          '50%': { filter: 'brightness(1.2) blur(8px)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 7s ease-in-out infinite 1s",
        "float-reverse": "float-reverse 8s ease-in-out infinite 2s",
        "float-slow": "float-slow 9s ease-in-out infinite 3s",
        "glow": "glow 4s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from var(--degree, 0deg), var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/container-queries'),
  ],
}
