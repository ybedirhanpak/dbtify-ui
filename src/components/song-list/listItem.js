import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  requestLikeSong,
  requestFetchCurrentListener,
} from "../../state/actions/listenerActions";
import { useAlert } from "react-alert";

const ListItem = (props) => {
  const { element, userListener, likeSong, fetchCurrentListener } = props;
  const { id, title, likes, album, genre, albumid } = element;
  const alert = useAlert();

  const getButtonClass = () => {
    return getSongLiked() ? "app-btn badge" : "app-btn-gray badge";
  };

  const getSongLiked = () => {
    if (!userListener) {
      return false;
    }
    const filteredList = userListener.likedSongs.filter(
      (album) => album.id === id
    );
    return filteredList.length > 0;
  };

  const getButtonDisabled = () => {
    return !userListener || getSongLiked();
  };

  const onButtonClick = () => {
    const body = {
      listenerID: userListener.id,
      songID: id,
    };
    likeSong(body, alert).then(() => {
      fetchCurrentListener(userListener.id, alert);
    });
  };

  return (
    <div className="col-md-3 card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>{title}</h5>

      <button
        className={getButtonClass()}
        style={{ fontSize: "1rem" }}
        disabled={getButtonDisabled()}
        onClick={onButtonClick}
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

const mapDispatchToProps = {
  likeSong: requestLikeSong,
  fetchCurrentListener: requestFetchCurrentListener,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
