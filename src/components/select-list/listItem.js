import React from "react";
import "./list-item.css";

const ListItem = (props) => {
  const { element, checked, onCheck } = props;
  return (
    <div className="dropdown-item list-item">
      <div
        className="custom-control custom-checkbox"
        onClick={() => {
          console.log("check");
          onCheck(element.id);
        }}
      >
        <input
          type="checkbox"
          className="custom-control-input list-item-checkbox"
          checked={checked}
          onChange={() => console.log("checked", element.title)}
        />
        <label className="custom-control-label list-item-label">
          {element.title}
        </label>
      </div>
    </div>
  );
};

export default ListItem;
