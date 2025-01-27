import React, { useState, useEffect } from "react";
import movie_placeholder from "../Photos/movie_placeholder.png";
import { Api_Key, fetchData, img_url } from "../App";
import { Link, useLocation } from "react-router-dom";
import "../Component/CSS/Search.css";
import InfiniteScroll from "react-infinite-scroll-component";
import "./CSS/Loader.css";
import "../Component/CSS/SearchMedia.css";
import "../Component/CSS/SideMedia.css";
import "../Component/CSS/Navbar.css";
import "../Component/CSS/MediaNavbar.css";
import InfiniteScrollbar from "./InfiniteScrollbar";

import { useNavigate } from "react-router-dom";

import "./CSS/MoviesItems.css";

export default function Search(props) {
  const [searchResult, setsearchResult] = useState([]);
  const [searchquery, setsearchquery] = useState("");
  const [PageNum, setPageNum] = useState(1);
  const [HasMore, setHasMore] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [dataLength, setDataLength] = useState(searchResult.length);
  const [noResultFound, setnoResultFound] = useState("");
  const [noMoreResult, setnoMore] = useState("");

  async function searchbar() {
    let url = `https://api.themoviedb.org/3/search/multi?${Api_Key}&query=${searchquery}&sort_by=popularity.desc&include_adult=false&page=${PageNum}`;
    let data = await fetchData(url);
    setsearchResult(data.results);
    setisLoading(false);
  }

  let NextPageResult = async () => {
    let url = `https://api.themoviedb.org/3/search/multi?${Api_Key}&query=${searchquery}&sort_by=popularity.desc&include_adult=false&page=${PageNum}`;
    let data = await fetchData(url);

    if (data.results.length === 0) {
      setHasMore(false);
    } else {
      setsearchResult((prevResults) => [...prevResults, ...data.results]);
      setPageNum((prev) => prev + 1);
    }
  };
  const ClearResult = () => {
    setsearchResult([]);
    setsearchquery("");
  };
  let navigate = useNavigate();
  const location = useLocation();

  const handleOnChange = (e) => {
    const newSearchQuery = e.target.value;
    setsearchquery(newSearchQuery);

    if (newSearchQuery === "") {
      navigate("/");
    } else {
      navigate(`/search?query=${newSearchQuery}`);
    }
  };
  useEffect(() => {
    let timeout;
    if (searchquery) {
      timeout = setTimeout(() => {
        searchbar();
        setPageNum(1);
        setHasMore(true);
      }, 1000);
    } else {
      setsearchResult([]);
    }
    setnoResultFound("No Result found for This Search!");
    setDataLength(searchResult.length);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [searchquery]);
  return (
    <>
      <div id="searchContainer">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            required
            type="search"
            placeholder="Search Movies"
            value={searchquery}
            onChange={handleOnChange}
          />
          <i className="fa fa-search"></i>
        </form>
      </div>
      {searchquery !== "" && (
        <div className="Searchcontainer">
          {searchResult === null ||
          searchResult === undefined ||
          searchResult.length === 0 ? (
            <h1 id="no_result_found_search">{noResultFound}</h1>
          ) : (
            <>
              <h3 id="search_title">Show Result for: {searchquery}!</h3>
              <div id="SearchMovies">
                <>
                  <div id="Searchcards">
                    {searchResult.map(
                      ({
                        title,
                        poster_path,
                        vote_average,
                        release_date,
                        id,
                        index,
                      }) => (
                        <div className="searchResults">
                          <>
                            <Link className="Link" to={`/moviedetail/${id}`}>
                              {location.pathname === `/moviedetail/${id}` ||
                              location.pathname === "/"
                                ? ClearResult()
                                : ""}
                              <img
                                key={index}
                                src={
                                  poster_path == null ||
                                  poster_path === "" ||
                                  poster_path === undefined
                                    ? movie_placeholder
                                    : img_url + poster_path
                                }
                                alt=""
                                id="search_movie_image"
                              />
                            </Link>
                            <h4 id="search_movie_name" key={index}>
                              {String(title).slice(0, 19) + "..."}
                            </h4>
                            <div id="search_date_rating">
                              <div id="movie_rating_search">
                                <i
                                  className="fa-sharp fa-solid fa-star"
                                  style={{ color: "#e4ff1a" }}
                                ></i>
                                {Number(vote_average).toFixed(1)}
                              </div>
                              <span id="movie_release_date_search">
                                {parseInt(release_date)}
                              </span>
                            </div>
                          </>
                        </div>
                      )
                    )}
                  </div>
                </>
              </div>
            </>
          )}
          <InfiniteScroll
            dataLength={searchResult.length}
            next={NextPageResult}
            style={{ overflow: "hidden" }}
            hasMore={true}
            loader={<InfiniteScrollbar />}
          ></InfiniteScroll>
        </div>
      )}
    </>
  );
}
