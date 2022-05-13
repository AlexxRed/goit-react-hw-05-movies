import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { infoStyle } from "services/userInformator";
infoStyle();

const Layout = lazy(() => import("../Layout/Layout" /* webpackChunkName: "layout" */));
const HomePage = lazy(() => import("pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage" /* webpackChunkName: "cast" */));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "cast" */));
const CastPage = lazy(() => import("pages/CastPage/CastPage" /* webpackChunkName: "cast" */));
const ReviewsPages = lazy(() => import("pages/ReviewsPage/ReviewsPage" /* webpackChunkName: "reviews" */));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "not-found" */));







export const App = () => {
  return (
    <>
      <Suspense fallback={<></>}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={
                <Suspense fallback={<></>}>
                  <CastPage />
                </Suspense>} />
              <Route path="reviews" element={
                <Suspense fallback={<></>}>
                  <ReviewsPages />
                </Suspense>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route >
        </Routes>
        </Suspense>
    </>
  );
};
