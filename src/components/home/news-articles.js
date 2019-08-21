import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default function NewsArticles() {
  const { articles, firstArticle } = useStaticQuery(graphql`
    query {
      firstArticle: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/news/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 1
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD-MMM-YYYY")
            path
            image {
              childImageSharp {
                fluid(maxWidth: 784) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 500)
        }
      }

      articles: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/news/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 4
        skip: 1
      ) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "DD-MMM-YYYY")
            path
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  `);

  const { nodes } = articles;
  const article = firstArticle.nodes[0];

  return (
    <section className="home-news">
      <div className="container">
        <h2 className="home__h2">Latest News</h2>
        <div className="home-news__articles">
          <div className="home-news__article">
            {article.frontmatter.image &&
              article.frontmatter.image.childImageSharp.fluid && (
                <Link to={article.frontmatter.path}>
                  <Img
                    fluid={article.frontmatter.image.childImageSharp.fluid}
                  />
                </Link>
              )}
            <h3 className="home-news__h3">
              <Link to={article.frontmatter.path}>
                {article.frontmatter.title}
              </Link>
            </h3>
            <time
              className="home-news__date"
              dateTime={article.frontmatter.date}
            >
              {article.frontmatter.date}
            </time>
            <p className="home-news__p">{article.excerpt}</p>
          </div>
          <div>
            {nodes.map(({ id, frontmatter, excerpt }) => (
              <div className="home-news__article" key={id}>
                <h3 className="home-news__h3">
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h3>
                <time className="home-news__date" dateTime={frontmatter.date}>
                  {frontmatter.date}
                </time>
                <p className="home-news__p">{excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
