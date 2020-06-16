import React from "react";
import { connect } from "react-redux";
import "./home-page.css";
import { Redirect, Link } from "react-router-dom";

const HomePage = (props) => {
  const { userListener, userArtist } = props;
  if (userListener) {
    return <Redirect to="/listener" />;
  }

  if (userArtist) {
    return <Redirect to="/artistProfile" />;
  }

  return (
    <div className="page home-page">
      <h1>Welcome to DBtify !</h1>
      <div className="card-fluid-sm">
        <p>Please Sign in !</p>
        <Link className="btn app-btn" to="/login">
          Login
        </Link>
      </div>
      <div className="card-fluid-sm">
        <p>New to DBtify ?</p>
        <Link className="btn app-btn" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    userArtist: state.user.artist,
  };
};

export default connect(mapStateToProps, null)(HomePage);
