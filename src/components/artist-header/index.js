import React from "react";

const ArtistHeader = (props) => {
  const { title } = props;
  return <h2 style={{ textAlign: "center" }}>Welcome {title} !</h2>;
};

export default ArtistHeader;
