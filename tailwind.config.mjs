/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        tablet: "376px",
        desktop: "769px",
      },
      textColor: {
        heading: "hsl(var(--clr-heading) / <alpha-value>)",
        "heading-inverse": "hsl(var(--clr-heading-inverse) / <alpha-value>)",
        "heading-decoration":
          "hsl(var(--clr-heading-decoration) / <alpha-value>)",
        body: "hsl(var(--clr-body) / <alpha-value>)",
        "body-inverse": "hsl(var(--clr-body-inverse) / <alpha-value>)",
        nav: "hsl(var(--clr-nav-links) / <alpha-value>)",
      },
      backgroundColor: {
        surface: "hsl(var(--clr-surface) / <alpha-value>)",
        container: "hsl(var(--clr-container) / <alpha-value>)",
      },
      fontSize: {
        "heading-xl": "var(--fs-900)",
        "heading-lg": "var(--fs-700)",
        "heading-md": "var(--fs-600)",
        "heading-sm": "var(--fs-500)",
        body: "var(--fs-400)",
      },
    },
  },
  plugins: [],
};
