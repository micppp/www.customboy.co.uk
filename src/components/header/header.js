import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Navigation from "../navigation/navigation";
import "./header.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-150-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 40, maxHeight: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="container">
        <Link className="logo" to="/">
          <Img className="logo__image" fluid={data.file.childImageSharp.fluid} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
