import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  const { markdownRemark: data } = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { glob: "**/content/about.md" }) {
        frontmatter {
          title
        }
        html
      }
    }
  `);

  const { frontmatter, html } = data;

  return (
    <Layout>
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
      </div>
    </Layout>
  );
};

export default About;
