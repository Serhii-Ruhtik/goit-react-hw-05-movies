import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  // useEffect(() => {
  //   Пошук фільму ID

  // }, [])
  const { movieId } = useParams();
  return <div>CAST: {movieId}</div>;
};

export default Cast;
