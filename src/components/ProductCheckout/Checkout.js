import React, { useContext } from "react";
import "./Checkout.css";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

const Checkout = () => {
  const checkoutProductContext = useContext(CheckoutProductContext);
  const { productsInCart, getBasketTotal } = checkoutProductContext;

  return (
    <div className="checkout">
      {productsInCart?.length === 0 ? (
        <div className="emptyBasket">
          <img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" />
          <h4>Nothing in the bag</h4>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="checkout__container">
          <div className="basketNotEmpty">
            <div className="checkout__items">
              <h5 className="checkout__title">
                My Bag{" "}
                {productsInCart?.length > 1 ? (
                  <span>({productsInCart?.length} items)</span>
                ) : (
                  <span>({productsInCart?.length} item)</span>
                )}
              </h5>
              {productsInCart?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  size={item.sizeSelected}
                  screenName="Cart"
                />
              ))}
            </div>
            <div className="product__total">
              <div className="checkout__offers">
                <h6>Know More</h6>
                <div>
                  <input type="radio" name="offers" id="offers" />
                  <p>FREE masks worth Rs. 399 with Tribe 6 Months - ₹ 299</p>
                  <input type="radio" name="offers" id="offers" />
                  <p>FREE masks worth Rs. 399 with Tribe 12 Months - ₹ 399</p>
                </div>
              </div>
              <div className="checkout__online__pay__offer">
                <p>
                  Pay online to get Extra 10% off orders above Rs.699! Use code:
                  PREP10.
                </p>
              </div>
              <div className="checkout__items__subtotal">
                <h6>Order Summary</h6>
                <div>
                  <div className="item__tota__price">
                    <p>
                      Total MRP <span>(Inclusive all taxes)</span>
                    </p>
                    <p>{getBasketTotal()}</p>
                  </div>
                  <div className="shipping__offer">
                    <p>Shipping Charges</p>
                    <p>FREE</p>
                  </div>
                  <div className="bag__discount">
                    <p>Bag Discount</p>
                    <p>-₹ 50</p>
                  </div>
                  <div className="payble__amount">
                    <p>Payble Amount</p>
                    <p>{getBasketTotal() - 50}</p>
                  </div>
                  <div className="final__amount">
                    <p>Final Amount</p>
                    <p>{getBasketTotal() - 50}</p>
                  </div>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
