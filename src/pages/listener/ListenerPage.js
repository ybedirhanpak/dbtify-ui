import React from "react";
import AllAlbumsListContainer from "../../containers/allAlbumsListContainer";
import AllSongsListContainer from "../../containers/allSongsListContainer";

const ListenerPage = () => {
  return (
    <div className="page">
      <AllAlbumsListContainer />
      <AllSongsListContainer />
    </div>
  );
};

export default ListenerPage;
