/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#101010",
        "surface-hover": "#171717",
        border: "#202020",
        "border-light": "#2e2e2e",
        textPrimary: "#f5f5f5",
        textSecondary: "#8f8f8f",
        textMuted: "#595959",
      },
      fontFamily: {
        sans: ["'Clash Display'", 'Inter', 'sans-serif'],
        display: ["'Clash Display'", 'sans-serif'],
        mono: ['"Fragment Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
