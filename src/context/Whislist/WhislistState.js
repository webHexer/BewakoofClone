import React, { useReducer, useEffect } from "react";
import WhislistContext from "./WhislistContext";
import WhislistReducer from "./WhislistReducer";

const CheckoutProductState = (props) => {
  const initialState = {
    whislist: [],
    isItemAddedToWishlist: false,
  };

  const [state, dispatch] = useReducer(WhislistReducer, initialState);

  const addItemsToLocalStorage = () => {
    localStorage.setItem("itemsInWishlist", JSON.stringify(state.whislist));
  };

  useEffect(() => {
    if (localStorage.getItem("itemsInWishlist")) {
      dispatch({
        type: "LOAD_ITEM_FROM_LOCALSTORAGE_TO_WISHLIST",
        payload: JSON.parse(localStorage.getItem("itemsInWishlist")),
      });
    }
  }, []);

  useEffect(() => {
    addItemsToLocalStorage();
  }, [state.whislist]);

  const addItemToWhislist = (id, title, price, image, sizeSelected) => {
    const wishlist = state.whislist.filter((item) => item.image !== image);
    const producDetail = { id, title, price, image, sizeSelected };
    dispatch({
      type: "ADD_ITEM_TO_WHISLIST",
      payload: { wishlist, producDetail },
    });
  };

  const removeProductFromWhislist = (id) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_WISHLIST",
      payload: id,
    });
  };

  const removeAllItemsFromWishlist = () => {
    dispatch({
      type: "EMPTY_WISHLIST",
    });
  };

  const checkItemInWishlist = (id) => {
    if (state.whislist.length === 0) {
      return true;
    } else {
      state.whislist.map((item) => {
        if (item.id === id) {
          return true;
        } else {
          return false;
        }
      });
    }
  };

  return (
    <WhislistContext.Provider
      value={{
        addItemToWhislist,
        whislist: state.whislist,
        removeProductFromWhislist,
        checkItemInWishlist,
        removeAllItemsFromWishlist,
      }}
    >
      {props.children}
    </WhislistContext.Provider>
  );
};

export default CheckoutProductState;
