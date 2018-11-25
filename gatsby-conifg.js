module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
