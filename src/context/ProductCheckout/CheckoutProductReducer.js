export default (state, action) => {
  switch (action.type) {
    case "SHOW_CHECKOUT_PAGE": {
      return {
        ...state,
        showCheckoutPage: true,
      };
    }
    case "HIDE_CHECKOUT_PAGE": {
      return {
        ...state,
        showCheckoutPage: false,
      };
    }
    case "ADD_ITEM_TO_CART": {
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    }
    case "REMOVE_ITEM_FROM_CART": {
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case "LOAD_ITEM_FROM_LOCALSTORAGE_TO_CART": {
      return {
        ...state,
        productsInCart: action.payload,
      };
    }
    case "EMPTY_CART": {
      return {
        ...state,
        productsInCart: [],
      };
    }
  }
};
