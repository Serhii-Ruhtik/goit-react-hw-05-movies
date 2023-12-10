import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
//! 3c17396434cbeb8bf43dc0291bcf9df1
//todo Токен доступу для читання API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzE3Mzk2NDM0Y2JlYjhiZjQzZGMwMjkxYmNmOWRmMSIsInN1YiI6IjY1MjliYTdhMzU4ZGE3MDBjNmYwN2NiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6w33BtFWAIXbReKDK6fmS2SPFDSsJcXJ0jSJcixVsL0
