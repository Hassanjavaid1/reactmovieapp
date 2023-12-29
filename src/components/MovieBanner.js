import React, { useEffect, useState } from "react";
import buttonPlay from "../Photos/buttonPlay.png";
import { Link } from "react-router-dom";
import { Api_Key, Base_Url, fetchData } from "../App";
import "../components/CSS/HomeMedia.css";
import "../components/CSS/MediaNavbar.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Skeleton from "react-loading-skeleton";

const backdropURL = "https://image.tmdb.org/t/p/original";
export default function MovieBanner({isLoading,setisLoading}) {
  const [bannerMovie, setBannerMovie] = useState([]);

  async function fetchMovies() {
    let url = Base_Url + "/discover/movie?" + Api_Key;
    let data = await fetchData(url);
    setBannerMovie(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  if (!bannerMovie || bannerMovie.length === 0) {
    return <div></div>;
  }


  
  return (
    <div id="backdrop">
    <Slide>
        {bannerMovie.map((slideImage, index)=> (
          <>
          
          {isLoading?(
           <Skeleton height={'35rem'} style={{    basecolor: '#adadad',
            highlightcolor:' #9d9d9d'}}/>
          ):( 
          <div key={index}
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
                <img src={buttonPlay} alt="" id="buttonPlay" />
                Watch Now!
              </button>
            </div>
          </Link>
        </div>
        </div>
        )}
        </>

      ))}
      </Slide>
    </div>
  );
}
