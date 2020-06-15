import React from "react";
import { connect } from "react-redux";
import { requestArtistRegister } from "../state/actions/userActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const ArtistRegisterForm = (props) => {
  const alert = useAlert();

  const onRegisterClick = (name, surname) => {
    const artist = {
      name,
      surname,
    };
    props.artistRegister(artist, alert);
  };

  return (
    <UserForm
      options={{
        borderClass: "artist-border",
        backgroundClass: "artist-background",
        header: "Register as Artist",
        value1: {
          header: "Name",
          name: "name",
        },
        value2: {
          header: "Surname",
          name: "surname",
        },
        button: {
          name: "Register",
          onClick: onRegisterClick,
        },
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    registerMessage: state.user.message,
  };
};

const mapDispatchToProps = {
  artistRegister: requestArtistRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistRegisterForm);
