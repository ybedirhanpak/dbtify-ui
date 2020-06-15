import React, { useState } from "react";
import ListItem from "./listItem";

const SelectList = (props) => {
  const { onListChange, options } = props;
  const { header, data, type, userArtist } = options;

  const [collapsed, setCollapsed] = useState(true);
  const [checkedAlbum, setCheckedAlbum] = useState("");
  const [checkedProducerList, setCheckedProducerList] = useState([userArtist]);

  const isAlbumChecked = (albumID) => {
    return checkedAlbum === albumID;
  };

  const isProducerChecked = (producerID) => {
    return checkedProducerList.indexOf(producerID) > -1;
  };

  const onAlbumCheck = (albumID) => {
    setCheckedAlbum(albumID);
    if (type === "album") {
      onListChange([albumID]);
    }
  };

  const onProducerCheck = (producerID) => {
    let updatedList = [];
    if (isProducerChecked(producerID)) {
      updatedList = checkedProducerList.filter((value) => value !== producerID);
      setCheckedProducerList(updatedList);
    } else {
      updatedList = [...checkedProducerList, producerID];
      setCheckedProducerList(updatedList);
    }

    if (type === "producer") {
      onListChange(updatedList);
    }
  };

  const getDropdownClass = () => {
    return collapsed ? "dropdown-menu collapsed" : "dropdown-menu";
  };

  const renderItems = () => {
    const items = data.map((element, index) => {
      const key = element.id + element.title;
      return (
        <ListItem
          key={key}
          element={element}
          checked={
            element.genre
              ? isAlbumChecked(element.id)
              : isProducerChecked(element.id)
          }
          onCheck={element.genre ? onAlbumCheck : onProducerCheck}
        />
      );
    });
    return items;
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <button
        className="btn btn-primary dropdown-toggle mr-4"
        type="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        {header}
      </button>

      <div
        className={getDropdownClass()}
        style={{
          display: "block",
          top: "inherit",
          left: "inherit",
          maxHeight: 160,
          overflowY: "auto",
        }}
      >
        {renderItems()}
      </div>
    </div>
  );
};

export default SelectList;
