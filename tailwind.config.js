/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-d9": "#D99904",
        "color-dark1": "#151515",
        "color-dark2": "#444444",
        "color-dark3": "#737373",
        "color-dark4": "#A1A1A1",
        "color-dark5": "#D0D0D0",
        "color-dark6": "#E8E8E8",
        "color-dark7": "#F3F3F3",
        "color-bb": "#BB8506",
        "color-d1": "#D1A054",
        "color-d1-70": "rgba(209, 160, 84, 0.7)",
        "color-1f": "#1F2937",
        "color-11": "#111827",
        "color-15": "#151515",
        "color-cd": "rgba(205, 144, 3, 1)",
        "color-nav": "rgba(21, 21, 21, 0.5)",
        "color-cover": "rgba(21, 21, 21, 0.6)",
        "color-nav": "rgba(21, 21, 21, 0.5)",
        "color-b9": "#B91C1C",
      },
    },
  },
  plugins: [require("daisyui")],
};
