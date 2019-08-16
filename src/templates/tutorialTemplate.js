import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tools from "../components/tools";
import "../css/tutorial.css";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container container--960">
        <div className="tutorial">
          <h1 className="tutorial__h1">{frontmatter.title}</h1>
          <time className="tutorial__date" dateTime={frontmatter.date}>
            {frontmatter.date}
          </time>
          <div className="tutorial__grid">
            <div className="tutorial__tools">
              <h2>Tools</h2>
              {frontmatter.tools.map(tool => (
                <Tools tool={tool} />
              ))}
            </div>
            <div
              className="tutorial__content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
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
        tools
      }
    }
  }
`;
