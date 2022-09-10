import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openModel = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModel,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
