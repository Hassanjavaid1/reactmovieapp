import React, { useContext, useState } from "react";
import Gallery from "react-image-gallery";
import "./Demo.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaRegCirclePlay } from "react-icons/fa6";

import { HomeContext } from "../Api/HomeApi";
import { Link } from "react-router-dom";

function MovieBanner() {
  const { heroBanners, backdropURL } = useContext(HomeContext);

  const options = {
    slideInterval: 4000,
    showNav: false,
    lazyLoad: true,
    showFullscreenButton: false,
    showPlayButton: false,
  };

  const slideGallery = heroBanners.map(
    ({ backdrop_path, original_title, title, overview, id }) => ({
      id: id,
      original: backdropURL + backdrop_path,
      thumbnail: backdropURL + backdrop_path,
      title: original_title || title,
      description: overview || "No Overview Found",
    })
  );

  const gallerySlide = (item) => {
    return (
      <>
        <div className="custom-slide">
          <img
          src={item.original}
            className="image-gallery-image"
            alt={item.title}
          />
          <div className="slide-content">
              <h1 className="slide-title">{item.title}</h1>
              <p className="slide-desc">{item.description}</p>
      <Link to={`/MovieDetail/${item.id}`}>
            <button id="btn">
              <FaRegCirclePlay id="buttonPlay" />
              Watch Now
            </button>
    
      </Link>
          </div>
          </div>
      </>
    );
  };

  return (
    <>
      <Gallery items={slideGallery} renderItem={gallerySlide} {...options} />
    </>
  );
}

export default MovieBanner;
