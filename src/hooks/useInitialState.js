import { useState } from "react";

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  mobileMenu: false
};
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
      menuIsOpen: false,
      mobileMenu: false
   
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
      orderIsOpen: false,
 
    });
  };

  const toggleMobileMenu = () => {
    setState({
      ...state,
      mobileMenu: !state.mobileMenu,
      orderIsOpen: false,
 
    });
  };


  return {
    state,
    setState,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    toggleMobileMenu
  };
};

export default useInitialState;
