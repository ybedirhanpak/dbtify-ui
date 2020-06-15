import React from "react";
import { connect } from "react-redux";
import SongList from "../components/song-list";
import { requestFetchAllSongs } from "../state/actions/listenerActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const AllSongsListContainer = (props) => {
  const { userListener, fetchSongs, songList } = props;
  const alert = useAlert();
  useEffect(() => {
    if (userListener) {
      fetchSongs();
    } else {
      alert.error("Please log in as listener.");
    }
  }, [alert, fetchSongs, userListener]);

  return <SongList data={songList} />;
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    songList: state.listener.songList,
  };
};

const mapDispatchToProps = {
  fetchSongs: requestFetchAllSongs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSongsListContainer);
