/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        arcadeRed: "#FF0000",
        arcadeYellow: "#FFFF00",
        arcadePurple: "#800080",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { visibility: "hidden" },
          "50%": { visibility: "visible" },
        },
      },
    },
  },
  plugins: [],
};
