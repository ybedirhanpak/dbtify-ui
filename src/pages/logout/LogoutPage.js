import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { actionCreators } from "../../state/actions/userActions";
import { connect } from "react-redux";

const LogoutPage = (props) => {
  const { logout } = props;

  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionCreators.userReset()),
  };
};

export default connect(null, mapDispatchToProps)(LogoutPage);
