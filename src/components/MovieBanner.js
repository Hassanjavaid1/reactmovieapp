import React, { useEffect, useState } from "react";
import buttonPlay from "../Photos/buttonPlay.png";
import { Link } from "react-router-dom";
import { Api_Key, Base_Url, fetchData } from "../App";
import "../components/CSS/HomeMedia.css";
import "../components/CSS/MediaNavbar.css";
const backdropURL = "https://image.tmdb.org/t/p/original";
export default function MovieBanner() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const [posterIndex, setPosterIndex] = useState(0);

  async function fetchMovies() {
    let url = Base_Url + "/discover/movie?" + Api_Key;
    let data = await fetchData(url);
    setBannerMovie(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (bannerMovie && bannerMovie.length > 0) {
      const interval = setInterval(() => {
        setPosterIndex((prevIndex) => (prevIndex + 1) % bannerMovie.length);
      }, 6000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [bannerMovie]);

  if (!bannerMovie || bannerMovie.length === 0) {
    return <div></div>;
  }

  const currentMovie = bannerMovie[posterIndex];

  return (
    <div id="backdrop">
      <div
        id="background_poster"
        style={{
          backgroundImage: `url(${backdropURL}${currentMovie.backdrop_path})`,
        }}
      >
        <div className="banner_fadeBottom"></div>
        <div id="banner_detail">
          <p id="banner_title">{currentMovie.title.slice(0, 30)}</p>
          <div className="DateRating">
            <div id="bannerRating">
              <i
                className="fa-sharp fa-solid fa-star"
                style={{ color: "#e4ff1a" }}
              ></i>
              {currentMovie.vote_average.toFixed(1)}
            </div>
            <div className="releaseDate">
              {parseInt(currentMovie.release_date)}
            </div>
          </div>
          <div className="bannerOverview">
            {currentMovie.overview.slice(0, 200)}...
          </div>
          <Link className="Link" to={`/moviedetail/${currentMovie.id}`}>
            <div className="buttonSection">
              <button id="btn">
                <img src={buttonPlay} alt="" id="buttonPlay" />
                Watch Now!
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
