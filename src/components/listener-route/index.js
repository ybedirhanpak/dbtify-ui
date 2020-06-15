import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useAlert } from "react-alert";

const ListenerRoute = (props) => {
  const { userListener, path, component, exact } = props;
  const alert = useAlert();
  if (userListener) {
    return <Route path={path} exact={exact} component={component} />;
  } else {
    alert.error("Please log in as listener");
    return <Redirect to="/login" />;
  }
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
  };
};

export default connect(mapStateToProps, null)(ListenerRoute);
