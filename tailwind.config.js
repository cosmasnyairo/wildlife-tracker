module.exports = {
  purge: { content: ["./src/**/*.js"] },
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'base': '20px', 
      },
      colors: {
        primary: "#2ECC71",
        form: "#F4F6F9",
        button: "#3498DB",
        navbar: "#EAEAEA",
        highlight: "#F39C12"

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
