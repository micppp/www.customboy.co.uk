import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <h2>{frontmatter.price}</h2>
          {frontmatter.images && frontmatter.images.mainimage && (
            <img src={frontmatter.images.mainimage} alt={frontmatter.title} />
          )}
          <p>{frontmatter.content}</p>
          <ul>
            {frontmatter.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {frontmatter.images && frontmatter.images.secondaryimage && (
            <img src={frontmatter.images.secondaryimage} alt="" />
          )}
        </div>
      </div>
    </Layout>
  );
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "DD-MMM-YYYY")
//         path
//         title
//         content
//         list
//         images {
//           mainimage
//           secondaryimage
//         }
//       }
//     }
//   }
// `;
