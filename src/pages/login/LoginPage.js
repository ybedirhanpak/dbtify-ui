import React from "react";
import LoginForm from "../../components/login-form";
import "./login.css";
const LoginPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LoginForm></LoginForm>
          </div>
          <div className="col-md-6">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
