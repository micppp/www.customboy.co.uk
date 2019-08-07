module.exports = {
  siteMetadata: {
    title: `Custom Boy - Game Boy restorations, Game Boy modifications and news`,
    description: `Game Boy and Gameboy Advance restorations, modifications and news.`,
    author: `@customboyuk`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `customboy`,
        short_name: `customboy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news-page`,
        path: `${__dirname}/news`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news-page`,
        path: `${__dirname}/content`
      }
    },
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
