import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestFetchArtist } from "../../state/actions/artistActions";
import Artist from "../../components/artist";
import AlbumList from "../../components/album-list";
import SongList from "../../components/song-list";

const ArtistPage = (props) => {
  const {
    match: {
      params: { id },
    },
    currentArtist,
    fetchArtist,
  } = props;
  useEffect(() => {
    fetchArtist(id);
  }, [fetchArtist, id]);

  return (
    <div className="page">
      {currentArtist && <Artist artist={currentArtist} />}
      {currentArtist && <AlbumList data={currentArtist.albums} />}
      {currentArtist && <SongList data={currentArtist.songs} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentArtist: state.artist.current,
  };
};

const mapDispatchToProps = {
  fetchArtist: requestFetchArtist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
