module.exports = {
  siteMetadata: {
    title: 'Zámek Zbenice',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
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
