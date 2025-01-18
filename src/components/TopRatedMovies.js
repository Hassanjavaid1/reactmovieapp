import React, { useContext, useEffect, useState } from "react";
import "../components/CSS/MoviesItems.css";
import { Link } from "react-router-dom";
import placeholder from "../Photos/movie_placeholder.png";
import "../components/CSS/MediaQueries/HomeMedia.css";
import Slider from "react-slick";

import { HomeContext } from "../Api/HomeApi";

export default function TopRatedMovies() {
  const { topRatedMoviesData, isLoading, img_url } = useContext(HomeContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: true,
  };

  return (
    <div className="container">
      <h3>TopRated Movies!</h3>
      <div id="MoviesItems">
        <Slider {...settings}>
          {topRatedMoviesData.map(
            ({
              title,
              original_name,
              vote_count,
              poster_path,
              vote_average,
              release_date,
              first_air_date,
              id,
            }) => (
              <>
                <div id="cards">
                  <>
                    <Link to={`/moviedetail/${id}`}>
                      <img
                        src={img_url + poster_path || placeholder}
                        alt=""
                        id="movie_image"
                      />
                    </Link>
                    <h4>
                      {String(original_name || title).slice(0, 20)}
                      {String(original_name || title).length > 20 ? "..." : ""}
                    </h4>
                    <div id="movie_date_rating">
                      <div id="movie_rating">
                        <i
                          className="fa-sharp fa-solid fa-star"
                          style={{ color: "#e4ff1a" }}
                        ></i>
                        {parseInt(vote_average || vote_count).toFixed(1)}
                      </div>
                      <span className=" card_releaseDate">
                        {parseInt(release_date || first_air_date)}
                      </span>
                    </div>
                  </>
                </div>
              </>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
