import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestFetchArtist } from "../../state/actions/artistActions";
import Artist from "../../components/artist";
import AlbumList from "../../components/album-list";
import SongList from "../../components/song-list";
import ArtistList from "../../components/artist-list";

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
      <h3>Artist</h3>
      {currentArtist && <Artist artist={currentArtist} />}
      {currentArtist && <AlbumList data={currentArtist.albums} />}
      {currentArtist && <SongList data={currentArtist.songs} />}
      {currentArtist && (
        <ArtistList
          title="Worked Together"
          data={currentArtist.workedTogether}
        />
      )}
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
