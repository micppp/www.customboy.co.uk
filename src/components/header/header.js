import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "../navigation/navigation";
import Search from "../search/search";
import "./header.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-150-black.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/">
          <Img className="logo__image" fixed={data.file.childImageSharp.fixed} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
