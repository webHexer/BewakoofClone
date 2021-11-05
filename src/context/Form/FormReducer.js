export default (state, action) => {
  switch (action.type) {
    case "SHOW_FORM": {
      return {
        ...state,
        formVisibility: !state.formVisibility,
      };
    }
    case "SHOW_POPUP": {
      return {
        ...state,
        popupVisibility: !state.popupVisibility,
      };
    }
    case "SHOW_SIGN_UP_FORM": {
      return {
        ...state,
        showSignUp: !state.showSignUp,
      };
    }
    case "SAVE_USER_DETAILS": {
      return {
        ...state,
        userDetail: action.payload,
        isAuthenticated: true,
      };
    }
    case "DELETE_USER_DETAILS": {
      return {
        ...state,
        userDetail: "",
        isAuthenticated: false,
      };
    }
  }
};
