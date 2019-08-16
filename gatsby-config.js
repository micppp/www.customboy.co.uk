module.exports = {
  siteMetadata: {
    title: `Custom Boy`,
    description: `Game Boy restorations, modifications and news.`,
    author: `@customboyuk`,
    siteUrl: `https://www.customboy.co.uk`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site-images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news-pages`,
        path: `${__dirname}/news`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product-pages`,
        path: `${__dirname}/products`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-pages`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorial-pages`,
        path: `${__dirname}/tutorials`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/public`
            }
          },
          `gatsby-remark-smartypants`
        ]
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
        background_color: `#F5F5F5`,
        theme_color: `#9BBC10`,
        display: `minimal-ui`,
        icon: "src/images/logo.jpg"
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`400`, `600`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145832451-1"
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
};
