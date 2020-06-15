import React from "react";
import RegisterForm from "../../components/register-form";

const RegisterPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <RegisterForm></RegisterForm>
          </div>
          <div className="col-md-6">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
