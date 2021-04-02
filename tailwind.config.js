module.exports = {
  purge: {
    enable: true,
    content: ['./src/App.js','./src/components/Formulario.js', './src/components/Msg.js', './src/components/NavOptions.js', './src/components/Spinner.js', './src/components/Resultado.js', './src/components/Header.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["-apple-system, BlinkMacSystemFont,'Montserrat', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
