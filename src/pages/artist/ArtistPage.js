import React from "react";
import CreateAlbumForm from "../../containers/createAlbumForm";
import CreateSongForm from "../../containers/createSongForm";

const ArtistPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateAlbumForm />
          </div>
          <div className="col-md-6">
            <CreateSongForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
