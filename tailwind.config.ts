import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // add color variable
    extend: {
      colors: {
        "tc-primary": "#316ce6",
      },
    },
  },
  plugins: [],
} as Config;
