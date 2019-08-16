import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/news.css";

const News = () => {
  const { file, allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/logo-150-black/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/news/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date(formatString: "DD-MMM-YYYY")
            path
            image {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="News" />
      <div className="container container--960 news-articles">
        {data.nodes.map(({ excerpt, frontmatter }) => {
          return (
            <div key={frontmatter.path} className="news-article">
              {frontmatter.image && frontmatter.image.childImageSharp.fixed ? (
                <Img fixed={frontmatter.image.childImageSharp.fixed} />
              ) : (
                <Img className="fallback-img" fixed={file.childImageSharp.fixed} />
              )}
              <div>
                <h2 className="news-article__h2">
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h2>
                <time
                  className="news-article__date"
                  dateTime={frontmatter.date}
                >
                  {frontmatter.date}
                </time>
                <p className="news-article__p">{excerpt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default News;
