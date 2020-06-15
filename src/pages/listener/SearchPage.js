import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestFetchSongSearch } from "../../state/actions/listenerActions";
import SongList from "../../components/song-list";
import { useAlert } from "react-alert";

const SearchPage = (props) => {
  const {
    match: {
      params: { key },
    },
    songList,
    fetchSongSearchList,
    userListener,
  } = props;

  const alert = useAlert();
  useEffect(() => {
    if (userListener) {
      fetchSongSearchList(key, alert);
    } else {
      alert.error("Please log in as listener.");
    }
  }, [alert, fetchSongSearchList, key, userListener]);

  return (
    <div className="page">
      <h3>Search results for : {key}</h3>
      <SongList data={songList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    songList: state.listener.songSearchList,
  };
};

const mapDispatchToProps = {
  fetchSongSearchList: requestFetchSongSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
