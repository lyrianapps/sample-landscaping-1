// Tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("@relume_io/relume-tailwind")],
};
