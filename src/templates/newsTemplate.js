import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container">
        <div className="news-item">
          <h1>{frontmatter.title}</h1>
          <Img
            fluid={frontmatter.image.childImageSharp.fluid}
          />
          <time datetime={frontmatter.date}>{frontmatter.date}</time>
          <div
            className="news-item__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD-MMM-YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              srcWebp
            }
          }
        }
      }
    }
  }
`;
