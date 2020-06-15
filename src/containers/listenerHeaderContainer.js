import React from "react";
import { connect } from "react-redux";
import PageHeader from "../components/page-header";

const ListenerHeaderContainer = (props) => {
  const { userListener } = props;
  const title = userListener ? userListener.username : " guest";
  return <PageHeader title={title} />;
};

const mapStateToProps = (state) => {
  return {
    userListener: state.user.listener,
  };
};

export default connect(mapStateToProps, null)(ListenerHeaderContainer);
