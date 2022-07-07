import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";

const HomeVievs = lazy(() => import("./viev/HomeVievs"));
const MoviesVievs = lazy(() => import("./viev/MoviesVievs"));
const NotFoundViev = lazy(() => import("./viev/NotFoundViev"));
const MovieDetailsVievs = lazy(() => import("./viev/MovieDetailsVievs"));
const Cast = lazy(() => import("./viev/Cast"));
const Reviews = lazy(() => import("./viev/ReviewsMovies"));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Procesing...</h1>}>
      <AppBar />
        <Routes>
            <Route path="/"element={<HomeVievs />} />
            <Route path="movies" element={<MoviesVievs />} />
            <Route path="movies/:movieId" element={<MovieDetailsVievs />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
            </Route>
            <Route path="*" element={ <NotFoundViev/>} />
       </Routes>
      </Suspense>
    </div>
  );
};
