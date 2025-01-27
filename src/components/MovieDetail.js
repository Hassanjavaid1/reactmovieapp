import React, { useContext, useEffect, useState } from "react";

import "./CSS/MovieDetail.css";
import "./CSS/MoviesItems.css";
import RecoMovie from './RecoMovie'

import "./CSS/SideMedia.css";
import "./CSS/Navbar.css";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { HomeContext } from "../Api/HomeApi";
import placeholder from "../Photos/movie_placeholder.png";
export default function MovieDetail() {
  const { img_url, Api_Key, Base_Url,backdropURL } = useContext(HomeContext);

  const [movieDetail, setmovieDetail] = useState("");
  const [movieTrailer, setmovieTrailer] = useState("");
  const [TrailerNotAvaliable, setTrailerNotAvaliable] = useState("");
  const [isVideoPlay, setisVideoPaly] = useState(false);
  const [isBackgroundBlur, setisBackgroundBlur] = useState(false);

  const { id } = useParams();

  const getMovieDetail = async () => {
    try {
      let res = await fetch(
        `${Base_Url}/movie/${id}?${Api_Key}&append_to_response=casts,crew,videos,images,releases`
      );
      let data = await res.json();
      setmovieDetail(data);
    } catch (err) {
      return console.error("Error Occured:", err);
    }
  };
  //Getting Movie trailer
  const getMovieTrailer = async () => {
    try {
      const url = await fetch(`${Base_Url}/movie/${id}/videos?${Api_Key}`);
      const data = await url.json();
      const officialTrailer = data.results.find(
        (video) => video.type == "Trailer"
      );
      if (officialTrailer) {
        setmovieTrailer(officialTrailer.key);
      } else {
        setTrailerNotAvaliable("Opps! Movie Trailer is not Avaliable!");
      }
    } catch (err) {
      setTrailerNotAvaliable("Something went wrong Try again...");
    }
  };
  const watchTrailer = () => {
    setisVideoPaly(true);
    setisBackgroundBlur(true);
    getMovieTrailer();
  };

  const handleExitClick = () => {
    setisVideoPaly(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: true,
  };


  const rating = Number(movieDetail.vote_average);
  return (
    <>
      <artical className="movie-detail">
        <div
          className="background_image"
          style={{
            backgroundImage: `url(${img_url + movieDetail.backdrop_path})`,
          }}
        >
          <div className="brightness">
            <figure id="movie_poster_detail">
              <img
                src={img_url + movieDetail.poster_path}
                className="movie_image_detail"
                alt={movieDetail.title}
              />
              <div className="movie_detail">
                <h1 className="heading">{movieDetail.title}</h1>
                <div className="spancontent">
                  <span className="movierating">
                    <i
                      className="fa-sharp fa-solid fa-star"
                      style={{ color: "#e4ff1a", display: "inline" }}
                    ></i>
                    {rating.toFixed(1)}
                  </span>
                  <span className="movie_length">{movieDetail.runtime}m</span>
                  <span className="movie_releasedate_detail">
                    {parseInt(movieDetail.release_date)}
                  </span>
                </div>
                <div className="marginTop">
                  {movieDetail.genres?.map(({ name }) => (
                    <span className="genre_filter">{name + " "}</span>
                  ))}
                </div>
                <h1 id="overview_title">Overview</h1>
                <p className="overview_detail">
                  {String(movieDetail.overview).slice(0, 400)}
                </p>
                <p className="Director">
                  <span id="word">Directed by:</span>
                  {movieDetail.casts?.crew.slice(0, 10).map(({ id, name }) => (
                    <span id="Director_span" key={id}>
                      {`${name}, `} etc.
                    </span>
                  ))}
                </p>

                {isVideoPlay ? (
                  <div id="movieTralier">
                    <div
                      className={`mainVideoContent ${
                        movieTrailer ? "open" : ""
                      }`}
                    >
                      <button className="exit-button" onClick={handleExitClick}>
                        X
                      </button>
                      <iframe
                        className="custom-tralier-player"
                        src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1&controls=1&modestbranding=1&showinfo=0`}
                        title={movieTrailer.title}
                        allow="encrypted-media"
                        rel="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <span id="notAvaliable">{TrailerNotAvaliable}</span>
                  </div>
                ) : (
                  <div className="videoBtn">
                    <div className="play-btn" onClick={watchTrailer}></div>
                    <span id="watchtralir">Watch Traliar!</span>
                  </div>
                )}
              </div>
            </figure>
            <div id="top_cast">
              <h1 id="cast_title">Top Cast!</h1>
              <div id="castdetail">
                <Slider {...settings}>
                  {movieDetail.casts?.cast.map(
                    ({ profile_path, name, character }) => (
                      <div className="movie_direction">
                        <img
                          src={
                            profile_path
                              ? backdropURL + profile_path
                              : placeholder
                          }
                          alt=""
                          className="cast_img"
                        />
                        <div className="marginTop">
                          <div className="cast_name">
                            {String(name).slice(0, 18)}
                            {String(name).length > 18 ? "..." : ""}
                          </div>
                          <div className="acting_name">
                            {character.slice(0, 18)}
                            {String(character).length > 18 ? "..." : ""}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>
          </div>
          <RecoMovie movieDetail={movieDetail} key={id} />
        </div>
      </artical>
    </>
  );
}
