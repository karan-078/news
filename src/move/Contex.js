import React, { createContext, useContext } from "react";
 import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./useFetch";
// api for fetch data
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [Queary, setQueary] = useState("don");
  const { loading, error, data:movie } = useFetch(`&s=${Queary}`);

  return (
    <AppContext.Provider value={{ loading, error, movie, Queary, setQueary }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use global

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
