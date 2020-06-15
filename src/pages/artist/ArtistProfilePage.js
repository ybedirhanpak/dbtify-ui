import React from "react";
import { Link } from "react-router-dom";
import ProfileSongListContainer from "../../containers/profileSongListContainer";
import ProfileAlbumListContainer from "../../containers/profileAlbumListContainer";
import ArtistHeaderContainer from "../../containers/artistHeaderContainer";

const ArtistProfilePage = () => {
  return (
    <div className="page">
      <div className="container-fluid">
        <ArtistHeaderContainer />
        <Link to="/artistProfile/create">
          <button className="btn app-btn">Create</button>
        </Link>
        <ProfileAlbumListContainer />
        <ProfileSongListContainer />
      </div>
    </div>
  );
};

export default ArtistProfilePage;
