import React, { useContext, useState } from "react";
import { createContext } from "react";
import sublinks from "./data";

const AppContext =createContext();

export  const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [issubmaniuOpen, setIssubmaniuOpen] = useState(false)

  const [location, setLocation]= useState({})
  const [page,setPage]=useState({page:'',links:[]})
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const opensubmaniu = (text,coordinates) => {

    const page = sublinks.find((link)=>link.page===text)
    setPage(page)

    setLocation(coordinates)
    setIssubmaniuOpen(true);
  
  };
  const closesubmaniu = () => {
    setIssubmaniuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        issubmaniuOpen,
        isSidebarOpen,
        opensubmaniu,
        openSidebar,
        closesubmaniu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


// custam hook 

export const useGlobalContext=()=>{
    return useContext(AppContext)
}
