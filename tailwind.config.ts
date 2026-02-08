import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fall: {
          "0%": { transform: "translateY(-10vh) translateX(0)" },
          "25%": { transform: "translateY(25vh) translateX(10px)" },
          "50%": { transform: "translateY(50vh) translateX(-5px)" },
          "75%": { transform: "translateY(75vh) translateX(8px)" },
          "100%": { transform: "translateY(110vh) translateX(0)" },
        },
        sway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translateY(-20px) scale(1.1)", opacity: "0.6" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(0deg) translateX(0)" },
          "25%": { transform: "rotate(5deg) translateX(5px)" },
          "75%": { transform: "rotate(-5deg) translateX(-5px)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        fall: "fall linear infinite",
        sway: "sway 3s ease-in-out infinite",
        float: "float ease-in-out infinite",
        wobble: "wobble 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
