import React from "react";
import { connect } from "react-redux";
import { requestArtistLogin } from "../state/actions/userActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const ArtistLoginForm = (props) => {
  const alert = useAlert();

  const onLoginClick = (name, surname) => {
    const artist = {
      name,
      surname,
    };
    props.artistLogin(artist, alert);
  };

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
  return {};
};

const mapDispatchToProps = {
  artistLogin: requestArtistLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistLoginForm);
