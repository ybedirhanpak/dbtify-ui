import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ListItem = (props) => {
  const { element, userListener } = props;
  const { id, title, likes, album, genre, albumid } = element;

  const getButtonClass = () => {
    return getAlbumLiked() ? "app-btn badge" : "app-btn-gray badge";
  };

  const getAlbumLiked = () => {
    const filteredList = userListener.likedAlbums.filter(
      (album) => album.id === id
    );
    return filteredList.length > 0;
  };

  return (
    <div className="col-md-3 card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>{title}</h5>

      <button
        className={getButtonClass()}
        style={{ fontSize: "1rem" }}
        disabled={getAlbumLiked()}
      >
        ♥ {likes}
      </button>
      <br></br>
      <Link
        className="badge badge-light"
        to={`/album/${albumid}`}
        style={{ fontSize: "1rem" }}
      >
        Album: {album}
      </Link>
      <br></br>
      <Link
        className="badge badge-light"
        to={`/genre/${genre}`}
        style={{ fontSize: "1rem" }}
      >
        Genre: {genre}
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
  };
};

export default connect(mapStateToProps, null)(ListItem);
