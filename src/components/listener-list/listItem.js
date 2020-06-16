import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const { element } = props;
  const { id, username, email } = element;
  return (
    <div className="col-md-3 card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/listener/${id}`}
        >
          {username}
        </Link>
      </h5>
      <span className="badge badge-secondary" style={{ fontSize: "1rem" }}>
        {email}
      </span>
    </div>
  );
};

export default ListItem;
