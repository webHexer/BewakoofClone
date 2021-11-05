import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";

const ViewProductState = (props) => {
  const initialState = {
    showProductInfo: false,
    sizeSelected: "",
    id: "",
    title: "",
    price: "",
    image: "",
    messageVisibility: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const openProductInfo = () => {
    dispatch({
      type: "SHOW_PRODUCT_INFO",
    });
  };

  const hideProductInfo = () => {
    dispatch({
      type: "HIDE_PRODUCT_INFO",
    });
  };

  const showMessage = () => {
    dispatch({
      type: "SHOW_MESSAGE",
    });
  };

  const selectSize = (size) => {
    dispatch({
      type: "SELECT_SIZE",
      payload: size,
    });
  };

  const showProductDetails = (id, title, price, image) => {
    dispatch({
      type: "SET_PRODUCT_INFO",
      payload: { id, title, price, image },
    });
  };

  return (
    <ProductContext.Provider
      value={{
        openProductInfo,
        showProductDetails,
        hideProductInfo,
        showProductInfo: state.showProductInfo,
        id: state.id,
        title: state.title,
        price: state.price,
        image: state.image,
        sizeSelected: state.sizeSelected,
        selectSize,
        messageVisibility: state.messageVisibility,
        showMessage,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ViewProductState;
