import React, { useReducer } from "react";
import FormContext from "./FormContext";
import formReducer from "./FormReducer";

const FormState = (props) => {
  const initialState = {
    formVisibility: false,
    showSignUp: false,
    userDetail: "",
    isAuthenticated: false,
    popupVisibility: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const showForm = () => {
    dispatch({
      type: "SHOW_FORM",
    });
  };

  const showSignUpForm = () => {
    dispatch({
      type: "SHOW_SIGN_UP_FORM",
    });
  };

  const deleteUserDetails = () => {
    dispatch({
      type: "DELETE_USER_DETAILS",
    });
  };

  const saveUserDetail = (userDetail) => {
    dispatch({
      type: "SAVE_USER_DETAILS",
      payload: userDetail,
    });
  };

  const showPopup = () => {
    dispatch({
      type: "SHOW_POPUP",
    });
  };
  return (
    <FormContext.Provider
      value={{
        formVisibility: state.formVisibility,
        showForm,
        showSignUp: state.showSignUp,
        showSignUpForm,
        deleteUserDetails,
        saveUserDetail,
        isAuthenticated: state.isAuthenticated,
        userDetail: state.userDetail,
        popupVisibility: state.popupVisibility,
        showPopup,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
