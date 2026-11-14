/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        surface: "#121216",
        "surface-card": "#18181f",
        "surface-elevated": "#20202a",
        harronPurple: "#5c59e8",
        harronOrange: "#ff5500",
        harronTab: "#2a2a2e",
        harronGreen: "#61c554",
        border: "rgba(255, 255, 255, 0.1)",
        "border-glow": "rgba(92, 89, 232, 0.35)",
        textPrimary: "#f5f5f7",
        textSecondary: "#9e9ea7",
        textMuted: "#666672",
        neonBlue: "#3B82F6",
        neonCyan: "#00F0FF",
        neonPurple: "#8B5CF6",
        neonCrimson: "#FF2A54",
      },
      fontFamily: {
        sans: ["'Satoshi'", "'Inter'", '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ["'Satoshi'", "'Inter'", 'sans-serif'],
        display: ["'Clash Grotesk Variable'", "'Clash Grotesk'", "'Clash Display'", 'sans-serif'],
        grotesk: ["'Clash Grotesk Variable'", "'Clash Grotesk'", 'sans-serif'],
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
