import React, { useContext, useEffect } from "react";
import "./ProductInfo.css";
import uuid from "react-uuid";
import ProductContext from "../../context/Product/ProductContext";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import WhislistContext from "../../context/Whislist/WhislistContext";
import FormContext from "../../context/Form/FormContext";

import {
  Heart,
  FileText,
  EmojiSmile,
  Bag,
  Check2,
} from "react-bootstrap-icons";

const ProductInfo = () => {
  const productContext = useContext(ProductContext);
  let {
    id,
    title,
    price,
    image,
    sizeSelected,
    selectSize,
    showMessage,
    messageVisibility,
  } = productContext;

  const checkoutProductContext = useContext(CheckoutProductContext);
  const { addProductToCart } = checkoutProductContext;

  const whislistContext = useContext(WhislistContext);
  const { addItemToWhislist, whislist, checkItemInWishlist } = whislistContext;

  const formContext = useContext(FormContext);
  const { showForm, isAuthenticated } = formContext;

  id = uuid();

  const messageClass =
    messageVisibility && sizeSelected === "" ? "show-message" : "hide-message";

  return (
    <div>
      <div className="container">
        <div className="productInfo">
          <div className="productImage">
            <img src={image} alt="product image" />
          </div>
          <div className="product-detail">
            <strong className="product-title">{title}</strong>
            <p className="product-price">
              <small>₹ </small>
              <strong>{price}</strong>
            </p>
            <p className="product-tribe-price">
              <p>Incl. taxes </p>
              <strong>₹ {price - 50} For Tribe Members</strong>
            </p>

            <div className="size-info">
              <div className="size-header">
                <p>Select Size</p>
                <p className={messageClass}>
                  <strong>!</strong>Please select Size
                </p>
                <p>Size Guide</p>
              </div>
              <div className="size-selector">
                <p
                  className={sizeSelected !== "S" ? "" : "sizeSelectorActive"}
                  onClick={() => {
                    selectSize("S");
                  }}
                >
                  <a href="#">S</a>
                </p>
                <p
                  className={sizeSelected !== "M" ? "" : "sizeSelectorActive"}
                  onClick={() => {
                    selectSize("M");
                  }}
                >
                  <a href="#">M</a>
                </p>
                <p
                  className={sizeSelected !== "L" ? "" : "sizeSelectorActive"}
                  onClick={() => {
                    selectSize("L");
                  }}
                >
                  <a href="#">L</a>
                </p>
                <p
                  className={sizeSelected !== "XL" ? "" : "sizeSelectorActive"}
                  onClick={() => {
                    selectSize("XL");
                  }}
                >
                  <a href="#">XL</a>
                </p>
                <p
                  className={sizeSelected !== "2XL" ? "" : "sizeSelectorActive"}
                  onClick={() => {
                    selectSize("2XL");
                  }}
                >
                  <a href="#">2XL</a>
                </p>
                <p
                  className={sizeSelected !== "3XL" ? "" : "sizeSelectorActive"}
                  onClick={() => {
                    selectSize("3XL");
                  }}
                >
                  <a href="#">3XL</a>
                </p>
              </div>
            </div>

            <div className="add-buttons">
              <button
                className="add-to-whislist"
                onClick={() => {
                  isAuthenticated
                    ? addItemToWhislist(
                        id,
                        title,
                        price,
                        image,
                        sizeSelected === "" ? "S" : sizeSelected
                      )
                    : showForm();
                }}
              >
                <Heart
                  className="nav__icons"
                  style={{ marginTop: "12px", color: "#333" }}
                  size={25}
                />

                {/* {checkItemInWishlist() === false ? (
                  <Heart
                    className="heart_icon_color"
                    style={{
                      marginTop: "12px",
                      color: "#333",
                      backgroundColor: "gold",
                    }}
                    size={25}
                  />
                ) : (
                  <Heart
                    className="nav__icons"
                    style={{ marginTop: "12px", color: "#333" }}
                    size={25}
                  />
                )} */}
              </button>
              <button
                className="add-to-cart"
                onClick={() => {
                  isAuthenticated
                    ? sizeSelected == ""
                      ? showMessage()
                      : addProductToCart(id, title, price, image, sizeSelected)
                    : showForm();
                }}
              >
                ADD TO BAG
              </button>
            </div>

            <div className="delivey-detail">
              <p className="delivery-detail-header">Delivey Details</p>
              <div className="pincode">
                <input type="text" placeholder="Enter Pincode" />
                <button className="check-pincode">CHECK</button>
              </div>
              <p>
                <span>₹</span>Cash on Delivery might be available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer">
        <div></div>
        <div className="product-desc">
          <div className="box">
            <div className="page-footer-icons">
              <p>
                <FileText style={{ color: "#333" }} size={35} />
              </p>
            </div>
            <div>
              <h6>PRODUCT DESCRIPTION</h6>
              <p>
                Be an absolute dynamite in this high- voltage Smoke Red Men's
                Zipper Bomber Jacket. Layer it over a solid t-shirt, trousers
                and sneakers to get an ultra dapper look for a great weekend out
                with your buddies.
              </p>
            </div>
          </div>

          <div className="box">
            <div className="page-footer-icons">
              <p>
                <Check2 style={{ color: "#333" }} size={35} />
              </p>
            </div>
            <div>
              <h6>REGULAR FIT</h6>
              <p>Fits just right - not too tight, not too loose.</p>
            </div>
          </div>

          <div className="box">
            <div className="page-footer-icons">
              <Bag style={{ color: "#333" }} size={35} />
            </div>
            <div>
              <h6>60% COTTON & 40% POLY, 290 GSM</h6>
              <p>
                Midweight fleeces comprising 60% Cotton & 40% Poly - soft and
                sturdy for maximum comfort.
              </p>
            </div>
          </div>
        </div>
        <div className="poduct-return-policy">
          <div className="box">
            <div className="page-footer-icons">
              <EmojiSmile style={{ color: "#333" }} size={35} />
            </div>
            <div>
              <h6>15 DAY RETURNS</h6>
              <p>
                If you arent satisfied with this product, return it for a
                refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
