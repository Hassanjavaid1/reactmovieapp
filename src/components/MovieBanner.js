import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/MediaQueries/HomeMedia.css";
import "../components/CSS/MediaQueries/MediaNavbar.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import HomeApi, { HomeContext } from "../Api/HomeApi";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function MovieBanner() {
  const { backdropURL, heroBanners, isLoading } = useContext(HomeContext);

  return (
    <div id="backdrop">
      <Slide duration={30000} transitionDuration={500}>
        {heroBanners.map((slideImage, index) => (
          <>
            <div
              key={index}
              id="background_poster"
              style={{
                backgroundImage: `url(${backdropURL}${slideImage.backdrop_path})`,
              }}
            >
              <div className="banner_fadeBottom"></div>
              <div id="banner_detail">
                <p id="banner_title">{slideImage.title.slice(0, 30)}</p>
                <div className="DateRating">
                  <div id="bannerRating">
                    <i
                      className="fa-sharp fa-solid fa-star"
                      style={{ color: "#e4ff1a" }}
                    ></i>
                    {slideImage.vote_average.toFixed(1)}
                  </div>
                  <div className="releaseDate">
                    {parseInt(slideImage.release_date)}
                  </div>
                </div>
                <div className="bannerOverview">
                  {slideImage.overview.slice(0, 200)}...
                </div>
                <Link className="Link" to={`/moviedetail/${slideImage.id}`}>
                  <div className="buttonSection">
                    <button id="btn">
                      <FaRegCirclePlay id="buttonPlay" />
                      Watch Now
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </>
        ))}
      </Slide>
    </div>
  );
}
