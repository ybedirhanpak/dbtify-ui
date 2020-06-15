import React from "react";
import { connect } from "react-redux";
import AlbumList from "../components/album-list";
import { requestFetchArtist } from "../state/actions/artistActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const ProfileAlbumListContainer = (props) => {
  const { userArtist, currentArtist, fetchCurrentArtist } = props;
  const alert = useAlert();
  useEffect(() => {
    if (userArtist) {
      fetchCurrentArtist(userArtist.id);
    } else {
      alert.error("Please log in as artist.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userArtist]);
  if (currentArtist) {
    return <AlbumList data={currentArtist.albums} />;
  } else {
    return <div>Loading</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    currentArtist: state.artist.current,
  };
};

const mapDispatchToProps = {
  fetchCurrentArtist: requestFetchArtist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAlbumListContainer);
