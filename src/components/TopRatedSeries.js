import React, { useContext, useEffect, useState } from "react";
import "./CSS/MoviesItems.css";
import "./CSS/MediaQueries/HomeMedia.css";
import placeholder from "../Photos/movie_placeholder.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { HomeContext } from "../Api/HomeApi";
export default function TopRatedSeries() {
  const { topRatedSeriesData, isLoading, img_url } = useContext(HomeContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: true,
  };

  return (
    <>
      <div className="container">
        <h3>TopRated Series!</h3>
        <div id="MoviesItems">
          <Slider {...settings}>
            {topRatedSeriesData.map(
              ({
                original_name,
                vote_count,
                release_date,
                title,
                poster_path,
                vote_average,
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
                        {String(original_name || title).length > 20
                          ? "..."
                          : ""}
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
    </>
  );
}
