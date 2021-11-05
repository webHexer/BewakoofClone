import React, { useContext } from "react";
import "./Modal.css";
import FormContext from "../../context/Form/FormContext";
import Form from "./Form";

const Modal = () => {
  const formContext = useContext(FormContext);
  const { formVisibility } = formContext;

  const showHideClassName = formVisibility
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <Form />
      </div>
    </div>
  );
};

export default Modal;
