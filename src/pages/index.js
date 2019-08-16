import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/index.css";

const IndexPage = () => {
  const { file: hero, articles, firstArticle } = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/hero.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
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
                  ...GatsbyImageSharpFluid
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
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <section className="home-hero">
          <Img fluid={hero.childImageSharp.fluid} />
        </section>
        <section className="home-news">
          <h2 className="home__h2">Latest News</h2>
          <div class="home-news__articles">
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
              {nodes.map(({ frontmatter, excerpt }) => (
                <div className="home-news__article">
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
        </section>
        <section className="home-about">
          <h2 className="home__h2">About Custom Boy</h2>
          <p>Custom Boy aims to provide you with the latest news from the Game Boy modding scene.</p>
          <p>
            Custom Boy also stocks our custom made consoles that you can purchase. Whether you're looking for an original DMG Game Boy, a Game Boy Color or even a Game Boy Advance, we will constantly be updating and refreshing our stock.
          </p>
          <p>Custom Boy provides a build-your-own service. We let you pick the case, screen, buttons and more. From this service, we will assemble your Game Boy and post it to you in our Custom Boy packaging.</p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
