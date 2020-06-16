import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestFetchAlbum } from "../../state/actions/listenerActions";
import Album from "../../components/album";
import SongList from "../../components/song-list";

const AlbumPage = (props) => {
  const {
    match: {
      params: { id },
    },
    currentAlbum,
    fetchAlbum,
  } = props;
  useEffect(() => {
    fetchAlbum(id);
  }, [fetchAlbum, id]);

  return (
    <div className="page">
      <h3>Album</h3>
      {currentAlbum && <Album album={currentAlbum} />}
      {currentAlbum && <SongList data={currentAlbum.songs} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentAlbum: state.listener.album,
  };
};

const mapDispatchToProps = {
  fetchAlbum: requestFetchAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
