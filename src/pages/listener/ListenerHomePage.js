import React from "react";
import AllAlbumsListContainer from "../../containers/allAlbumsListContainer";
import AllSongsListContainer from "../../containers/allSongsListContainer";
import AllArtistsListContainer from "../../containers/allArtistsListContainer";
import ListenerHeaderContainer from "../../containers/listenerHeaderContainer";
import AllListenersListContainer from "../../containers/allListenersListContainer";

const ListenerHomePage = () => {
  return (
    <div className="page">
      <ListenerHeaderContainer />
      <AllArtistsListContainer />
      <AllAlbumsListContainer />
      <AllSongsListContainer />
      <AllListenersListContainer />
    </div>
  );
};

export default ListenerHomePage;
