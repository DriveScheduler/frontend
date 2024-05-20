/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'very-large-screen': '1880px'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        "primary-purple": "#B24CC2",
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-purple": {
          DEFAULT: "#B24CC2",
          100: "#F5F8FF",
        },
        "secondary": "#D690E0",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'hero-bg': "url('/assets/images/blob.svg')"
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        "light": {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#B24CC2",
        }
      }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: false, // adds responsive and modifier utility classes
    prefix: "daisy-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
