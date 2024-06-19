import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/react.jpeg";

const Navbar = () => {
  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="React" />
        </Link>
      </div>
      <ul className="navigationWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personnel">Personnel</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/paths">Paths</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
