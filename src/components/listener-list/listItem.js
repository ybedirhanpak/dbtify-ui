import React from "react";
import Listener from "../listener";

const ListItem = (props) => {
  return (
    <div className="col-md-3">
      <Listener listener={props.element} />
    </div>
  );
};

export default ListItem;
