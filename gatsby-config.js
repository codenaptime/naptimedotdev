/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'NAPtime.dev',
    siteUrl: 'https://naptime.dev',
    description: 'Rest for your weary site.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src/pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resume',
        path: `${__dirname}/src/resume/`,
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          resume: require.resolve('./src/templates/resumeTemplate.js'),
          default: require.resolve('./src/templates/mdxTemplate.js'),
        }
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
