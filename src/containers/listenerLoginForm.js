import React from "react";
import { connect } from "react-redux";
import { requestListenerLogin } from "../state/actions/userActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const ListenerLoginForm = (props) => {
  const alert = useAlert();

  const onLoginClick = (username, email) => {
    const listener = {
      username,
      email,
    };
    props.listenerLogin(listener, alert);
  };

  return (
    <UserForm
      options={{
        borderClass: "listener-border",
        backgroundClass: "listener-background",
        header: "Login as Listener",
        value1: {
          header: "Username",
          name: "username",
        },
        value2: {
          header: "E-Mail",
          name: "email",
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
  listenerLogin: requestListenerLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListenerLoginForm);
