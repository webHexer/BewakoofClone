import React, { useContext } from "react";
import "./Whislist.css";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import { Link } from "react-router-dom";
import CheckoutProduct from "../ProductCheckout/CheckoutProduct";
import WhislistContext from "../../context/Whislist/WhislistContext";

const Wishlist = () => {
  const whislistContext = useContext(WhislistContext);
  const { whislist } = whislistContext;

  return (
    <div className="whislist">
      {whislist?.length === 0 ? (
        <div className="emptyWhislist">
          <img src="https://images.bewakoof.com/web/group-3x-1509961969.png" />
          <h4>Your Whislist is Empty !</h4>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="whislist__container">
          <div className="whislistNotEmpty">
            <h5>
              WHISLIST{" "}
              {whislist?.length > 1 ? (
                <span>({whislist?.length} items)</span>
              ) : (
                <span>({whislist?.length} item)</span>
              )}
            </h5>
            {whislist?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                size={item.sizeSelected}
                screenName="Whislist"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
