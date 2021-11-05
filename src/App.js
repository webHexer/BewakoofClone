import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ViewProductState from "./context/ViewProducts/ViewProductState";
import ProductState from "./context/Product/ProductState";
import CheckoutProductState from "./context/ProductCheckout/CheckoutProductState";
import ViewClothes from "./components/ViewClothes/ViewClothes";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Checkout from "./components/ProductCheckout/Checkout";
import Whislist from "./components/Whislist/Whislist";
import WhislistState from "./context/Whislist/WhislistState";
import FormState from "./context/Form/FormState";
import Modal from "./components/LoginSignUpForm/Modal";

function App() {
  return (
    <FormState>
      <WhislistState>
        <CheckoutProductState>
          <ProductState>
            <ViewProductState>
              <div className="App">
                <Router>
                  <Header />
                  <Modal />
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/ViewClothes">
                      <ViewClothes />
                    </Route>
                    <Route exact path="/productInfo">
                      <ProductInfo />
                    </Route>
                    <Route exact path="/Checkout" component={Checkout}></Route>
                    <Route exact path="/Whislist" component={Whislist}></Route>
                  </Switch>
                  <Footer />
                </Router>
              </div>
            </ViewProductState>
          </ProductState>
        </CheckoutProductState>
      </WhislistState>
    </FormState>
  );
}

export default App;
