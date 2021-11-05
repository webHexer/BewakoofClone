import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ViewProductContext from "../../context/ViewProducts/ViewProductContext";
import ViewClothes from "../ViewClothes/ViewClothes";
import ProductContext from "../../context/Product/ProductContext";
import ProductInfo from "../ProductInfo/ProductInfo";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import Checkout from "../ProductCheckout/Checkout";

const Home = () => {
  const viewProductContext = useContext(ViewProductContext);
  const {
    showHomePage,
    openViewProductPage,
    showProductPage,
  } = viewProductContext;

  const productContext = useContext(ProductContext);
  const { showProductInfo, id, title, price, image } = productContext;

  const checkoutProductContext = useContext(CheckoutProductContext);
  const { showCheckoutPage } = checkoutProductContext;

  const HomePage = (
    <div className="home">
      <div className="home__row">
        <Link to="/ViewClothes">
          <img
            className="home__category__one"
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-dil-se-desi-indepence-day-online-shopping-BANNER-1597248988.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="home__category__two"
            src="https://images.bewakoof.com/uploads/grid/app/15th-August-DOTD-Homepage-Bannner--Mobile-and-Desktop--1597472853.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="home__row">
        <Link to="/ViewClothes">
          <img
            className="home__category__one"
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-protection-safety-essential-care-mask-eyewear-sanitizer-HOMEPAGE-BANNER-1595930466.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="home__category__two"
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-dill-se-desi-online-fashion-shopping-BANNER-1597424564.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="home__site__description">
        <Link to="/ViewClothes">
          <img
            className="home__site__description__image"
            src="https://images.bewakoof.com/uploads/grid/app/Brand-Trust-desktop-underslider-1592992663.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="home__slideshow">
        <Carousel>
          <Carousel.Item>
            <Link to="/ViewClothes">
              <img
                className="d-block w-100"
                src="https://images.bewakoof.com/uploads/grid/app/bewakoof-dil-se-desi-coupon-strip-desktop-online-fashion-shopping-1597504754.png"
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/ViewClothes">
              <img
                className="d-block w-100"
                src="https://images.bewakoof.com/uploads/grid/app/Safety-First-desktop-underslider-1592298105.jpg"
                alt="Second slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="home__product__stating__price">
        <Link to="/ViewClothes">
          <img
            className="home__topwear__image"
            src="https://images.bewakoof.com/uploads/grid/app/topwear-title-DESKTOP-homepage-1591802752.png"
            alt="topwear homepage"
          />
        </Link>
      </div>

      <div className="home__product__variety">
        <Link to="/ViewClothes">
          <img
            className="first__image"
            src="https://images.bewakoof.com/uploads/grid/app/Men-s-Colorblock-1591361054.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Men-s-T-shirts-1591361055.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Men-s-Shirts-1591361055.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Women-s-34th-Sleeves--1--1591788297.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Women-s-Crop-Tops--1--1591788298.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="last__image"
            src="https://images.bewakoof.com/uploads/grid/app/Women-s-T-shirts--1--1591788299.png"
            alt=""
          />
        </Link>
      </div>

      <div className="home__product__stating__price">
        <Link to="/ViewClothes">
          <img
            className="home__topwear__image"
            src="https://images.bewakoof.com/uploads/grid/app/bottom-wear-title-DESKTOP-homepage-1591802751.png"
            alt="topwear homepage"
          />
        </Link>
      </div>
      <div className="home__product__variety">
        <Link to="/ViewClothes">
          <img
            className="first__image"
            src="https://images.bewakoof.com/uploads/grid/app/Men-s-Boxers-1591361304.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Men-s-Joggers-1591361304.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Men-s-Pyjamas-1591361305.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Women-s-Boxers-1591361305.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/Women-s-Joggers-1591361306.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="last__image"
            src="https://images.bewakoof.com/uploads/grid/app/Women-s-Pyjamas-1591361307.png"
            alt=""
          />
        </Link>
      </div>

      <div className="home__banner">
        <Link to="/ViewClothes">
          <img
            className="home__banner__image"
            src="https://images.bewakoof.com/uploads/grid/app/branding-section-desktop-underslider-1589380737.png"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="home__banner__image"
            src="https://images.bewakoof.com/uploads/grid/app/feedback-survey-bewakoof-desktop-1588604341.gif"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="home__banner__image"
            src="https://images.bewakoof.com/uploads/grid/app/announcement-desktop-strip--1--1594387974.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="home__banner__image"
            src="https://images.bewakoof.com/uploads/grid/app/Browse-Trending-Title-1588256970.png"
            alt=""
          />
        </Link>
      </div>

      <div className="three__image__row">
        <Link to="/ViewClothes">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-color-of-the-month-space-grey-SQUARE-GIF-BANNER-MSITE-DESKTOP--1596300857.gif"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="trending__middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-polo-tees-casual-wear-online-banner-1595504593.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-bff-best-fashion-friend-friendship-day-online-shopping-BANNER-1596611291.jpg"
            alt=""
          />
        </Link>
      </div>

      <div className="home__banner">
        <Link to="/ViewClothes">
          <img
            className="home__banner__image"
            src="https://images.bewakoof.com/uploads/grid/app/Featured-Collections-1588256971.png"
            alt="featured colection"
          />
        </Link>
      </div>

      <div className="three__image__row">
        <Link to="/ViewClothes">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-mvp-gaming-collection-banner-1594801544.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="trending__middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/BEWAKOOF-NIOSH-N95-MASK-BANNER-1594992240.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/color-block-men-underslider-1588247162.png"
            alt=""
          />
        </Link>
      </div>

      <div className="three__image__row">
        <Link to="/ViewClothes">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-joggers-bottom-wear-casual-louge-wear-banner-1588684445.gif"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            className="trending__middle__image"
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-under-299-store-banner-online-shopping-msite-1592470551.jpg"
            alt=""
          />
        </Link>
        <Link to="/ViewClothes">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/bewakoof-joggers-revised-homepage-banner-1593185780.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {showHomePage ? (
        HomePage
      ) : showProductPage ? (
        <ViewClothes />
      ) : showProductInfo ? (
        <ProductInfo />
      ) : showCheckoutPage ? (
        <Checkout />
      ) : null}
    </div>
  );
};

export default Home;
