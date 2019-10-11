import React from "react";
import ReactDOM from "react-dom";
import { Toast } from "react-bootstrap";

export const CustomToast = ({ msg, onClose, delay }) => {
  return (
    <Toast onClose={onClose} show={true} delay={delay} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Newly implemented toast</strong>
        <small>😂</small>
      </Toast.Header>
      <Toast.Body>{msg}</Toast.Body>
    </Toast>
  );
};
