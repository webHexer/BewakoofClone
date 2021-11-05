import React, { useContext } from "react";
import "./CheckoutProduct.css";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import WhislistContext from "../../context/Whislist/WhislistContext";

const CheckoutProduct = ({ id, title, price, size, image, screenName }) => {
  const checkoutProductContext = useContext(CheckoutProductContext);
  const { removeProductFromCart, addProductToCart } = checkoutProductContext;

  const whislistContext = useContext(WhislistContext);
  const { removeProductFromWhislist, addItemToWhislist } = whislistContext;

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <p>
            <span>₹</span>
            {price}
          </p>
        </p>
        <p className="checkoutProduct__size">Size: {size}</p>
        <div className="checkoutProduct__button">
          <button
            onClick={() => {
              screenName === "Cart"
                ? removeProductFromCart(id)
                : removeProductFromWhislist(id);
            }}
          >
            REMOVE
          </button>
          {screenName === "Cart" ? (
            <button
              onClick={() => {
                addItemToWhislist(id, title, price, image, size);
                removeProductFromCart(id);
              }}
            >
              SAVE FOR LATER
            </button>
          ) : (
            <button
              onClick={() => {
                addProductToCart(id, title, price, image, size);
                removeProductFromWhislist(id);
              }}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
