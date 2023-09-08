import React, { useState, useEffect } from "react";
import { img_url, fetchData } from "../App";
import { useParams } from "react-router-dom";
import { Base_Url, Api_Key } from "../App";
import placeholder from "../Photos/movie_placeholder.png";

export default function RecoMovie({ movieDetail }) {
  const { id } = useParams();
  const [RecoMovies, setRecoMovies] = useState([]);
  const [VideoNotAvaliable, setVideoNotAvaliable] = useState(
    "Related Videos Not Available!"
  );
  const [RecoVideoNotAvaliable, setRecoNotAvaliable] = useState(
    "No Recommended Video Found!"
  );
  const getRecoMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=6758043f0537fea4f9c2c4e1534a395a`;
    let data = await fetchData(url);
    setRecoMovies(data.results);
  };
  const getMovieVideos = async () => {
    const url = `${Base_Url}/movie/${id}/videos?${Api_Key}`;
    const data = await fetchData(url);
  };
  useEffect(() => {
    getRecoMovies();
    getMovieVideos();
  }, []);
  const videoKeys = ["video_key_1"];
  const videoKey = movieDetail?.videos?.results[0]?.key;
  const name = movieDetail?.videos?.results[0]?.name.slice(0, 23);

  const videoKey2 = movieDetail?.videos?.results[1]?.key;
  const name2 = movieDetail?.videos?.results[1]?.name.slice(0, 23);
  const videoKey3 = movieDetail?.videos?.results[2]?.key;
  const name3 = movieDetail?.videos?.results[2]?.name.slice(0, 23);
  const videoKey4 = movieDetail?.videos?.results[3]?.key;
  const name4 = movieDetail?.videos?.results[3]?.name.slice(0, 23);

  if (RecoMovies === "" || RecoMovies == null) {
    console.log("reco movie not found");
  }
  return (
    <>
      <div id="officialVideos">
        <h1 id="movie_related_title">Movie Related Videos!</h1>
        <div className="video-related-container">
          {videoKey === "" || videoKey == null ? (
            <h1 id="video_not_found">{VideoNotAvaliable}</h1>
          ) : (
            <>
              <div className="flex_direction">
                {videoKeys.map((index) => (
                  <iframe
                    key={index}
                    className="custom-video-player"
                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1&modestbranding=1&showinfo=0`}
                    title="Official Movie Trailer"
                    frameBorder="0"
                    allow="encrypted-media"
                    rel="0"
                    allowFullScreen
                  ></iframe>
                ))}
                <h1 id="video_name">{name + "..."}</h1>
              </div>
              <div className="video-related-container">
                <div className="flex_direction">
                  {videoKeys.map((index) => (
                    <iframe
                      key={index}
                      className="custom-video-player"
                      src={`https://www.youtube.com/embed/${videoKey2}?autoplay=1&controls=1`}
                      title={`Movie Trailer`}
                      frameBorder="0"
                      allow="encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ))}
                  <h1 id="video_name">{name2 + "..."}</h1>
                </div>
              </div>
              <div className="video-related-container">
                <div className="flex_direction">
                  {videoKeys.map((index) => (
                    <iframe
                      key={index}
                      className="custom-video-player"
                      src={`https://www.youtube.com/embed/${videoKey3}?autoplay=1&controls=1`}
                      title={`Movie Trailer`}
                      frameBorder="0"
                      allow="encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ))}
                  <h1 id="video_name">{name3 + "..."}</h1>
                </div>
              </div>
              <div className="video-related-container">
                <div className="flex_direction">
                  {videoKeys.map((index) => (
                    <iframe
                      key={index}
                      className="custom-video-player"
                      src={`https://www.youtube.com/embed/${videoKey4}?autoplay=0&controls=1`}
                      title={`Movie Trailer`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      width="560"
                      height="315"
                    ></iframe>
                  ))}

                  <h1 id="video_name">{name4 + "..."}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div id="RecoMoviess">
        <h2 className="heading">You May Also Like!</h2>
        <div className="mainContent">
          {RecoMovies.map(
            ({ poster_path, title, release_date, vote_average, id }) => (
              <div id="RecoMoviesdirection">
                {RecoMovies === "" ||
                RecoMovies == null ||
                RecoMovies === undefined ? (
                  RecoVideoNotAvaliable
                ) : (
                  <>
                    <a href={`/moviedetail/${id}`}>
                      <img
                        className="movie_img_reco"
                        src={
                          poster_path == null ||
                          poster_path === undefined ||
                          poster_path === ""
                            ? placeholder
                            : img_url + poster_path
                        }
                        alt=""
                      />
                    </a>
                    <div className="title-reco">
                      <h3 className="reco_title">
                        {String(title).slice(0, 19) + "..."}
                      </h3>
                    </div>
                    <div className="reco_rating_date">
                      <div className="reco_rating">
                        <i
                          className="fa-sharp fa-solid fa-star"
                          style={{ color: "#e4ff1a" }}
                        ></i>
                        {vote_average.toFixed(1)}
                      </div>
                      <span className="reco_release_date">
                        {parseInt(release_date)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
