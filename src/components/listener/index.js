import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const { listener } = props;
  const { id, username, email } = listener;
  return (
    <div className="card-fluid-sm">
      <h4>Listener</h4>
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
