import React from "react";
import { img_url } from "../App";
import { Link } from "react-router-dom";
import placeholder from "../Photos/movie_placeholder.png";
import { useMovieContext } from "../Component/MovieContext";
import "../Component/CSS/MediaFilterCard.css";

export default function FilterMovieCard({ genreName }) {
  const { filterMovie, infiniteScroll, MoviegenreName } = useMovieContext();
  return (
    <>
      <div className="Filtercontainer">
        <p id="genre_title_name">All {MoviegenreName} Movies!</p>
        <div id="FilterMoviesItems">
          <>
            {filterMovie.map(
              ({ title, poster_path, vote_average, release_date, id }) => (
                <div id="Filtercards">
                  <Link to={`/moviedetail/${id}`}>
                    <img
                      src={
                        poster_path === null ||
                        poster_path === undefined ||
                        poster_path === ""
                          ? placeholder
                          : img_url + poster_path
                      }
                      alt=""
                      id="Filter_movie_image"
                    />
                  </Link>
                  <h4 id="filter_title">
                    {String(title).slice(0, 19) + "..."}
                  </h4>
                  <div id="filter_movie_date_rating">
                    <div id="filter_movie_rating">
                      <i
                        className="fa-sharp fa-solid fa-star"
                        style={{ color: "#e4ff1a" }}
                      ></i>
                      {vote_average}
                    </div>
                    <span id="filter_movie_release_date">
                      {parseInt(release_date)}
                    </span>
                  </div>
                </div>
              )
            )}
          </>
        </div>
        <div className="infiniteScroller">
          <h1 className="filter_spinner">{infiniteScroll}</h1>
        </div>
      </div>
    </>
  );
}
