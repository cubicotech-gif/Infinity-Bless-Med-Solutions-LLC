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
          DEFAULT: "#60a33a",
          50: "#f2f8ee",
          100: "#e0f0d8",
          200: "#c4e2b4",
          300: "#9dcf86",
          400: "#75b85d",
          500: "#60a33a",
          600: "#4a842b",
          700: "#3a6722",
          800: "#31521e",
          900: "#2a451d",
          950: "#13250b",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#8b7355",
          50: "#f7f5f3",
          100: "#ebe6e0",
          200: "#d8cdc2",
          300: "#c0ad9c",
          400: "#a8907a",
          500: "#8b7355",
          600: "#7a6349",
          700: "#654f3e",
          800: "#564337",
          900: "#4a3a30",
          950: "#271d18",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#d97706",
          50: "#fef9ec",
          100: "#fdefca",
          200: "#fbdd91",
          300: "#f8c558",
          400: "#f5ab2e",
          500: "#ef8d14",
          600: "#d97706",
          700: "#b15309",
          800: "#90400e",
          900: "#76360f",
          950: "#441b03",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
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
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
