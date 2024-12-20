import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";
import HomeApi, { HomeContext } from "./Api/HomeApi";

const Navbar = lazy(() => import("./components/Navbar"));
//const MovieFilter = lazy(() => import("./components/MovieFilter"));
const MovieBanner = lazy(() => import("./components/MovieBanner"));
const TrendingMovies = lazy(() => import("./components/TrendingMovies"));
const TrendingSeries = lazy(() => import("./components/TrendingSeries"));
const TopRatedSeries = lazy(() => import("./components/TopRatedSeries"));
const TopRatedMovies = lazy(() => import("./components/TopRatedMovies"));

const MovieDetail = lazy(() => import("./components/MovieDetail"));
//const Search = lazy(() => import("./components/Search"));
//const FilterMovieCard = lazy(() => import("./components/FilterMovieCard"));
//const Main_footer = React.lazy(() => import("./components/Main_footer"));

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar/>
        <>
          {/* <Search /> */}
          {/* <MovieFilter Mode={toggleMode} HideShow={HideShow} /> */}
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MovieBanner />
                    <TrendingMovies />
                    <TrendingSeries />
                    <TopRatedMovies />
                    <TopRatedSeries />
                  </>
                }
              />
              {/* <Route path="/search" /> */}
              {/* <Route path="/movie/:genreId" element={<FilterMovieCard />} /> */}
              <Route path="/MovieDetail/:id" element={<MovieDetail />} />
            </Routes>
            <></>
            {/* <Main_footer /> */}
          </div>
        </>
      </Suspense>
    </>
  );
}

export default App;
