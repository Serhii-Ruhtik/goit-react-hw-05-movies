import React from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const beakLocation = useRef(location.state?.from ?? '/movies');
  //   console.log('params ->', movieId);

  // useEffect(() => {w
  //   Робимо запит на популярні фільми сьогодні

  // }, [])

  // console.log('location ->', location);
  // console.log('beakLocation ->', beakLocation);
  return (
    <>
      <h2>{`MovieDetails:   ${movieId}`}</h2>
      <Link to={beakLocation.current}>Beak</Link>
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
