import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { THEMES } from "../../context/theme.context";
import PropTypes from "prop-types";
import styles from "./footer-comp.module.scss";

export const Footer = React.forwardRef(({ theme }, ref) => {
  return (
    <footer className={styles[theme]} ref={ref}>
      <Navbar
        id={styles["navbar"]}
        className="justify-content-center flex-column"
      >
        <Nav>
          <Nav.Item>
            <div>Siegen @2019</div>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <div>
              Logo made by{" "}
              <a
                href="https://www.flaticon.com/authors/xnimrodx"
                title="xnimrodx"
              >
                xnimrodx{" "}
              </a>
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Nav.Item>
        </Nav>
      </Navbar>
    </footer>
  );
});

Footer.propTypes = {
  theme: PropTypes.oneOf(THEMES.DARK, THEMES.LIGHT)
};

Footer.defaultProps = {
  theme: THEMES.DARK
};
