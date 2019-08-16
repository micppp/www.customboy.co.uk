import React from "react";

export default function Newsletter() {
  return (
    <div className="footer-box footer-box__newsletter">
      <h3 className="footer-box__h3">Join our Newsletter</h3>
      <p className="footer-box__p">
        Sign up for our newsletter below. We'll keep you updated with any new
        products and news from Custom Boy.
      </p>
      <form className="footer-box__form">
        <input
          className="footer-box__form-input"
          type="text"
          placeholder="example@email.com"
        />
        <button className="footer-box__form-button">Join</button>
      </form>
    </div>
  )
};
