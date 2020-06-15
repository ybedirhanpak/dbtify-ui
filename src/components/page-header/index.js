import React from "react";

const PageHeader = (props) => {
  const { title } = props;
  return <h2 style={{ textAlign: "center" }}>Welcome {title} !</h2>;
};

export default PageHeader;
