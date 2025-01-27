import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import { Routes, Route } from "react-router-dom";
import HomeApi, { HomeContext } from "./Api/HomeApi";

const Navbar = lazy(() => import("./Components/Navbar"));
//const MovieFilter = lazy(() => import("./Components/MovieFilter"));
const MovieBanner = lazy(() => import("./Components/MovieBanner"));
const TrendingMovies = lazy(() => import("./Components/TrendingMovies"));
const TrendingSeries = lazy(() => import("./Components/TrendingSeries"));
const TopRatedSeries = lazy(() => import("./Components/TopRatedSeries"));
const TopRatedMovies = lazy(() => import("./Components/TopRatedMovies"));
const Demo = lazy(()=> import("./Components/Demo"))
const MovieDetail = lazy(() => import("./Components/MovieDetail"));
//const Search = lazy(() => import("./Components/Search"));
//const FilterMovieCard = lazy(() => import("./Components/FilterMovieCard"));
//const Main_footer = React.lazy(() => import("./Components/Main_footer"));

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
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
              <Route path="/Demo" element={<Demo />} />
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
