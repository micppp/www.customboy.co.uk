import React from "react";
import PropTypes from "prop-types";
import Header from "./header/header";
import Footer from "./footer/footer";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./utilities.css";

const Layout = ({ children }) =>
  <>
    <Header />
      <section className="content">{children}</section>
    <Footer />
  </>

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
