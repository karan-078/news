import React, { useContext,  createContext, useReducer } from "react";
import { useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const intialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

//   we can do that work bye using togle func
//   const increase = (id) => {
//     dispatch({ type: "INCREASE", payload: id });
//   };
//   const decrease = (id) => {
//     dispatch({ type: "DECREASE", payload: id });
//   };

  const fetchdata = async () => {
    dispatch({ type: "LOADING" });

    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEM", payload: cart });
  };

  const togelamount = (id, type) => {
    dispatch({ type: "TOGLE", payload: { id, type } });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease, togelamount }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use custom hook means global context api

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
