import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  // useEffect(() => {
  //   Пошук фільму за ключовим словом

  // }, [])

  return (
    <>
      <h2>Пошук фільму за ключовим словом на сторінці фільмів.</h2>
      <div>
        {['movie-10', 'movie-20', 'movie-30', 'movie-40', 'movie-50'].map(
          movie => {
            return (
              <ul>
                <li>
                  <Link kay={movie} to={`${movie}`}>
                    {movie}
                  </Link>
                </li>
              </ul>
            );
          }
        )}
      </div>
    </>
  );
};

export default Movies;
