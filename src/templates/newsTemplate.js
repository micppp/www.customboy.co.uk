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
      <div className="container container--960">
        <div className="news-item">
          <h1 className="news-item__h1">{frontmatter.title}</h1>
          <time className="news-item__date" datetime={frontmatter.date}>
            {frontmatter.date}
          </time>
          {frontmatter.image && frontmatter.image.childImageSharp.fluid && (
            <Img
              className="news-item__image"
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          )}
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
            fluid(maxWidth: 1200, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;
