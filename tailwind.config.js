/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.html,js,vue}"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#4338ca",
        "bookmark-blue": "#1e40af",
        "bookmark-white": "#f7f7f7",
        "bookmark-grey": "#4b5563",
        "bookmark-red": "#dc2626",

      }
    },
    fontFamily: {
      "Poppins": ['Poppins, sans-serif']
    },
    container: {
      padding: "1rem",
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      },
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
