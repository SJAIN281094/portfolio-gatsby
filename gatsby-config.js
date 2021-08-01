module.exports = {
  siteMetadata: {
    title: 'Shubham Jain',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-theme-material-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-backgrounds`,
        path: `${__dirname}/src/images/projects`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
  ],
};
