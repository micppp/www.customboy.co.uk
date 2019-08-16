import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";

const IndexPage = () => {
  const { file: hero, allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/hero.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/news/*.md" } }
        sort: { order: DESC, fields: frontmatter___date }
        limit: 5
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "DD-MMM-YYYY")
            path
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  `);

  const { nodes } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <section className="home-hero">
          <Img fluid={hero.childImageSharp.fluid} />
        </section>
        <section className="home-news">
          <h2 className="home__h2">Latest News</h2>
          <div class="home-news__articles">
            {nodes.map(({ frontmatter, excerpt }) => (
              <div>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
                <time dateTime={frontmatter.date}>{frontmatter.date}</time>
                <p>{excerpt}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="home-about">
          <h2 className="home__h2">About Custom Boy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
