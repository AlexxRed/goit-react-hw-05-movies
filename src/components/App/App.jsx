import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { infoStyle } from "services/userInformator";
import { Loader } from "components/Loader/Loader";
infoStyle();

const Layout = lazy(() => import("../Layout/Layout" /* webpackChunkName: "layout" */));
const HomePage = lazy(() => import("pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage" /* webpackChunkName: "movie-page" */));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "details-page" */));
const CastPage = lazy(() => import("pages/CastPage/CastPage" /* webpackChunkName: "cast" */));
const ReviewsPages = lazy(() => import("pages/ReviewsPage/ReviewsPage" /* webpackChunkName: "reviews" */));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "not-found" */));

export const App = () => {
  return (
    <>
      <Suspense fallback={<>{<Loader/>}</>}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Suspense fallback={<>{<Loader/>}</>}><CastPage /></Suspense>} />
              <Route path="reviews" element={<Suspense fallback={<>{<Loader/>}</>}><ReviewsPages /></Suspense>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route >
        </Routes>
        </Suspense>
    </>
  );
};
