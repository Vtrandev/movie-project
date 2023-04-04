import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieFeed from "../components/MovieFeed";
import Searchbar from "../components/Searchbar";

function Search() {

  const id = useParams();
  const [searchTerm, setSearchTerm] = useState('new');
  const [movieSearch, setMovieSearch ] = useState(null);
  const [loading, setLoading] = useState(true)

  
  async function fetchMovies(searchTerm) {
    console.log(searchTerm);
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=aafd31ec&s=${searchTerm}`)
    setMovieSearch(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    setSearchTerm(id.searchTerm || 'new');
    fetchMovies(searchTerm)
  }, [id, searchTerm])

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Searchbar height={"50px"} width={"30px"} />
      </div>

      {!loading ? <MovieFeed movie={movieSearch} />
      : 
      (
        <div className="moviefeed__wrapper">
        {new Array(6).fill(0).map((_, index) => (
          <div className="moviefeed__card" key={index}>
            <div className="moviefeed__poster moviefeed__skeleton">
            </div>
          <h1 className="moviefeed__movie-title moviefeed__skeleton-title"></h1>
          <p className="moviefeed__movie-subtitle moviefeed__skeleton-title"></p>
          <p className="moviefeed__movie-subtitle moviefeed__skeleton-title"></p>
          </div>))
          }
        </div>
      )
      }
    </>
  );
};

export default Search;
