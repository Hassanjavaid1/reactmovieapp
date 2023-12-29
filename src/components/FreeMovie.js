import React, { useEffect, useState } from "react";
import "../components/CSS/MoviesItems.css";
import { Link } from "react-router-dom";
import placeholder from "../Photos/movie_placeholder.png";
import "../components/CSS/HomeMedia.css";
import Slider from "react-slick";

import { Api_Key, img_url, Base_Url, fetchData } from "../App";
import HomeCart_Skeleton from "./HomeCart_Skeleton";

export default function FreeMovie({isLoading}) {
  async function getFreeMovies() {
    let url =
      Base_Url + "/discover/movie?" + Api_Key + "&watch/providers=8|123";
    let data = await fetchData(url);
    setmovies(data.results);
  }
  useEffect(() => {
    getFreeMovies();
  }, []);
  const [movies, setmovies] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <h3>Free to Watch!</h3>
      <div id="MoviesItems">
        <Slider {...settings}>
        {movies.map(
          ({ title, poster_path, vote_average, release_date, id }) => (
            <>
              <div id="cards">
            {isLoading?(<HomeCart_Skeleton/>):(
              <>
                <Link to={`/moviedetail/${id}`}>
                  <img
                    src={
                      poster_path === "" ||
                      poster_path == null ||
                      poster_path === undefined
                        ? placeholder
                        : img_url + poster_path
                    }
                    alt=""
                    id="movie_image"
                  />
                </Link>
                <h4>{String(title).slice(0, 19) + "..."}</h4>
                <div id="movie_date_rating">
                  <div id="movie_rating">
                    <i
                      className="fa-sharp fa-solid fa-star"
                      style={{ color: "#e4ff1a" }}
                    ></i>
                    {vote_average.toFixed(1)}
                  </div>
                  <span id="movie_release_date">{parseInt(release_date)}</span>
                </div>
                </>
            )}
              </div>
            </>
          )
        )}
        </Slider>
      </div>
    </div>
  );
}
