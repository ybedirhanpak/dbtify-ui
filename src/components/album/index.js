import React from "react";
import { Link } from "react-router-dom";

const Album = (props) => {
  const { album } = props;
  const { id, title, likes, genre, artist, artistid } = album;
  return (
    <div className="card-fluid-sm">
      <h4>Album</h4>
      <h5 style={{ fontWeight: "bold" }}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/album/${id}`}
        >
          {title}
        </Link>
      </h5>

      <span className="badge badge-success" style={{ fontSize: "1rem" }}>
        ♥ {likes}
      </span>
      <br></br>
      <Link
        className="badge badge-light"
        to={`/genre/${genre}`}
        style={{ fontSize: "1rem" }}
      >
        Genre: {genre}
      </Link>
      <br></br>
      <Link
        className="badge badge-light"
        to={`/artist/${artistid}`}
        style={{ fontSize: "1rem" }}
      >
        Artist: {artist}
      </Link>
    </div>
  );
};

export default Album;
