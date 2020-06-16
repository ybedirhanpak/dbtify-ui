import React from "react";
import Artist from "../artist";

const ListItem = (props) => {
  return (
    <div class="col-md-3">
      <Artist artist={props.element} />
    </div>
  );
};

export default ListItem;
