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
    registerMessage: state.user.message,
  };
};

const mapDispatchToProps = {
  artistLogin: requestArtistLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistLoginForm);
