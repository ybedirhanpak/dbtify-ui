import React, { useState } from "react";
import { shape, string, func } from "prop-types";

const UserForm = ({ options }) => {
  const { header, value1, value2, button } = options;

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const onButtonClick = (event) => {
    event.preventDefault();
    button.onClick(input1, input2);
  };

  return (
    <div className="user-form">
      <form>
        <h3>{header}</h3>
        <div className="form-group">
          <label>{value1.header}</label>
          <input
            type="text"
            className="form-control"
            placeholder={"Enter " + value1.name}
            onChange={(event) => setInput1(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>{value2.header}</label>
          <input
            type="text"
            className="form-control"
            placeholder={"Enter " + value2.name}
            onChange={(event) => setInput2(event.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={(event) => onButtonClick(event)}
        >
          {button.name}
        </button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  options: shape({
    header: string,
    value1: shape({
      name: string,
      header: string,
    }),
    value2: shape({
      name: string,
      header: string,
    }),
    button: shape({
      name: string,
      onClick: func,
    }),
  }),
};

export default UserForm;
