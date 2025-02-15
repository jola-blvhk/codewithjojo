import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-100": "#DB539A",
        "pink-200": "#FFA1D1",
        "purple-100": "#2B2537",
        "purple-200": "#4A3A48",
        "gray-100": "#B8B7B7",
       
      },
    },
  },
  plugins: [],
} satisfies Config;
