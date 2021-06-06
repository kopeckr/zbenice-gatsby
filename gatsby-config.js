module.exports = {
  siteMetadata: {
    title: 'Zbenice',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Open-Sans`,
    //       `source sans pro\:400,400i,700` 
    //       `EB Garamond`,
    //       `source sans pro\:400,700` 
    //       `Pinyon Script`,
    //       `source sans pro\:400i` 
    //     ],
    //     display: 'swap'
    //   }
    // },
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
