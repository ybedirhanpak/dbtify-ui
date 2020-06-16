import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  requestCreateSong,
  requestFetchArtist,
  requestFetchAllArtists,
} from "../state/actions/artistActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const CreateSongForm = (props) => {
  const {
    userArtist,
    allArtists,
    currentAlbums,
    fetchCurrentArtist,
    fetchAllArtists,
  } = props;
  const alert = useAlert();

  useEffect(() => {
    // Fetch current artists
    if (userArtist) {
      fetchCurrentArtist(userArtist.id);
    } else {
      alert.error("Please log in as artist.");
    }
    // Fetch all artists
    fetchAllArtists();
  }, [alert, fetchAllArtists, fetchCurrentArtist, userArtist]);

  const onCreateSong = (title, _, producerIDs, albumIDs) => {
    if (!title || !producerIDs || !albumIDs || !albumIDs[0]) {
      alert.error("Please fill all credentials.");
      return;
    }
    if (userArtist) {
      const song = {
        title,
        producerIDs: producerIDs,
        albumID: albumIDs[0],
      };
      props.createSong(song, alert);
    } else {
      alert.error("Please log in as artist.");
    }
  };

  return (
    <UserForm
      options={{
        borderClass: "artist-border",
        backgroundClass: "artist-background",
        header: "Create Song",
        value1: {
          header: "Title",
          name: "title",
        },
        selectList1: {
          header: "Producers",
          data: allArtists,
          userArtist: userArtist.id,
          type: "producer",
        },
        selectList2: {
          header: "Album",
          data: currentAlbums,
          userArtist: userArtist.id,
          type: "album",
        },
        button: {
          name: "Create",
          onClick: onCreateSong,
        },
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    allArtists: state.artist.list,
    currentAlbums: state.artist.current.albums,
    artistMessage: state.artist.message,
  };
};

const mapDispatchToProps = {
  createSong: requestCreateSong,
  fetchCurrentArtist: requestFetchArtist,
  fetchAllArtists: requestFetchAllArtists,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSongForm);
