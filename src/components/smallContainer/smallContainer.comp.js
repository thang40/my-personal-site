import React from "react";
import PropTypes from "prop-types";
import styles from "./smallContainer-comp.module.scss";

export const SmallContainer = ({ children, ...rest }) => {
  return (
    <section id={styles["small-container"]} {...rest}>
      {children}
    </section>
  );
};

SmallContainer.propTypes = {
  children: PropTypes.array
};

SmallContainer.defaultProps = {};
