/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    // themes: [
    //   {
    //     mytheme: {
    //       primary: "#dc2626",
    //       secondary: "#1c1917",
    //       accent: "#fbbf24",
    //       neutral: "#423F00",
    //       "base-100": "#FFEE00",
    //       info: "#3ABFF8",
    //       success: "#36D399",
    //       warning: "#7f1d1d",
    //       error: "#F87272",
    //     },
    //   },
    // ],

    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
