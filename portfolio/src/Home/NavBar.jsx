import React from "react";
// import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar--section" id="navBar">
      <div className="navbar--container">
        <div className="navbar--pic">
          <img src="./logo192.png" alt="Logo" />
        </div>
        <div className="navbar--links">
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
          </ul>
        </div>
        <div className="navbar--button">
          <button className="btn btn--primary">Contact Me</button>
        </div>
      </div>
    </nav>
  );
}
