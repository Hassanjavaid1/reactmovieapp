import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieFilter from "./components/MovieFilter";

import MovieBanner from "./components/MovieBanner";
import TrendingMovies from "./components/TrendingMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import UpcomingMovie from "./components/UpcomingMovie";
import FreeMovie from "./components/FreeMovie";
import Loader from "./components/Loader";
import MovieDetail from "./components/MovieDetail";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import FilterMovieCard from "./components/FilterMovieCard";
import { MovieProvider } from "./components/MovieContext";

const Base_Url = "https://api.themoviedb.org/3";
const Api_Key = "api_key=6758043f0537fea4f9c2c4e1534a395a";
const img_url = "https://image.tmdb.org/t/p/w500";
const fetchData = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error While fetching data:", error);
  }
};
function App() {
  const [loading, setLoading] = useState(true);
  const [toggleMode, setToggleMode] = useState("hidden");

  Promise.all([
    fetchData(Base_Url + "/trending/all/day?" + Api_Key),
    fetchData(Base_Url + "/top_rated?" + Api_Key),
    fetchData(Base_Url + "/upcoming?" + Api_Key),
    fetchData(Base_Url + "/trending/all/day?" + Api_Key),
  ]).then(() => {
    setLoading(false);
  });
  const HideShow = () => {
    if (toggleMode === "hidden") {
      setToggleMode("visible");
    } else {
      setToggleMode("hidden");
    }
  };
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Navbar
            burger={
              <div id="burger" onClick={HideShow}>
                <li></li>
                <li></li>
                <li></li>
              </div>
            }
          />

          {loading ? (
            <Loader />
          ) : (
            <>
              <Search />
              <MovieFilter Mode={toggleMode} HideShow={HideShow} />
              <div className="container">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <MovieBanner />
                        <TrendingMovies />
                        <TopRatedMovies />
                        <UpcomingMovie />
                        <FreeMovie />
                      </>
                    }
                  />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="/search" />
                  <Route path="/movie/:genreId" element={<FilterMovieCard />} />
                  <Route path="/MovieDetail/:id" element={<MovieDetail />} />
                </Routes>
                <></>
              </div>
            </>
          )}
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export { App, Base_Url, Api_Key, img_url, fetchData };
export default App;
