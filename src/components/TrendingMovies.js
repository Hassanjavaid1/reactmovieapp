import React, { useContext, useEffect, useState } from "react";
import "../components/CSS/MoviesItems.css";
import "../components/CSS/MediaQueries/HomeMedia.css";
import placeholder from "../Photos/movie_placeholder.png";
import { Link } from "react-router-dom";
import { HomeContext } from "../Api/HomeApi";
import Slider from "react-slick";

export default function TrendingMovies() {
  const { trendingMoviesData, isLoading, img_url } = useContext(HomeContext);
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
      <h3>Trending Movies!</h3>
      <div id="MoviesItems">
        <Slider {...settings}>
          {trendingMoviesData.map(
            ({ original_name,title, poster_path,first_air_date, vote_average, release_date, id }) => (
              <div id="cards" key={vote_average}>
                <>
                  <Link to={`/moviedetail/${id}`}>
                    <img
                      src={img_url + poster_path || placeholder}
                      alt=""
                      id="movie_image"
                    />
                  </Link>
                  <h4>{String(original_name || title).slice(0, 19)}{String(original_name || title).length > 19?'...':""}</h4>
                  <div id="movie_date_rating">
                    <div id="movie_rating">
                      <i
                        className="fa-sharp fa-solid fa-star"
                        style={{ color: "#e4ff1a" }}
                      ></i>
                      {vote_average.toFixed(1)}
                    </div>
                    <span className="card_releaseDate">
                      {parseInt(release_date || first_air_date)}
                    </span>
                  </div>
                </>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
