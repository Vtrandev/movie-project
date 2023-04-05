import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MovieFeed( { movie, searchTerm } ) {
  
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    FilterMovie(filter, movie);
  }, [filter]);

  function FilterMovie(filter, movie) {
    if (filter === "OLD_TO_NEW") {
      movie.sort((a, b) => b.Year - a.Year);
    } else if (filter === "NEW_TO_OLD") {
      movie.sort((a, b) => a.Year - b.Year);
    }
    MovieOutput(movie);
  }

  function MovieOutput(movie) {
    return (
      <div className="moviefeed__wrapper">
        {movie.map((movie, index) => (
          <div className="moviefeed__card" key={index}>
            <div
              className="moviefeed__poster"
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            >
              <img src={movie.Poster} alt="Movie Poster" />
              <div className="moviefeed__more-info">
                <h1>MORE INFO</h1>
              </div>
            </div>
            <h1 className="moviefeed__movie-title">{movie.Title}</h1>
            <p className="moviefeed__movie-subtitle">Year: {movie.Year}</p>
            <p className="moviefeed__movie-subtitle">Type: {movie.Type}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <h1>Search for: {searchTerm} </h1>
        <select id="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="">Sort</option>
          <option value="OLD_TO_NEW">Year, Old to New</option>
          <option value="NEW_TO_OLD">Year, New to Old</option>
        </select>
      </div>
      {MovieOutput(movie)}
    </>
  );
}

export default MovieFeed;
