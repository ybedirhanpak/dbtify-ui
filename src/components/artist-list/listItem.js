import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const { element } = props;
  const { id, title, likes } = element;
  return (
    <div className="col-md-3 card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/artist/${id}`}
        >
          {title}
        </Link>
      </h5>
      <span className="badge badge-success" style={{ fontSize: "1rem" }}>
        ♥ {likes}
      </span>
    </div>
  );
};

export default ListItem;
