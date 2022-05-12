
import { Routes, Route } from "react-router-dom";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { ReviewsPages } from "pages/ReviewsPage/ReviewsPage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { HomePage } from "pages/HomePage/HomePage";
import { CastPage } from "pages/CastPage/CastPage";
import { Layout }  from "../Layout/Layout";





export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviesPage />} >
            <Route path=":movieId" element={<MovieDetailsPage />} />
          </Route>
          <Route path=":movieId/cast" element={<CastPage />} />
          <Route path=":movieId/reviews" element={<ReviewsPages />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route >
      </Routes>
    </>
  );
};
