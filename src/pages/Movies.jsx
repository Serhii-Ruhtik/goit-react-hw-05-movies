import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-10',
    'movie-20',
    'movie-30',
    'movie-40',
    'movie-50',
  ]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  // useEffect(() => {
  // Пошук фільму за ключовим словом

  // }, []);

  const updateQueryString = event => {
    const movieIdValue = event.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
    // const nextParams = name !== '' ? { name } : {};
    // setSearchParams(nextParams);
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  // console.log('location', location);
  return (
    <>
      <h2>Пошук фільму за ключовим словом на сторінці фільмів.</h2>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ movieId })}>change</button>
      <div>
        {visibleMovies.map(movie => {
          return (
            <ul>
              <li>
                <Link kay={movie} state={{ from: location }} to={`${movie}`}>
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
