import React from "react";
import { connect } from "react-redux";
import { requestArtistLogin } from "../state/actions/userActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";
import { Redirect } from "react-router-dom";

const ArtistLoginForm = (props) => {
  const { userArtist } = props;
  const alert = useAlert();

  const onLoginClick = (name, surname) => {
    if (!name || !surname) {
      alert.error("Please fill all credentials.");
      return;
    }
    const artist = {
      name,
      surname,
    };
    props.artistLogin(artist, alert);
  };

  if (userArtist) {
    return <Redirect to="/artist" />;
  }

  return (
    <UserForm
      options={{
        borderClass: "artist-border",
        backgroundClass: "artist-background",
        header: "Login as Artist",
        value1: {
          header: "Name",
          name: "name",
        },
        value2: {
          header: "Surname",
          name: "surname",
        },
        button: {
          name: "Login",
          onClick: onLoginClick,
        },
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
  };
};

const mapDispatchToProps = {
  artistLogin: requestArtistLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistLoginForm);
