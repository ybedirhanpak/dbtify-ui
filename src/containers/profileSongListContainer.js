import React from "react";
import { connect } from "react-redux";
import SongList from "../components/song-list";
import { requestFetchArtist } from "../state/actions/artistActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const ProfileSongListContainer = (props) => {
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
    return <SongList data={currentArtist.songs} />;
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
)(ProfileSongListContainer);
