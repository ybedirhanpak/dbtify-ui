import React from "react";
import { connect } from "react-redux";
import AlbumList from "../components/album-list";
import { requestFetchArtist } from "../state/actions/artistActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const ProfileAlbumListContainer = (props) => {
  const { userArtist, fetchCurrentArtist, albumList } = props;
  const alert = useAlert();
  useEffect(() => {
    if (userArtist) {
      fetchCurrentArtist(userArtist.id);
    } else {
      alert.error("Please log in as artist.");
    }
  }, [userArtist]);

  return <AlbumList data={albumList} />;
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    albumList: state.artist.current.albums,
  };
};

const mapDispatchToProps = {
  fetchCurrentArtist: requestFetchArtist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAlbumListContainer);
