import React from "react";

const LoginForm = (props) => {
  return (
    <div className="user-form">
      <form>
        <h3>Login As Listener</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter e-mail"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
