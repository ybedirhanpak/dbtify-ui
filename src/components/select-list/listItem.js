import React from "react";

const ListItem = (props) => {
  const { element, checked, onCheck } = props;
  return (
    <div className="dropdown-item">
      <div
        className="custom-control custom-checkbox"
        onClick={() => {
          console.log("check");
          onCheck(element.id);
        }}
      >
        <input
          type="checkbox"
          className="custom-control-input"
          checked={checked}
          onChange={() => console.log("checked", element.title)}
        />
        <label className="custom-control-label">{element.title}</label>
      </div>
    </div>
  );
};

export default ListItem;
