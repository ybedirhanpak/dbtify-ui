import React from "react";
import Album from "../album";

const ListItem = (props) => {
  return (
    <div className="col-md-3">
      <Album album={props.element} />
    </div>
  );
};

export default ListItem;
