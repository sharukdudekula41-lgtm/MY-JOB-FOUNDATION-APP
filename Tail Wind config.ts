import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
        background: "#F8FAFC",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
} satisfies Config;