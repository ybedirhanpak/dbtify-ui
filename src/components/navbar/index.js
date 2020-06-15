import React, { useState } from "react";
import "./navbar.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { userArtist, userListener } = props;

  const [collapsed, setCollapsed] = useState(true);

  const getCollapseClass = () => {
    return collapsed ? "navbar-collapse collapsed" : "navbar-collapse";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand brand-wrapper" to="/">
        <img src={logo} className="app-logo" alt="logo" />
        <span className="app-brand">DBtify</span>
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
        <div className="navbar-nav ml-auto mr-auto">
          {userListener && <SearchBar />}
        </div>
        <ul className="navbar-nav ml-auto">
          {userArtist && (
            <li className="nav-item">
              <Link className="nav-link" to="/artistProfile">
                Artist
              </Link>
            </li>
          )}
          {userListener && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/listener">
                  Listener
                </Link>
              </li>
            </>
          )}
          {!(userListener || userArtist) && (
            <>
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
            </>
          )}
          {(userListener || userArtist) && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    userListener: state.user.listener,
  };
};

export default connect(mapStateToProps)(Navbar);
