import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <SEO title="Page two" />
      {data.nodes.map(({ excerpt, frontmatter }) => {
        return (
          <>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </>
        )
      })}
    </Layout>
  )
}

export default SecondPage
