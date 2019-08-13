import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <img src={frontmatter.image} alt={frontmatter.title} />
          <time datetime={frontmatter.date}>{frontmatter.date}</time>
          <div
            className="blog-post-content"
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
        image
      }
    }
  }
`;
