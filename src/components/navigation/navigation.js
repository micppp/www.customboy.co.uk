import React, { useState } from "react";
import { Link } from "gatsby";
import "./navigation.css";

export default function Navigation() {
  const [toggle, setToggle] = useState("closed");

  function toggleMenu() {
    setToggle(toggle === "closed" ? "open" : "closed");
  }

  return (
    <nav className="navigation">
      <svg
        className="navigation-toggle"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        role="button"
        onClick={() => toggleMenu()}
      >
        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
      </svg>
      <ul className={`no-bullet navigation-list navigation-list--${toggle}`}>
        <li className="navigation-list__item">
          <Link to="/news">News</Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/">Tutorials</Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/store">Store</Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/">About</Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
