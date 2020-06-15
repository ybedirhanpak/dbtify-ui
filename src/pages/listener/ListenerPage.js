import React from "react";
import AllAlbumsListContainer from "../../containers/allAlbumsListContainer";
import AllSongsListContainer from "../../containers/allSongsListContainer";
import AllArtistsListContainer from "../../containers/allArtistsListContainer";
import ListenerHeaderContainer from "../../containers/listenerHeaderContainer";

const ListenerPage = () => {
  return (
    <div className="page">
      <ListenerHeaderContainer />
      <AllArtistsListContainer />
      <AllAlbumsListContainer />
      <AllSongsListContainer />
    </div>
  );
};

export default ListenerPage;
