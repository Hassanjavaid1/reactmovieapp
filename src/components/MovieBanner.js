import React, { useContext, useState } from 'react'
import Gallery from "react-image-gallery";
import './Demo.css'
import "react-image-gallery/styles/css/image-gallery.css";
import { HomeContext } from '../Api/HomeApi';

function MovieBanner() {

  const { heroBanners, backdropURL } = useContext(HomeContext)

  const options = {
    slideInterval: 4000,
    showNav: false,
    lazyLoad: true,
    showFullscreenButton: false,
    showPlayButton: false,
  }

  const slideGallery = heroBanners.map(({ backdrop_path, original_title, title, overview }) => ({
    original: backdropURL + backdrop_path,
    thumbnail: backdropURL + backdrop_path,
    title: original_title || title,
    description: overview || 'No Overview Found',
  }))

  const gallerySlide = (item) => {

    return (
      <>
        <div className="custom-slide">
          <img src={item.original} className='image-gallery-image' alt={item.title} />
          <div className="slide-content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      </>

    )

  }


  return (
    <>
      <Gallery items={slideGallery} renderItem={gallerySlide} {...options} />
    </>
  )
}

export default MovieBanner
