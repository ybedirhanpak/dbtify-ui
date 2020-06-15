import React from "react";

const RegisterForm = (props) => {
  return (
    <div className="user-form">
      <form>
        <h3>Register As Listener</h3>
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
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
