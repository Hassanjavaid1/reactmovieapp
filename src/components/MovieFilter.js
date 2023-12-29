import React, { useEffect, useState } from "react";
import { fetchData, Api_Key } from "../App";
import "./CSS/FilterIcons.css";
import "./CSS/FilterMovieCard.css";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScrollbar from "../components/InfiniteScrollbar";

import { MdOutlineSportsKabaddi } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { RiBearSmileLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { GiPistolGun } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { GiDramaMasks } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { GiMagicBroom } from "react-icons/gi";
import { MdManageHistory } from "react-icons/md";
import { GiWitchFlight } from "react-icons/gi";
import { ImFileMusic } from "react-icons/im";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { GiJetFighter } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiSwordLine } from "react-icons/ri";
import { FaFortAwesome } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { MdOutlineExitToApp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useMovieContext } from "./MovieContext";

export default function MovieFilter(props) {
  const { filterMovie, setFilterMovie, setInfiniteScroll, setMovieGenreName } =
    useMovieContext();
  const [getGenre, setgetGenre] = useState([]);
  const [genreName, setGenreName] = useState([]);
  const [prevGenreId, setPrevGenreId] = useState("");

  const initialPageNum = 1;
  const [PageNum, setPageNum] = useState(initialPageNum);
  const [HasMore, setHasMore] = useState(true);
  const [genreId, setGenreId] = useState("");
  const [sidebarScroll, setSidebarScroll] = useState("visible");

  const fetchGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?${Api_Key}&language=en-US`;
    const data = await fetchData(url);
    setgetGenre(data.genres);
  };

  const handleFilterMovies = async (
    genreId,
    genreName,
    initialLoad = false
  ) => {
    const newPageNum = initialLoad ? 1 : PageNum + 1;
    const url = `https://api.themoviedb.org/3/discover/movie?${Api_Key}&sort_by=popularity.desc&include_adult=false&page=${newPageNum}&with_genres=${genreId}`;

    try {
      const PageResponse = await fetchData(url);

      if (initialLoad || prevGenreId !== genreId) {
        setFilterMovie(PageResponse.results);
      } else {
        setFilterMovie((prevMovies) => [
          ...prevMovies,
          ...PageResponse.results,
        ]);
      }

      setPageNum(newPageNum);
      setGenreId(genreId);
      setGenreName(genreName);
      setPrevGenreId(genreId);

      setHasMore(newPageNum < PageResponse.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const handleLoadMore = () => {
    handleFilterMovies(genreId, genreName);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setSidebarScroll(currentScrollPos);
  };

  useEffect(() => 
  {
    fetchGenre();
    setInfiniteScroll(
      <InfiniteScroll
        dataLength={filterMovie.length}
        next={handleLoadMore}
        hasMore={HasMore}
        style={{ overflow: "hidden" }}
        loader={<InfiniteScrollbar />}
      />
    );
    setMovieGenreName(genreName);
  }, []);
  //filterMovie.length, HasMore, handleLoadMore, genreName

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="genre_name">
        <div
          className={props.Mode}
          id={`${sidebarScroll ? "sidebarScrollHeight" : ""}`}
        >
          <div id="exit_door" onClick={props.HideShow}>
            <MdOutlineExitToApp />
          </div>
          <h2 id="genres">
            <RiMovie2Line /> Genres!
          </h2>
          {getGenre.map((genre) => (
            <div id="genre_container" key={genre.id}>
              <div
                id="genre_content"
                onClick={() => handleFilterMovies(genre.id, genre.name)}
              >
                <NavLink to={`/movie/${genre.id}`}>
                  <div className="genre_list">
                    {genre.name === "Action" ? (
                      <MdOutlineSportsKabaddi className="genreIcon" />
                    ) : null}
                    {genre.name === "Adventure" ? (
                      <BsClockHistory className="genreIcon" />
                    ) : null}
                    {genre.name === "Animation" ? (
                      <RiBearSmileLine className="genreIcon" />
                    ) : null}
                    {genre.name === "Comedy" ? (
                      <BsEmojiSmile className="genreIcon" />
                    ) : null}
                    {genre.name === "Crime" ? (
                      <GiPistolGun className="genreIcon" />
                    ) : null}
                    {genre.name === "Documentary" ? (
                      <BiCameraMovie className="genreIcon" />
                    ) : null}
                    {genre.name === "Drama" ? (
                      <GiDramaMasks className="genreIcon" />
                    ) : null}
                    {genre.name === "Family" ? (
                      <MdFamilyRestroom className="genreIcon" />
                    ) : null}
                    {genre.name === "Fantasy" ? (
                      <GiMagicBroom className="genreIcon" />
                    ) : null}
                    {genre.name === "History" ? (
                      <MdManageHistory className="genreIcon" />
                    ) : null}
                    {genre.name === "Horror" ? (
                      <GiWitchFlight className="genreIcon" />
                    ) : null}
                    {genre.name === "Music" ? (
                      <ImFileMusic className="genreIcon" />
                    ) : null}
                    {genre.name === "Mystery" ? (
                      <GiPoliceOfficerHead className="genreIcon" />
                    ) : null}
                    {genre.name === "Romance" ? (
                      <BsFillBalloonHeartFill className="genreIcon" />
                    ) : null}
                    {genre.name === "Science Fiction" ? (
                      <GiJetFighter className="genreIcon" />
                    ) : null}
                    {genre.name === "TV Movie" ? (
                      <SlScreenDesktop className="genreIcon" />
                    ) : null}
                    {genre.name === "Thriller" ? (
                      <FaSkullCrossbones className="genreIcon" />
                    ) : null}
                    {genre.name === "War" ? (
                      <RiSwordLine className="genreIcon" />
                    ) : null}
                    {genre.name === "Western" ? (
                      <FaFortAwesome className="genreIcon" />
                    ) : null}
                    <span id="all_genre_name">{genre.name}</span>
                  </div>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <></>
      </div>
    </>
  );
}
