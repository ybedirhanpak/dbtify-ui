import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  requestLikeAlbum,
  requestFetchCurrentListener,
} from "../../state/actions/listenerActions";

const ListItem = (props) => {
  const { album, userListener, likeAlbum, fetchCurrentListener } = props;
  const { id, title, likes, genre, artist, artistid } = album;

  const getButtonClass = () => {
    return getAlbumLiked() ? "app-btn badge" : "app-btn-gray badge";
  };

  const getAlbumLiked = () => {
    if (!userListener) {
      return false;
    }
    const filteredList = userListener.likedAlbums.filter(
      (album) => album.id === id
    );
    return filteredList.length > 0;
  };

  const getButtonDisabled = () => {
    return !userListener || getAlbumLiked();
  };

  const onButtonClick = () => {
    const body = {
      listenerID: userListener.id,
      albumID: id,
    };
    likeAlbum(body).then(() => {
      fetchCurrentListener(userListener.id);
    });
  };

  return (
    <div className="card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/album/${id}`}
        >
          {title}
        </Link>
      </h5>

      <button
        className={getButtonClass()}
        style={{ fontSize: "1rem" }}
        disabled={getButtonDisabled()}
        onClick={() => onButtonClick()}
      >
        ♥ {likes}
      </button>
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

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
  };
};

const mapDispatchToProps = {
  likeAlbum: requestLikeAlbum,
  fetchCurrentListener: requestFetchCurrentListener,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
