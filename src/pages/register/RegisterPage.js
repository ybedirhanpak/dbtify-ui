import React from "react";
import ArtistRegisterForm from "../../containers/artistRegisterForm";
import ListenerRegisterForm from "../../containers/listenerRegisterForm";

const RegisterPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ListenerRegisterForm />
          </div>
          <div className="col-md-6">
            <ArtistRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
