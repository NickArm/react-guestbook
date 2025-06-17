/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "fa-house",
    "fa-house-circle-check",
    "fa-wifi",
    "fa-couch",
    "fa-location-dot",
    "fa-bus",
    "fa-circle-info",
    "fa-map",
    "fa-utensils",
    "fa-book",
    "fa-circle-question",
    "fa-triangle-exclamation",
    "fa-suitcase-rolling",
    "fa-star",
    "fa-phone",
    'text-primary',
    'bg-primary',
    'border-primary',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [],
};
