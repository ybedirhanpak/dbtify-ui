import React from "react";
import ListItem from "./listItem";

const AlbumList = (props) => {
  const { data, title } = props;

  const renderItems = () => {
    const items = data
      ? data.map((element, index) => {
          const key = element.id + element.title;
          return <ListItem key={key} element={element} />;
        })
      : [];
    return items;
  };
  return (
    <div className="card-fluid">
      <h3>{title ?? "Albums"}</h3>
      <div className="row">{renderItems()}</div>
    </div>
  );
};

export default AlbumList;
