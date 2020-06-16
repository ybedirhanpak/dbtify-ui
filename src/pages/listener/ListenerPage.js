import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestFetchListener } from "../../state/actions/listenerActions";
import Listener from "../../components/listener";
import AlbumList from "../../components/album-list";
import SongList from "../../components/song-list";

const ListenerPage = (props) => {
  const {
    match: {
      params: { id },
    },
    currentListener,
    fetchListener,
  } = props;
  useEffect(() => {
    fetchListener(id);
  }, [fetchListener, id]);

  return (
    <div className="page">
      <h3>Listener</h3>
      {currentListener && <Listener listener={currentListener} />}
      {currentListener && (
        <AlbumList title="Liked Albums" data={currentListener.likedAlbums} />
      )}
      {currentListener && (
        <SongList title="Liked Songs" data={currentListener.likedSongs} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentListener: state.listener.current,
  };
};

const mapDispatchToProps = {
  fetchListener: requestFetchListener,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListenerPage);
