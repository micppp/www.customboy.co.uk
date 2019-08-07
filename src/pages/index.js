import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            date(formatString: "DD-MMM-YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        {data.nodes.map(({ excerpt, frontmatter }) => {
          return (
            <>
              <h2>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;
