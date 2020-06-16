import React from "react";
import UpdateAlbumForm from "../../containers/updateAlbumForm";

const UpdateAlbumPage = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-6">
            <UpdateAlbumForm albumid={id} />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAlbumPage;
