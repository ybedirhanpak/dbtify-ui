import React from "react";
import { connect } from "react-redux";
import ArtistList from "../components/listener-list";
import { requestFetchAllListeners } from "../state/actions/listenerActions";
import { useEffect } from "react";
import { useAlert } from "react-alert";

const AllArtistsListContainer = (props) => {
  const { userListener, fetchListeners, listenerList } = props;
  const alert = useAlert();
  useEffect(() => {
    if (userListener) {
      fetchListeners();
    } else {
      alert.error("Please log in as listener.");
    }
  }, [alert, fetchListeners, userListener]);

  return <ArtistList data={listenerList} />;
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
    listenerList: state.listener.listenerList,
  };
};

const mapDispatchToProps = {
  fetchListeners: requestFetchAllListeners,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArtistsListContainer);
