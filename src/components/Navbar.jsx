import React, { useState } from "react";
import logo from "../assets/logo-2.svg";
import hamburger from "../assets/hamburger.png";
import cross from "../assets/cross.png";
import cross2 from "../assets/cross2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav>
        <div className="hamburger" onClick={() => setToggle(!toggle)}>
          <img
            src={toggle ? cross2 : hamburger}
            alt="hamburger"
            className={`hamburger ${toggle ? "cross" : ""}`}
          />
        </div>
        <div className="logo_container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="navlinks_container">
          <ul className="nav_links">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              <Link to="/contact">Contact</Link>{" "}
            </li>
            <li>
              <Link to="/services">Services</Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <div className={`side_bar ${toggle ? "show" : ""}`}>
        <ul className="side_bar_links">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
          </li>
          <li>
            <Link to="/services">Services</Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

// <li> <Link to="/">Home</Link> </li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/services">Services</Link></li>
