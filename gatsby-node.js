const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const newsArticleTemplate = path.resolve(`src/templates/newsTemplate.js`);
  const productTemplate = path.resolve(`src/templates/productTemplate.js`);

  return graphql(`
    {
      news: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/news/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      products: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/products/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.news.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: newsArticleTemplate,
        context: {} // additional data can be passed via context
      });
    });

    result.data.products.length > 0
      ? result.data.products.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: productTemplate,
            context: {} // additional data can be passed via context
          });
        })
      : "";
  });
};
