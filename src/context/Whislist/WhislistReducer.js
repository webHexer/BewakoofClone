export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_WHISLIST": {
      return {
        ...state,
        whislist: [...action.payload.wishlist, action.payload.producDetail],
      };
    }
    case "REMOVE_ITEM_FROM_WISHLIST": {
      return {
        ...state,
        whislist: state.whislist.filter((item) => item.id !== action.payload),
      };
    }
    case "ITEM_ADDED_IN_WISHLIST": {
      return {
        ...state,
        isItemAddedToWishlist: action.payload,
      };
    }
    case "LOAD_ITEM_FROM_LOCALSTORAGE_TO_WISHLIST": {
      return {
        ...state,
        whislist: action.payload,
      };
    }
    case "EMPTY_WISHLIST": {
      return {
        ...state,
        whislist: [],
      };
    }
  }
};
