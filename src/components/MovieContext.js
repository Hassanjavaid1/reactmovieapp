import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [infiniteScroll, setInfiniteScroll] = useState(null);
  const [filterMovie, setFilterMovie] = useState([]);
  const [MoviegenreName, setMovieGenreName] = useState("");
  const [isLoading,setisLoading] = useState(true)

  return (
    <MovieContext.Provider
      value={{
        filterMovie,
        setFilterMovie,
        infiniteScroll,
        setInfiniteScroll,
        MoviegenreName,
        setMovieGenreName,
        isLoading,
        setisLoading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
export function useMovieContext() {
  return useContext(MovieContext);
}
