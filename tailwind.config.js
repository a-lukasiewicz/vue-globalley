module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
