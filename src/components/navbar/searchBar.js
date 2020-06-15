import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="search-bar">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <Link
          className="btn btn-outline-success"
          to={`/search/${keyword}`}
          type="submit"
        >
          {" "}
          Search
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
