import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const News = () => {
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
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
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="News" />
      <div className="container">
        {data.nodes.map(({ excerpt, frontmatter }) => {
          return (
            <div className="article">
              <h2>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default News;
