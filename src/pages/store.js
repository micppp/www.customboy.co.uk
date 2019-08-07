import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Store = () => {
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "product" } } }
      ) {
        nodes {
          frontmatter {
            images {
              mainimage
            }
            price
            sale
            title
            path
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Store" />
      <div className="container">
        {data.nodes.map(({ frontmatter }) => {
          return (
            <div className="product" key={frontmatter.title}>
              <h2>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.price}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Store;
