import React, { useState } from "react";
import "./navbar.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const getCollapseClass = () => {
    return collapsed ? "navbar-collapse collapsed" : "navbar-collapse";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="App-logo" alt="logo" />
        DBtify
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={getCollapseClass()} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
