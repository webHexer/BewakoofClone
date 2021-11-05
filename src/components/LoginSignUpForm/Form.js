import React, { useContext, useState } from "react";
import "./Form.css";
import CheckoutProductContext from "../../context/ProductCheckout/CheckoutProductContext";
import FormContext from "../../context/Form/FormContext";
import { X } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect } from "react";

const Form = () => {
  const formContext = useContext(FormContext);
  const { showForm, showSignUpForm, showSignUp, saveUserDetail } = formContext;

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        saveUserDetail(authUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="form">
      <span>
        <X
          size={25}
          onClick={() => {
            showForm();
          }}
        />
      </span>
      <div>
        <h4>{showSignUp ? "Sign Up" : "Log In"}</h4>
        <h6>Discover Fashion!</h6>
        <p>You're just one step away from signing up</p>
        <div className="formControl">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            onClick={() => {
              showForm();
              showSignUp ? register() : login();
            }}
          >
            {showSignUp ? "Sign Up" : "Log In"}
          </button>
        </div>
        <p>
          New to Bewakoof?{" "}
          <span onClick={showSignUpForm}>
            {showSignUp ? "LOG IN" : "SIGN UP"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Form;
