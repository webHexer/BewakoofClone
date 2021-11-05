export default (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCT_INFO": {
      return {
        ...state,
        showProductInfo: true,
      };
    }
    case "HIDE_PRODUCT_INFO": {
      return {
        ...state,
        showProductInfo: false,
      };
    }
    case "SHOW_MESSAGE": {
      return {
        ...state,
        messageVisibility: true,
      };
    }
    case "SELECT_SIZE": {
      return {
        ...state,
        sizeSelected: action.payload,
      };
    }
    case "SET_PRODUCT_INFO": {
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
      };
    }
    default:
      return state;
  }
};
