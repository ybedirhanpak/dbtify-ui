import React from "react";
import { connect } from "react-redux";
import ArtistList from "../components/artist-list";
import { requestFetchAllArtists } from "../state/actions/artistActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const AllArtistsListContainer = (props) => {
  const { userListener, fetchArtists, artistList } = props;
  const alert = useAlert();
  useEffect(() => {
    if (userListener) {
      fetchArtists();
    } else {
      alert.error("Please log in as listener.");
    }
  }, [alert, fetchArtists, userListener]);

  return <ArtistList data={artistList} />;
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    artistList: state.artist.list,
  };
};

const mapDispatchToProps = {
  fetchArtists: requestFetchAllArtists,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArtistsListContainer);
