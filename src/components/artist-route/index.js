import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useAlert } from "react-alert";

const ArtistRoute = (props) => {
  const { userArtist, path, component, exact } = props;
  const alert = useAlert();
  if (userArtist) {
    return <Route path={path} exact={exact} component={component} />;
  } else {
    alert.error("Please log in as artist");
    return <Redirect to="/login" />;
  }
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
  };
};

export default connect(mapStateToProps, null)(ArtistRoute);
