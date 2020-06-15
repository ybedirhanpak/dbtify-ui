import React from "react";
import { connect } from "react-redux";
import AlbumList from "../components/album-list";
import { requestFetchAllAlbums } from "../state/actions/listenerActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const ListenerAlbumListContainer = (props) => {
  const { userListener, fetchAlbums, albumList } = props;
  const alert = useAlert();
  useEffect(() => {
    if (userListener) {
      fetchAlbums();
    } else {
      alert.error("Please log in as artist.");
    }
  }, [alert, fetchAlbums, userListener]);

  return <AlbumList data={albumList} />;
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    albumList: state.listener.albumList,
  };
};

const mapDispatchToProps = {
  fetchAlbums: requestFetchAllAlbums,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListenerAlbumListContainer);
