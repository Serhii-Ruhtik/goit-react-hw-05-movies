import { Link, useLocation } from 'react-router-dom';

import Box from 'Box';
import { Movie } from 'components/Movie/Movie';
import { MovieList } from './MovieList.styled';

export function MoviesList({ movies, genres, from }) {
  const location = useLocation();
  return (
    <Box p={4}>
      <MovieList>
        {from === 'home'
          ? movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`} state={{ from: location }}>
                    <Movie movieInfo={movie} genres={genres} />
                  </Link>
                </li>
              );
            })
          : movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    <Movie movieInfo={movie} genres={genres} />
                  </Link>
                </li>
              );
            })}
      </MovieList>
    </Box>
  );
}
