import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestUpdateSong } from "../state/actions/artistActions";
import { requestFetchSong } from "../state/actions/listenerActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const UpdateSongForm = (props) => {
  const { songid, userArtist, fetchSong, updateSong, currentSong } = props;
  const alert = useAlert();

  useEffect(() => {
    if (userArtist) {
      fetchSong(songid);
    } else {
      alert.error("Please log in as artist.");
    }
  }, [alert, fetchSong, songid, userArtist]);

  const onUpdateSong = (title) => {
    if (!title) {
      alert.error("Please fill all credentials.");
      return;
    }
    if (userArtist) {
      const song = {
        title,
      };
      updateSong(song, alert).then(() => {
        fetchSong(song.id);
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
        header: "Update Song",
        value1: {
          header: "Title",
          name: "title",
        },
        button: {
          name: "Create",
          onClick: onUpdateSong,
        },
      }}
      value1Init={currentSong ? currentSong.title : ""}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    currentSong: state.listener.song,
  };
};

const mapDispatchToProps = {
  updateSong: requestUpdateSong,
  fetchSong: requestFetchSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSongForm);
