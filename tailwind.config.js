module.exports = {
  important: true,
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
      maxWidth: {
        'button': '150px',
        '90': '90%',
      },
      minHeight: {
        '12': '3rem',
       }
    },
    
  },
  variants: {
    extend: {
      borderWidth: ['first'],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
}
