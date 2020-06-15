import React from "react";
import { connect } from "react-redux";
import SongList from "../components/song-list";
import { requestFetchArtist } from "../state/actions/artistActions";
import { useEffect } from "react";

const ProfileSongListContainer = (props) => {
  const { userArtist, fetchCurrentArtist, songList } = props;
  useEffect(() => {
    if (userArtist) {
      fetchCurrentArtist(userArtist.id);
    } else {
      alert.error("Please log in as artist.");
    }
  }, [userArtist]);

  return <SongList data={songList} />;
};

const mapStateToProps = (state) => {
  return {
    userArtist: state.user.artist,
    songList: state.artist.current.songs,
  };
};

const mapDispatchToProps = {
  fetchCurrentArtist: requestFetchArtist,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSongListContainer);
