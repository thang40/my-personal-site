import React from "react";
import PropTypes from "prop-types";
import styles from "./smallContainer-comp.module.scss";

export const SmallContainer = ({ children, theme, ...rest }) => {
  return (
    <section
      className={`${rest.className ? rest.className : ""} ${styles[theme]}`}
      {...rest}
    >
      <main id={styles["small-container"]}>{children}</main>
    </section>
  );
};

SmallContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

SmallContainer.defaultProps = {};
