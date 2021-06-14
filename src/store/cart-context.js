import React, { useContext, useReducer, useState } from "react";
import cartReducer, { ADD_ITEM, REMOVE_ITEM } from "../store/cartReducer";

const initialState = {
  items: [],
  total: 0,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: ADD_ITEM, payload: { item } });
  };
  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: id})
  }

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;