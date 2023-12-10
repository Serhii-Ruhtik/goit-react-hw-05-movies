import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   Пошук фільму ID

  // }, [])

  return <div>REVIEWS {movieId} </div>;
};

export default Reviews;
