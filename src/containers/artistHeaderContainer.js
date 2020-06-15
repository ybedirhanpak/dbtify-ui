import React from "react";
import { connect } from "react-redux";
import PageHeader from "../components/page-header";

const ArtistHeaderContainer = (props) => {
  const { userArtist } = props;
  const title = userArtist
    ? userArtist.name + " " + userArtist.surname
    : " guest";
  return <PageHeader title={title} />;
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
  };
};

export default connect(mapStateToProps, null)(ArtistHeaderContainer);
