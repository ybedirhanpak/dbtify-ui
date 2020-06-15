import React from "react";
import { connect } from "react-redux";
import { requestCreateAlbum } from "../state/actions/artistActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const ArtistRegisterForm = (props) => {
  const { currentArtist } = props;
  const alert = useAlert();

  const onCreateAlbum = (title, genre) => {
    if (!title || !genre) {
      alert.error("Please fill all credentials.");
      return;
    }
    if (currentArtist) {
      const album = {
        title,
        genre,
        artistID: currentArtist.id,
      };
      props.createAlbum(album, alert);
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
        },
        value2: {
          header: "Genre",
          name: "genre",
        },
        button: {
          name: "Create",
          onClick: onCreateAlbum,
        },
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    currentArtist: state.user.artist,
  };
};

const mapDispatchToProps = {
  createAlbum: requestCreateAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistRegisterForm);
