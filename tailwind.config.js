module.exports = {
  important: true,
  purge: [],
  // {
    // content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
  // },
  darkMode: false, // or 'media' or 'class'
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
  // future: {
  //   purgeLayersByDefault: true,
  // },
}



  // i18n: {
  //   locales: ["en-US"],
  //   defaultLocale: "en-US",
  // },
