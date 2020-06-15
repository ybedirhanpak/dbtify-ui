import React from "react";

const ListItem = (props) => {
  const { element } = props;
  const { title, likes, genre, artist } = element;
  return (
    <div className="col-md-3 card-fluid-sm">
      <h5>{title}</h5>
      <span>Likes: {likes}</span>
      <br></br>
      <span>Genre: {genre}</span>
      <br></br>
      <span>Artist: {artist}</span>
    </div>
  );
};

export default ListItem;
