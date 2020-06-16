import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  requestUpdateAlbum,
  requestFetchArtist,
} from "../state/actions/artistActions";
import { requestFetchAlbum } from "../state/actions/listenerActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const UpdateAlbumForm = (props) => {
  const {
    userArtist,
    fetchAlbum,
    updateAlbum,
    fetchCurrentArtist,
    currentAlbum,
    albumid,
  } = props;
  const alert = useAlert();

  useEffect(() => {
    fetchAlbum(albumid);
  }, [fetchAlbum, albumid]);

  const onUpdateAlbum = (title, genre) => {
    if (!title || !genre) {
      alert.error("Please fill all credentials.");
      return;
    }
    if (userArtist) {
      const album = {
        title,
        genre,
      };
      updateAlbum(currentAlbum.id, album, alert).then(() => {
        fetchCurrentArtist(userArtist.id);
      });
    } else {
      alert.error("Please log in as artist.");
    }
  };

  return (
    <UserForm
      options={{
        borderClass: "artist-border",
        backgroundClass: "artist-background",
        header: "Create Album",
        value1: {
          header: "Title",
          name: "title",
          init: currentAlbum ? currentAlbum.title : "",
        },
        value2: {
          header: "Genre",
          name: "genre",
          init: currentAlbum ? currentAlbum.genre : "",
        },
        button: {
          name: "Update",
          onClick: onUpdateAlbum,
        },
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    currentAlbum: state.listener.album,
  };
};

const mapDispatchToProps = {
  fetchAlbum: requestFetchAlbum,
  updateAlbum: requestUpdateAlbum,
  fetchCurrentArtist: requestFetchArtist,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAlbumForm);
