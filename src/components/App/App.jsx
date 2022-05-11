
import { Routes, Route } from "react-router-dom";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import  Layout  from "../Layout/Layout";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage/>}/>
          <Route />
        </Route >
      </Routes>
    </>
  );
};
