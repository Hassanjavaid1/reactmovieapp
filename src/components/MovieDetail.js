import React, { useEffect, useState } from "react";

import "./CSS/MovieDetail.css";
import RecoMovie from "../components/RecoMovie";
import "./CSS/MediaMovieDetail.css";
import "../components/CSS/SideMedia.css";
import "../components/CSS/Navbar.css";
import { img_url, fetchData, Api_Key, Base_Url } from "../App";

import { useParams } from "react-router-dom";
import Slider from "react-slick";
export default function MovieDetail() {
  const [movieDetail, setmovieDetail] = useState("");
  const [movieTrailer, setmovieTrailer] = useState("");
  const [TrailerNotAvaliable, setTrailerNotAvaliable] = useState("");
  const [isVideoPlay, setisVideoPaly] = useState(false);
  const [isBackgroundBlur, setisBackgroundBlur] = useState(false);
  const { id } = useParams();
  const getMovieDetail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=6758043f0537fea4f9c2c4e1534a395a&append_to_response=casts,crew,videos,images,releases`;
    let data = await fetchData(url);
    setmovieDetail(data);
  };
  //Getting Movie tralier
  const getMovieTrailer = async () => {
    const url = `${Base_Url}/movie/${id}/videos?${Api_Key}`;
    const data = await fetchData(url);

    const officialTrailer = data.results.find(
      (video) => video.type === "Trailer"
    );
    if (officialTrailer) {
      setmovieTrailer(officialTrailer.key);
    } else {
      setTrailerNotAvaliable("Oops! Movie Tralier is not Avaliable!");
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

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const img_base_url = "https://image.tmdb.org/t/p/w500";
  const cast_profile_url = "https://image.tmdb.org/t/p/original/";
  const rating = Number(movieDetail.vote_average);
  return (
    <>
      <artical className="movie-detail">
        <div
          className="background_image"
          style={{
            backgroundImage: `url(${img_base_url + movieDetail.backdrop_path})`,
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
                {movieDetail.genres?.map(({ name }) => (
                  <span id="genre_filter">{name + " "}</span>
                ))}
                <h1 id="overview_title">Overview</h1>
                <p className="overview_detail">
                  {String(movieDetail.overview).slice(0, 400)}
                </p>
                <p className="Director">
                  <span id="word">Directed by:</span>
                  {movieDetail.casts?.crew.slice(0, 2).map(({ id, name }) => (
                    <span id="Director_span" key={id}>
                      {`${name} , `}
                    </span>
                  ))}
                  ...
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
                {movieDetail.casts?.cast.map(({ profile_path, name, character }) => (
                    <div className="movie_direction">
                      <img
                        src={cast_profile_url + profile_path}
                        alt=""
                        id="cast_img"
                      />
                      <div id="cast_name">{name}</div>
                      <div id="acting_name">
                        {character.slice(0, 10) + "..."}
                      </div>
                    </div>
                  ))}
                  </Slider>
              </div>
            </div>
          </div>
          <RecoMovie movieDetail={movieDetail} key={id}/>
        </div>
      </artical>
    </>
  );
}
