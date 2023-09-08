import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [infiniteScroll, setInfiniteScroll] = useState(null);
  const [filterMovie, setFilterMovie] = useState([]);
  const [MoviegenreName, setMovieGenreName] = useState("");

  return (
    <MovieContext.Provider
      value={{
        filterMovie,
        setFilterMovie,
        infiniteScroll,
        setInfiniteScroll,
        MoviegenreName,
        setMovieGenreName,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
export function useMovieContext() {
  return useContext(MovieContext);
}
