import React from "react";
import { Link } from "react-router-dom";

const Artist = (props) => {
  const { artist } = props;
  const { id, title, likes } = artist;
  return (
    <div className="card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/artist/${id}`}
        >
          {title}
        </Link>
      </h5>
      <span className="app-btn-orange badge" style={{ fontSize: "1rem" }}>
        ♥ {likes}
      </span>
    </div>
  );
};

export default Artist;
