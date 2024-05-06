import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from "../../store/slices/favoriteMoviesSlice";
import axiosInastance from './../../axioseConfig/instance';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../store/slices/fetchApiSlice';
import './moviesStyles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaRegStar } from 'react-icons/fa'; 

function Movie() {
  
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.movies.currentPage);
  const movies = useSelector(state => state.movies.movies);
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);
const handleNextClick = () => {
    dispatch(fetchMovies(currentPage + 1)); 
  };

  const handlePreviousClick = () => {
    dispatch(fetchMovies(currentPage - 1)); 
  };

  
  const handleToggleFavorite = (movie) => {
    if (isMovieInFavorites(movie)) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const isMovieInFavorites = (movie) => {
    return favoriteMovies.some(favorite => favorite.id === movie.id);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ height: '350px' }} />
                <Card.Body>
                  
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className='cardText'>{movie.overview}</Card.Text>
                  <Link to={`/details/${movie.id}`}>
                    <Button className='btn3' variant="primary">View Details</Button>
                  </Link>

                  {isMovieInFavorites(movie) ? (
                    <FaStar className='starIcon' size={30} onClick={() => handleToggleFavorite(movie)} />
                  ) : (
                    <FaRegStar className='starIcon' size={30} onClick={() => handleToggleFavorite(movie)} />
                  )}
                </Card.Body>


              </Card>
            </div>
          ))}
          <div className=' my-5'>
            <Button className='btn1 mx-5'  onClick={handlePreviousClick}>Previous</Button>
            <Button className='btn2'    onClick={handleNextClick}>Next</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
