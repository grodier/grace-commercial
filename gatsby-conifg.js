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
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Sacramento',
            variants: ['400'],
          },
          {
            family: 'Open Sans',
            variants: ['600'],
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
};
