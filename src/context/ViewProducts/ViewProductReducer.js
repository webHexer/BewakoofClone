export default (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCT_PAGE": {
      return {
        ...state,
        showProductPage: true,
        showHomePage: false,
      };
    }
    case "HIDE_PRODUCT_PAGE": {
      return {
        ...state,
        showProductPage: false,
        showHomePage: false,
      };
    }
  }
};
