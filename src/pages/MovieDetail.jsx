import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function MovieDetail() {
    const { movieId } = useParams();
    const [ movieDetail, setMovieDetail ] = useState('');

    async function fetchMoviesDetails() {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=aafd31ec&i=${movieId}`)
        console.log(data);
        setMovieDetail(data);
    }

    useEffect(() => {
        fetchMoviesDetails();
    }, [])

  return (
    <div className='moviedetail__wrapper'>
        <div className='moviedetail__poster'>
            <img src={movieDetail.Poster} alt="Poster" />
        </div>

        <div className='moviedetail__description'>
            <h1 className='moviedetail__title'>{movieDetail.Title}</h1>
            <p className='moviedetail__subtitle'>Cast:<br />{movieDetail.Actors}</p>
            <p className='moviedetail__subtitle'>Plot:<br />{movieDetail.Plot}</p>
            <p className='moviedetail__subtitle'>Genre:<br />{movieDetail.Genre}</p>
            <p className='moviedetail__subtitle'>Director:<br />{movieDetail.Director}</p>
            <p className='moviedetail__subtitle'>Writer:<br />{movieDetail.Writer}</p>
            <p className='moviedetail__subtitle'>Release Date:<br />{movieDetail.Released}</p>
            <p className='moviedetail__subtitle'>Box Office:<br />{movieDetail.BoxOffice}</p>
            <p className='moviedetail__subtitle'>Type:<br />{movieDetail.Type}</p>
            <p className='moviedetail__subtitle'>Rated:<br />{movieDetail.Rated}</p>
            <p className='moviedetail__subtitle'>Duration:<br />{movieDetail.Runtime}</p>
            <p className='moviedetail__subtitle'>IMDB Rating:<br />{movieDetail.imdbRating}</p>

        </div>
    </div>
  )
}

export default MovieDetail