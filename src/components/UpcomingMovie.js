import React, { useEffect, useState } from "react";
import "../components/CSS/MoviesItems.css";
import "../components/CSS/HomeMedia.css";
import { Link } from "react-router-dom";

import { Api_Key, img_url, Base_Url, fetchData } from "../App";
export default function UpcomingMovie() {
  async function getUpcomingMovies() {
    let url = Base_Url + "/movie/upcoming?" + Api_Key;
    let data = await fetchData(url);
    setmovies(data.results);
  }
  useEffect(() => {
    getUpcomingMovies();
  });
  const [movies, setmovies] = useState([]);
  return (
    <>
      <div className="container">
        <h3>Upcoming Movies!</h3>
        <div id="MoviesItems">
          {movies.map(
            ({ title, poster_path, vote_average, release_date, id }) => (
              <>
                <div id="cards">
                  <Link to={`/moviedetail/${id}`}>
                    <img src={img_url + poster_path} alt="" id="movie_image" />
                  </Link>
                  <h4>{String(title.slice(0, 19) + "...")}</h4>
                  <div id="movie_date_rating">
                    <div id="movie_rating">
                      <i
                        className="fa-sharp fa-solid fa-star"
                        style={{ color: "#e4ff1a" }}
                      ></i>
                      {vote_average.toFixed(1)}
                    </div>
                    <span id="movie_release_date">
                      {parseInt(release_date)}
                    </span>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
