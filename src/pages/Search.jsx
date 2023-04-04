import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import MovieFeed from "../components/MovieFeed";

function Search() {
  const id = useParams();
  const [searchTerm, setSearchTerm] = useState('new');
  const [movieSearch, setMovieSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    setSearchTerm(id.searchTerm || "new");
    fetchMovies(searchTerm);
  }, [id, searchTerm]);

  async function fetchMovies(searchTerm) {

    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=aafd31ec&s=${searchTerm}`
    );

    console.log(data.Search)
    setMovieSearch(data.Search);
    setLoading(false);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Searchbar height={"50px"} width={"30px"} />
      </div>

      {!loading ? (
        <MovieFeed movie={movieSearch} searchTerm={searchTerm} />
      ) : (
        <div className="moviefeed__wrapper">
          {new Array(6).fill(0).map((_, index) => (
            <div className="moviefeed__card" key={index}>
              <div className="moviefeed__poster moviefeed__skeleton"></div>
              <h1 className="moviefeed__movie-title moviefeed__skeleton-title"></h1>
              <p className="moviefeed__movie-subtitle moviefeed__skeleton-title"></p>
              <p className="moviefeed__movie-subtitle moviefeed__skeleton-title"></p>
            </div>
          ))}
        </div>
        )} 
    </>
  );
}

export default Search;
