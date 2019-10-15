import React from "react";
import { Toast } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

export const CustomToast = ({ msg, onClose, delay, translate }) => {
  const props = useSpring({
    from: {
      color: "lightgreen"
    },
    to: async next => {
      while (1) {
        await next({
          color: "blue"
        });
        await next({ color: "green" });
        await next({
          color: "yellow"
        });
        await next({ color: "pink" });
        await next({ color: "salmon" });
      }
    }
  });
  return (
    <Toast onClose={onClose} show={true} delay={delay} autohide>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <animated.div style={props}>
          {"Newly implemented toast 😂"}
        </animated.div>
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
