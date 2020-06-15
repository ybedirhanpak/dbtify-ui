import React from "react";
import ListItem from "./listItem";

const SongList = (props) => {
  const { data } = props;

  const renderItems = () => {
    const items = data.map((element, index) => {
      const key = element.id + element.title;
      return <ListItem key={key} element={element} />;
    });
    return items;
  };
  return (
    <div className="card-fluid">
      <h3>Songs</h3>
      <div className="row">{renderItems()}</div>
    </div>
  );
};

export default SongList;
