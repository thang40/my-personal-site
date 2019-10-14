import React from "react";
import { Toast } from "react-bootstrap";
import PropTypes from "prop-types";

export const CustomToast = ({ msg, onClose, delay, translate }) => {
  return (
    <Toast onClose={onClose} show={true} delay={delay} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Newly implemented toast</strong>
        <small>{"😂"}</small>
      </Toast.Header>
      <Toast.Body>{translate(msg)}</Toast.Body>
    </Toast>
  );
};

CustomToast.propTypes = {
  translate: PropTypes.func
};

CustomToast.defaultProps = {
  translate: text => text
};
