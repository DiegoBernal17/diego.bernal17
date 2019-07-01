import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = props => (
  <header className="Navbar">
    {/* <button
      className="float-right btn btn-dark btn-sm"
      onClick={props.changeDarkMode}
    >
      DarkMode
    </button> */}
    <div className="Navbar__link">
      <Link to="/" className="Navbar__link">
        <span className="mdi mdi-account-circle"> </span>
        Home
      </Link>
      <Link to="portfolio" className="Navbar__link">
        <span className="mdi mdi-polymer"> </span>
        Porfolio
      </Link>
      <Link to="education" className="Navbar__link">
        <span className="mdi mdi-book-open-page-variant"> </span>
        Education
      </Link>
      <a href="/blog/" className="Navbar__link">
        <span className="mdi mdi-newspaper"> </span>
        Blog
      </a>
    </div>
  </header>
);

export default Navbar;
