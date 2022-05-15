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

const urls = {
  layout: '/',
  moviesPage: 'movies',
  movieDetailsPage: 'movies/:movieId',
  castPage: 'cast',
  reviewsPages: 'reviews',
  notFoundPage: '*'
};

export const App = () => {
  return (
    <>
      <Suspense fallback={<>{<Loader/>}</>}>
      <Routes>
          <Route path={urls.layout} element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path={urls.moviesPage} element={<MoviesPage />} />
          <Route path={urls.movieDetailsPage} element={<MovieDetailsPage />}>
              <Route path={urls.castPage} element={<Suspense fallback={<>{<Loader/>}</>}><CastPage /></Suspense>} />
              <Route path={urls.reviewsPages} element={<Suspense fallback={<>{<Loader/>}</>}><ReviewsPages /></Suspense>} />
          </Route>
          <Route path={urls.notFoundPage} element={<NotFoundPage/>}/>
        </Route >
        </Routes>
        </Suspense>
    </>
  );
};
