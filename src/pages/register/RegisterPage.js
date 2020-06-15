import React from "react";
import RegisterForm from "../../components/register-form";
import ArtistRegisterForm from "../../containers/artistRegisterForm";

const RegisterPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <RegisterForm></RegisterForm>
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
