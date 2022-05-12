import { Routes, Route } from "react-router-dom";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { ReviewsPages } from "pages/ReviewsPage/ReviewsPage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { HomePage } from "pages/HomePage/HomePage";
import { CastPage } from "pages/CastPage/CastPage";
import { Layout } from "../Layout/Layout";
import { infoStyle } from "services/userInformator";
infoStyle();





export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPages />} />
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route >
      </Routes>
    </>
  );
};