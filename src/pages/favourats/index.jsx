

// export default BestMovie;import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { removeFromFavorites } from "../../store/slices/favoriteMoviesSlice";
import './style.css';


function BestMovie() {
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);
  const dispatch = useDispatch();

  const handleToggleFavorite = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  const isMovieInFavorites = (movie) => {
    return favoriteMovies.some(favorite => favorite.id === movie.id);
  };

  return (
    <div className="container my-5">
      <div className="row">
        {favoriteMovies.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          favoriteMovies.map(movie => (
            <div key={movie.id} className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ height: '350px' }} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text  className='cardText' >{movie.overview}</Card.Text>
                  <Link to={`/details/${movie.id}`}>
                    <Button className='btn3' variant="primary">View Details</Button>
                  </Link>
                  {/* Render star icon based on whether the movie is in favorites */}
                  {isMovieInFavorites(movie) ? (
                    <FaStar className='starIcon' size={30} onClick={() => handleToggleFavorite(movie)} />
                  ) : (
                    <FaRegStar className='starIcon' size={30} onClick={() => handleToggleFavorite(movie)} />
                  )}
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BestMovie;



