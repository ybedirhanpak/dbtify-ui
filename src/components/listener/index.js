import React from "react";
import { Link } from "react-router-dom";

const Listener = (props) => {
  const { listener } = props;
  const { id, username, email } = listener;
  return (
    <div className="card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/listener/${id}`}
        >
          {username}
        </Link>
      </h5>
      <span className="app-btn-pink badge" style={{ fontSize: "1rem" }}>
        {email}
      </span>
    </div>
  );
};

export default Listener;
