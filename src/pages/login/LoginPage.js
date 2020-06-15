import React from "react";
import "./login.css";
import ListenerLoginForm from "../../containers/listenerLoginForm";
import ArtistLoginForm from "../../containers/artistLoginForm";

const LoginPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ListenerLoginForm />
          </div>
          <div className="col-md-6">
            <ArtistLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
