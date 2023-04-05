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
            <p className='moviedetail__subtitle'><strong>Cast:</strong><br />{movieDetail.Actors}</p>
            <p className='moviedetail__subtitle'><strong>Plot:</strong><br />{movieDetail.Plot}</p>
            <p className='moviedetail__subtitle'><strong>Genre:</strong><br />{movieDetail.Genre}</p>
            <p className='moviedetail__subtitle'><strong>Director:</strong><br />{movieDetail.Director}</p>
            <p className='moviedetail__subtitle'><strong>Writer:</strong><br />{movieDetail.Writer}</p>
            <p className='moviedetail__subtitle'><strong>Release Date:</strong><br />{movieDetail.Released}</p>
            <p className='moviedetail__subtitle'><strong>Box Office:</strong><br />{movieDetail.BoxOffice}</p>
            <p className='moviedetail__subtitle'><strong>Type:</strong><br />{movieDetail.Type}</p>
            <p className='moviedetail__subtitle'><strong>Rated:</strong><br />{movieDetail.Rated}</p>
            <p className='moviedetail__subtitle'><strong>Duration:</strong><br />{movieDetail.Runtime}</p>
            <p className='moviedetail__subtitle'><strong>IMDB Rating:</strong><br />{movieDetail.imdbRating}</p>

        </div>
    </div>
  )
}

export default MovieDetail