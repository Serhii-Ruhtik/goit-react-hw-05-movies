import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   console.log('params ->', movieId);

  // useEffect(() => {
  //   Робимо запит на популярні фільми сьогодні

  // }, [])

  return (
    <>
      <h2>{`MovieDetails:   ${movieId}`}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
