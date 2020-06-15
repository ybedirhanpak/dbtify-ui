import React, { useState } from "react";
import { shape, string, func } from "prop-types";
import SelectList from "../select-list";

const UserForm = ({ options }) => {
  const {
    borderClass,
    backgroundClass,
    header,
    value1,
    value2,
    button,
    selectList1,
    selectList2,
  } = options;

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [inputList1, setInputList1] = useState([]);
  const [inputList2, setInputList2] = useState([]);

  const onButtonClick = (event) => {
    event.preventDefault();
    button.onClick(input1, input2, inputList1, inputList2);
  };

  return (
    <div className={"card " + borderClass}>
      <form>
        <h3>{header}</h3>
        {value1 && (
          <div className="form-group">
            <label>{value1.header}</label>
            <input
              type="text"
              className={"form-control " + borderClass}
              placeholder={"Enter " + value1.name}
              onChange={(event) => setInput1(event.target.value)}
            />
          </div>
        )}

        {value2 && (
          <div className="form-group">
            <label>{value2.header}</label>
            <input
              type="text"
              className={"form-control " + borderClass}
              placeholder={"Enter " + value2.name}
              onChange={(event) => setInput2(event.target.value)}
            />
          </div>
        )}

        {selectList1 && (
          <SelectList
            options={selectList1}
            onListChange={(list) => setInputList1(list)}
          />
        )}
        {selectList2 && (
          <SelectList
            options={selectList2}
            onListChange={(list) => setInputList2(list)}
          />
        )}
        <button
          className={"btn btn-primary " + borderClass + " " + backgroundClass}
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
    colorLight: string,
    colorDark: string,
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
