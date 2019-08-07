import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-box">
        <h3>Information</h3>
        <ul className="no-bullet">
          <li>About</li>
          <li>News</li>
          <li>Tutorials</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>FAQs</h3>
        <ul className="no-bullet">
          <li>Delivery &amp; Returns</li>
          <li>Tracking your order</li>
          <li>Privacy Policy</li>
          <li>Terms &amp; Conditions</li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>Social Media</h3>
        <ul className="no-bullet">
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-box footer-box__newsletter">
        <h3>Join our Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          incidunt consectetur tempore corporis repudiandae voluptatibus iste
          quis suscipit eligendi.
        </p>
        <form>
          <input type="text" placeholder="example@email.com" />
          <button>Join</button>
        </form>
      </div>
      <div className="footer-box footer-box__copyright">
        <p>
          &copy; Custom Boy {new Date().getFullYear()}, steal what you like.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
