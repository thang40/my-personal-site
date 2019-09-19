import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import { animated } from "react-spring";

export const Avatar = ({ style }) => {
  return (
    <animated.div style={{ ...style }}>
      <Image
        style={{ height: "100px" }}
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        rounded
      />
    </animated.div>
  );
};

Avatar.propTypes = {
  style: PropTypes.object
};
