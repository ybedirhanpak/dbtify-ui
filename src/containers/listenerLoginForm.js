import React from "react";
import { connect } from "react-redux";
import { requestListenerLogin } from "../state/actions/userActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";
import { Redirect } from "react-router-dom";

const ListenerLoginForm = (props) => {
  const { userListener } = props;
  const alert = useAlert();

  const onLoginClick = (username, email) => {
    if (!username || !email) {
      alert.error("Please fill all credentials.");
      return;
    }
    const listener = {
      username,
      email,
    };
    props.listenerLogin(listener, alert);
  };

  if (userListener) {
    return <Redirect to="/listenerHome" />;
  }
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
    userListener: state.user.listener,
  };
};

const mapDispatchToProps = {
  listenerLogin: requestListenerLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListenerLoginForm);
