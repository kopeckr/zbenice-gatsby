module.exports = {
  siteMetadata: {
    title: 'Zbenice',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
};
