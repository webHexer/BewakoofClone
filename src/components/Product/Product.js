import React, { useContext } from "react";
import "./Product.css";
import ProductContext from "../../context/Product/ProductContext";
import ViewProductContext from "../../context/ViewProducts/ViewProductContext";
import { Link } from "react-router-dom";

const Product = ({ id, title, price, image }) => {
  const productContext = useContext(ProductContext);
  const { openProductInfo, showProductDetails } = productContext;

  const viewProductContext = useContext(ViewProductContext);
  const { hideProductPage } = viewProductContext;
  return (
    <div className="product">
      <Link to="/productInfo">
        <img
          className="product__image"
          src={image}
          alt=""
          onClick={() => {
            hideProductPage();
            openProductInfo();
            showProductDetails(id, title, price, image);
          }}
        />
      </Link>

      <div className="product__info">
        <strong className="product__title">{title}</strong>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <p className="product__tribe__price">
          <small>₹ </small>
          <strong>{price - 50} for tribe members</strong>
        </p>
      </div>
    </div>
  );
};

export default Product;
