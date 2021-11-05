import React, { useReducer, useEffect } from "react";
import CheckoutProductContext from "./CheckoutProductContext";
import checkoutProductReducer from "./CheckoutProductReducer";

const CheckoutProductState = (props) => {
  const initialState = {
    showCheckoutPage: false,
    productsInCart: [],
  };

  const [state, dispatch] = useReducer(checkoutProductReducer, initialState);

  const addItemToLocalStorage = () => {
    localStorage.setItem("itemsInCart", JSON.stringify(state.productsInCart));
  };

  useEffect(() => {
    if (localStorage.getItem("itemsInCart") !== null) {
      dispatch({
        type: "LOAD_ITEM_FROM_LOCALSTORAGE_TO_CART",
        payload: JSON.parse(localStorage.getItem("itemsInCart")),
      });
    }
  }, []);

  useEffect(() => {
    addItemToLocalStorage();
  }, [state.productsInCart]);

  const openCheckoutPage = () => {
    dispatch({
      type: "SHOW_CHECKOUT_PAGE",
    });
  };

  const hideCheckoutPage = () => {
    dispatch({
      type: "HIDE_CHECKOUT_PAGE",
    });
  };

  const addProductToCart = (id, title, price, image, sizeSelected) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { id, title, price, image, sizeSelected },
    });
  };

  const removeProductFromCart = (id) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: id,
    });
  };

  const removeAllItemsFromCart = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };
  const getBasketTotal = () => {
    if (state.productsInCart.length > 0) {
      let result = 0;
      state.productsInCart.map((item) => {
        let sum = "";
        const res = item.price.split(",");
        sum = sum + res[0];
        for (let i = 1; i < res.length; i++) {
          sum = sum + res[i];
        }
        result = result + parseInt(sum);
      });
      return result;
    }
  };

  return (
    <CheckoutProductContext.Provider
      value={{
        openCheckoutPage,
        hideCheckoutPage,
        showCheckoutPage: state.showCheckoutPage,
        addProductToCart,
        productsInCart: state.productsInCart,
        removeProductFromCart,
        getBasketTotal,
        removeAllItemsFromCart,
      }}
    >
      {props.children}
    </CheckoutProductContext.Provider>
  );
};

export default CheckoutProductState;
