module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js, ts}"
  ],
  theme: {
    extend: {
      height: {
        '600': '600px',
        '700': '700px'
      },
      width: {
        '700': '700px',
      },
      maxHeight: {
        '700': '700px',
        '600': '600px'
      },
      minHeight: {
        '700': '700px',
        '600': '600px',
      },
      maxWidth: {
        '700': '700px',
        '600': '600px'
      },
      minWidth  : {
        '700': '700px',
        '600': '600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
