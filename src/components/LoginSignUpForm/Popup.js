import React, { useContext } from "react";
import "./Popup.css";
import FormContext from "../../context/Form/FormContext";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import WhislistContext from "../../context/Whislist/WhislistContext";
import { auth } from "../../firebase";

const Popup = () => {
  const formContext = useContext(FormContext);
  const {
    userDetail,
    popupVisibility,
    showPopup,
    deleteUserDetails,
  } = formContext;

  const checkoutProductContext = useContext(CheckoutProductContext);
  const { removeAllItemsFromCart } = checkoutProductContext;

  const whislistContext = useContext(WhislistContext);
  const { removeAllItemsFromWishlist } = whislistContext;

  const signOut = () => {
    if (userDetail) {
      auth.signOut();
      showPopup();
      deleteUserDetails();
      localStorage.removeItem("itemsInCart");
      localStorage.removeItem("itemsInWishlist");
      removeAllItemsFromWishlist();
      removeAllItemsFromCart();
    }
  };

  const showHideClassName = popupVisibility
    ? "popup display-block"
    : "popup display-none";

  return (
    <div className={showHideClassName}>
      <div className="popup-main">
        <div>
          <strong>Hi,</strong> {userDetail.email}
        </div>
        <div
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Popup;
