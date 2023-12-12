import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-10',
    'movie-20',
    'movie-30',
    'movie-40',
    'movie-50',
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');

  // useEffect(() => {
  //   Пошук фільму за ключовим словом

  // }, [])
  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <>
      <h2>Пошук фільму за ключовим словом на сторінці фільмів.</h2>
      <input
        type="text"
        value={movieId}
        onChange={event => setSearchParams({ movieId: event.target.value })}
      />
      <button onClick={() => setSearchParams({ c: 'hello' })}>change</button>
      <div>
        {movies.map(movie => {
          return (
            <ul>
              <li>
                <Link kay={movie} to={`${movie}`}>
                  {movie}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
