import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Bag, Heart, Person, Search } from "react-bootstrap-icons";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import ViewProductContext from "../../context/ViewProducts/ViewProductContext";
import ProductContext from "../../context/Product/ProductContext";
import WhislistContext from "../../context/Whislist/WhislistContext";
import FormContext from "../../context/Form/FormContext";
import Popup from "../LoginSignUpForm/Popup";

const style = {
  header__search: {
    backgroundColor: "#fff",
    width: "250px",
  },
};

const Header = () => {
  const checkoutProductContext = useContext(CheckoutProductContext);
  const { productsInCart } = checkoutProductContext;

  const whislistContext = useContext(WhislistContext);
  const { whislist } = whislistContext;

  const formContext = useContext(FormContext);
  const { showForm, isAuthenticated, showPopup } = formContext;

  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img
          className="home__logo"
          src="https://images.bewakoof.com/logos/bewakoof-logo-og.png"
          // className="d-inline-block center"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="header__navlinks" href="#home">
            MEN
          </Nav.Link>
          <Nav.Link className="header__navlinks" href="#link">
            WOMEN
          </Nav.Link>
          <Nav.Link className="header__navlinks" href="#link">
            MOBILE COVERS
          </Nav.Link>
          <Nav.Link className="header__navlinks" href="#link">
            CLEARANCE ZONE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <div className="header__searchbox__container">
          <Search className="header__search__icon" size={12} />
          <input
            className="header__searchbox"
            type="text"
            placeholder="Search by product, category or collection"
          />
        </div>
        <div className="header__nav__icons" style={{ position: "relative" }}>
          <span className="header__or__symbol">|</span>
          <Person
            className="nav__icons person__nav__icon"
            size={22}
            onClick={() => {
              isAuthenticated ? showPopup() : showForm();
            }}
          />
          <Popup />
          <Link to="/Whislist">
            <div style={{ display: "inline-block", position: "relative" }}>
              <Heart
                className="nav__icons"
                style={{ marginTop: "12px" }}
                size={18}
              />
              {whislist?.length > 0 ? (
                <span className="no_of_item_added">{whislist.length}</span>
              ) : null}
            </div>
          </Link>
          <Link to="/Checkout">
            <div style={{ display: "inline-block", position: "relative" }}>
              <Bag
                className="nav__icons"
                size={20}
                // onClick={() => {
                //   hideProductInfo();
                //   hideProductPage();
                //   openCheckoutPage();
                // }}
              />
              {productsInCart?.length > 0 ? (
                <span className="no_of_item_added">
                  {productsInCart.length}
                </span>
              ) : null}
            </div>
          </Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
