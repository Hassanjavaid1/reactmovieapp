import React, { createContext, useEffect, useState } from "react";

const HomeContext = createContext();

export default function HomeApi({ children }) {
  const Base_Url = "https://api.themoviedb.org/3";
  const Api_Key = "api_key=6758043f0537fea4f9c2c4e1534a395a";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const backdropURL = "https://image.tmdb.org/t/p/original";

  const [trendingMoviesData, setTrendingMoviesData] = useState([]);
  const [trendingSeriesData, setTrendingSeriesData] = useState([]);
  const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);
  const [topRatedSeriesData, setTopRatedSeriesData] = useState([]);
  const [heroBanners, setHeroBanners] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  async function fetchHomeApi() {
    try {
      setisLoading(true);
      const [
        heroResponse,
        trendingMoviesResponse,
        trendingSeriesResponse,
        topRatedMoviesResponse,
        topRatedSeriesResponse,
      ] = await Promise.all([
        fetch(Base_Url + "/discover/movie?" + Api_Key),
        fetch(Base_Url + "/trending/all/day?" + Api_Key),
        fetch(Base_Url + "/trending/tv/week?" + Api_Key),
        fetch(Base_Url + "/movie/top_rated?" + Api_Key),
        fetch(Base_Url + "/tv/top_rated?" + Api_Key),
      ]);

      // Parse the JSON responses
      const heroMovies = await heroResponse.json();
      const trendingMovies = await trendingMoviesResponse.json();
      const trendingSeries = await trendingSeriesResponse.json();
      const topRatedMovies = await topRatedMoviesResponse.json();
      const topRatedSeries = await topRatedSeriesResponse.json();

      setHeroBanners(heroMovies.results);
      setTrendingMoviesData(trendingMovies.results);
      setTrendingSeriesData(trendingSeries.results);
      setTopRatedMoviesData(topRatedMovies.results);
      setTopRatedSeriesData(topRatedSeries.results);

      setisLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setisLoading(false);
    }
  }
  useEffect(() => {
    fetchHomeApi();
  }, []);
  if (isLoading) {
    return "";
  }
  return (
    <>
      <HomeContext.Provider
        value={{
          trendingMoviesData,
          trendingSeriesData,
          topRatedMoviesData,
          topRatedSeriesData,
          heroBanners,
          isLoading,
          backdropURL,
          img_url,
          Api_Key,
          Base_Url,
        }}
      >
        {children}
      </HomeContext.Provider>
    </>
  );
}

export { HomeContext };
