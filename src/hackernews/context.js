import React from "react";
import { useEffect } from "react";
import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import {SET_LOADING ,
    SET_STORIES ,
    REMOVE_STORES,
    HANDLE_PAGE, 
    HANDL_SEARCH} from './action'
 const API_ENDPOINT = "http://hn.algolia.com/api/v1/search?";
const intialState ={
 isLoading: true,
 hits:[],
 query:'react',
 page:0,
 nbPage:0,
}
 
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,intialState)

  const fetchStories = async (url)=>{
    dispatch({type:SET_LOADING})

    try {
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
    } 
    catch(error){
     console.log(error)  
    }
  }

  useEffect(()=>{
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  },[])
  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  
};

// globale conttact

export const useGlobalContext = () => {
  return useContext(AppContext);
};

 export { AppContext, AppProvider };
