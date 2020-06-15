import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestFetchSongGenre } from "../../state/actions/listenerActions";
import SongList from "../../components/song-list";
import { useAlert } from "react-alert";

const GenrePage = (props) => {
  const {
    match: {
      params: { genreName },
    },
    songList,
    fetchSongGenreList,
    userListener,
  } = props;

  const alert = useAlert();
  useEffect(() => {
    if (userListener) {
      fetchSongGenreList(genreName, alert);
    } else {
      alert.error("Please log in as listener.");
    }
  }, [alert, fetchSongGenreList, genreName, userListener]);

  return (
    <div className="page">
      <h3>Genre : {genreName}</h3>
      <SongList data={songList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    songList: state.listener.songGenreList,
  };
};

const mapDispatchToProps = {
  fetchSongGenreList: requestFetchSongGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
