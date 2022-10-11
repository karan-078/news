import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};
const API_ENDPOINT = "https://opentdb.com/api.php?";
const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=30&difficulty=medium&type=multiple";
  const AppContext = createContext();
const AppProvider = ({ children }) => {
const [wating, setWating] = useState(true);
const [loading, setLoading] = useState(false);
const [qustion, setQustion] = useState([]);
const [index, setIndex] = useState(0);
const [correct, setCorrect] = useState(0);
const [error, setError] = useState(false);
const [modalopen, setModalopen] = useState(false);

const fetchQustion = async(url)=>{
    setLoading(true)
    setWating(false)

    const response = axios(url).catch((err)=> console.log(err))
    if(response){
        const data = response.data.results
        console.log(data)
    }

    else{
        setWating(true)
    }

    
}

useEffect (()=>{
    fetchQustion(tempUrl)
},[])

  return (
    <AppContext.Provider
      value={{ wating, loading, qustion, index, correct, error, modalopen }}
    >
      {children}
    </AppContext.Provider>
  );
};

// creatt global context

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
