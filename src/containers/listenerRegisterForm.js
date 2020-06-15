import React from "react";
import { connect } from "react-redux";
import { requestListenerRegister } from "../state/actions/userActions";
import { useAlert } from "react-alert";

import UserForm from "../components/user-form";

const ListenerRegisterForm = (props) => {
  const alert = useAlert();

  const onRegisterClick = (username, email) => {
    const listener = {
      username,
      email,
    };
    props.listenerRegister(listener, alert);
  };

  return (
    <UserForm
      options={{
        header: "Register as Listener",
        value1: {
          header: "Username",
          name: "username",
        },
        value2: {
          header: "E-Mail",
          name: "e-mail",
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
  listenerRegister: requestListenerRegister,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListenerRegisterForm);
