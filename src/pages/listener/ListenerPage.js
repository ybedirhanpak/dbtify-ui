import React from "react";
import AllAlbumsListContainer from "../../containers/allAlbumsListContainer";
import AllSongsListContainer from "../../containers/allSongsListContainer";
import AllArtistsListContainer from "../../containers/allArtistsListContainer";

const ListenerPage = () => {
  return (
    <div className="page">
      <AllArtistsListContainer />
      <AllAlbumsListContainer />
      <AllSongsListContainer />
    </div>
  );
};

export default ListenerPage;
