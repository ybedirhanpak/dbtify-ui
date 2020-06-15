import React from "react";
import { connect } from "react-redux";
import ArtistHeader from "../components/artist-header";

const ArtistHeaderContainer = (props) => {
  const { userArtist } = props;
  const title = userArtist.name + " " + userArtist.surname;
  return <ArtistHeader title={title} />;
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
  };
};

export default connect(mapStateToProps, null)(ArtistHeaderContainer);
