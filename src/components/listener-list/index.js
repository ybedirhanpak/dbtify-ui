import React from "react";
import ListItem from "./listItem";

const ListenerList = (props) => {
  const { data } = props;

  const renderItems = () => {
    const items = data
      ? data.map((element, index) => {
          const key = element.id + element.username;
          return <ListItem key={key} element={element} />;
        })
      : [];
    return items;
  };
  return (
    <div className="card-fluid">
      <h3>Listeners</h3>
      <div className="row">{renderItems()}</div>
    </div>
  );
};

export default ListenerList;
