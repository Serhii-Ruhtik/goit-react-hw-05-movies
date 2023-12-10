import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // useEffect(() => {
  //   Робимо запит на популярні фільми сьогодні

  // }, [])

  return (
    <>
      <h1>Cписок найпопулярніших фільмів на сьогодні</h1>
      <div>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
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

export default Home;
