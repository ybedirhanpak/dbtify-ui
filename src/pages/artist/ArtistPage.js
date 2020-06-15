import React from "react";
import CreateAlbumForm from "../../containers/createAlbumForm";

const ArtistPage = () => {
  return (
    <div className="page login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreateAlbumForm />
          </div>
          <div className="col-md-6">
            <CreateAlbumForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
