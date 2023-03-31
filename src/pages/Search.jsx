import React from "react";
import MovieFeed from "../components/MovieFeed";
import Searchbar from "../components/Searchbar";

const Search = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Searchbar height={"50px"} width={"30px"} />
      </div>

      <MovieFeed />
    </>
  );
};

export default Search;
