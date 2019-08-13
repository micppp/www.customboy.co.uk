import React from "react";
import { Link } from "gatsby";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-box">
        <h3 className="footer-box__h3">Information</h3>
        <ul className="no-bullet footer-box__list">
          <li className="footer-box__list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="footer-box__list-item">
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h3 className="footer-box__h3">FAQs</h3>
        <ul className="no-bullet footer-box__list">
          <li className="footer-box__list-item">
            <Link to="delivery-and-returns">Delivery &amp; Returns</Link>
          </li>
          <li className="footer-box__list-item">Privacy Policy</li>
          <li className="footer-box__list-item">Terms &amp; Conditions</li>
        </ul>
      </div>
      <div className="footer-box">
        <h3 className="footer-box__h3">Social Media</h3>
        <ul className="no-bullet footer-box__list">
          <li className="footer-box__list-item">
            <a
              href="https://twitter.com/customboyuk"
              rel="noopener nofollow"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li className="footer-box__list-item">
            <a
              href="https://www.instagram.com/customboyuk/"
              rel="noopener nofollow"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-box footer-box__newsletter">
        <h3 className="footer-box__h3">Join our Newsletter</h3>
        <p className="footer-box__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          incidunt consectetur tempore corporis repudiandae voluptatibus iste
          quis suscipit eligendi.
        </p>
        <form className="footer-box__form">
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
