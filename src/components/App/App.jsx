
import { Routes, Route } from "react-router-dom";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { Reviews } from "pages/Reviews/Reviews";
import { Layout }  from "../Layout/Layout";
import { Cast } from "pages/Cast/Cast";



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<MoviesPage />} />
          <Route path=":movieId" element={<MovieDetailsPage />} />
          <Route path=":movieId/cast" element={<Cast />} />
          <Route path=":movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route >
      </Routes>
    </>
  );
};
