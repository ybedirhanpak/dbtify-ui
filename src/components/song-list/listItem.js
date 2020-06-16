import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  requestLikeSong,
  requestFetchCurrentListener,
} from "../../state/actions/listenerActions";
import {
  requestDeleteSong,
  requestFetchArtist,
} from "../../state/actions/artistActions";
import { useAlert } from "react-alert";

const ListItem = (props) => {
  const {
    element,
    userListener,
    likeSong,
    fetchCurrentListener,
    userArtist,
    deleteSong,
    fetchArtist,
  } = props;
  const { id, title, likes, album, genre, albumid } = element;
  const alert = useAlert();

  const getLikeButtonClass = () => {
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

  const getLikeButtonDisabled = () => {
    return !userListener || getSongLiked();
  };

  const onLikeButtonClick = () => {
    const body = {
      listenerID: userListener.id,
      songID: id,
    };
    likeSong(body, alert).then(() => {
      fetchCurrentListener(userListener.id, alert);
    });
  };

  const artistCanUpdateDelete = () => {
    const filteredList = userArtist
      ? userArtist.songs.filter((song) => song.id === id)
      : [];
    return userArtist && filteredList.length > 0;
  };

  const onDeleteSong = () => {
    if (artistCanUpdateDelete()) {
      deleteSong(id, alert).then(() => {
        fetchArtist(userArtist.id);
      });
    } else {
      alert.error("You cannot delete this album.");
    }
  };

  return (
    <div className="col-md-3 card-fluid-sm">
      <h5 style={{ fontWeight: "bold" }}>{title}</h5>

      <button
        className={getLikeButtonClass()}
        style={{ fontSize: "1rem" }}
        disabled={getLikeButtonDisabled()}
        onClick={onLikeButtonClick}
      >
        ♥ {likes}
      </button>
      <br></br>
      <Link
        className="badge badge-light wrap"
        to={`/album/${albumid}`}
        style={{ fontSize: "1rem" }}
      >
        Album: {album}
      </Link>
      <br></br>
      <Link
        className="badge badge-light wrap"
        to={`/genre/${genre}`}
        style={{ fontSize: "1rem" }}
      >
        Genre: {genre}
      </Link>
      {artistCanUpdateDelete() && (
        <>
          <br></br>
          <Link
            to={`/updateSong/${id}`}
            className="btn btn-warning badge"
            style={{ marginRight: 10 }}
          >
            Update
          </Link>
          <button className="btn btn-danger badge" onClick={onDeleteSong}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    userArtist: state.user.artist,
  };
};

const mapDispatchToProps = {
  likeSong: requestLikeSong,
  fetchCurrentListener: requestFetchCurrentListener,
  deleteSong: requestDeleteSong,
  fetchArtist: requestFetchArtist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
