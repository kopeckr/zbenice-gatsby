module.exports = {
  siteMetadata: {
    title: 'Zbenice',
  },
  plugins: [
    { resolve: 'gatsby-plugin-sass', options: { 
      sassOptions:
      {data: `@import "${__dirname}/src/styles/abstracts/_variables.scss";`, }
    } },
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
