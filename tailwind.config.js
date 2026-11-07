/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        surface: "#0A0B10",
        "surface-card": "#0D0E14",
        "surface-elevated": "#12141F",
        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(59, 130, 246, 0.3)",
        textPrimary: "#f5f5f5",
        textSecondary: "#8f94a6",
        textMuted: "#5a5f73",
        neonBlue: "#3B82F6",
        neonCyan: "#00F0FF",
        neonPurple: "#8B5CF6",
        neonCrimson: "#FF2A54",
      },
      fontFamily: {
        sans: ["'Clash Display'", 'Inter', 'sans-serif'],
        display: ["'Clash Display'", 'sans-serif'],
        mono: ['"Fragment Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-pulse': {
          '0%': { opacity: 0.35 },
          '100%': { opacity: 0.75 },
        }
      }
    },
  },
  plugins: [],
}
