import React, { useReducer } from "react";
import ViewProductContext from "./ViewProductContext";
import viewProductReducer from "./ViewProductReducer";

const ViewProductState = (props) => {
  const initialState = {
    showProductPage: false,
    showHomePage: true,
  };

  const [state, dispatch] = useReducer(viewProductReducer, initialState);

  const openViewProductPage = () => {
    dispatch({
      type: "SHOW_PRODUCT_PAGE",
    });
  };

  const hideProductPage = () => {
    dispatch({
      type: "HIDE_PRODUCT_PAGE",
    });
  };

  return (
    <ViewProductContext.Provider
      value={{
        openViewProductPage,
        hideProductPage,
        showHomePage: state.showHomePage,
        showProductPage: state.showProductPage,
      }}
    >
      {props.children}
    </ViewProductContext.Provider>
  );
};

export default ViewProductState;
