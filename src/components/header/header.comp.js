import React from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import { THEMES } from "../../context/theme.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import styles from "./header-comp.module.scss";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";

export const Header = React.forwardRef(({ theme, toggleTheme }, ref) => {
  return (
    <header id={styles["header"]} ref={ref} className={styles[theme]}>
      <Navbar expand="lg" id={styles["header-nav"]}>
        <Navbar.Brand href="/">
          <Image style={{ height: "60px" }} src={logo} />
          {/* <Spinner animation="border" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <span className="nav-link">
              <NavLink
                exact={true}
                activeClassName={styles["active"]}
                to={ROUTES.HOME_ROUTE}
              >
                Home
              </NavLink>
            </span>

            <span className="nav-link">
              <NavLink
                exact={true}
                activeClassName={styles["active"]}
                to={ROUTES.BLOG_ROUTE}
              >
                Blogs
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink
                exact={true}
                activeClassName={styles["active"]}
                to={ROUTES.FUN_ROUTE}
              >
                Fun
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink
                exact={true}
                activeClassName={styles["active"]}
                to="/about-me"
              >
                About me
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink
                exact={true}
                activeClassName={styles["active"]}
                to="/contact"
              >
                Contact
              </NavLink>
            </span>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Button
                variant={
                  theme === THEMES.DARK ? "outline-light" : "outline-dark"
                }
                onClick={toggleTheme}
              >
                <FontAwesomeIcon
                  icon={theme === THEMES.DARK ? faMoon : faSun}
                  color={theme === THEMES.DARK ? "#f5f3ce" : "#FDB813"}
                />
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant={
                  theme === THEMES.DARK ? "outline-light" : "outline-dark"
                }
              >
                <div>EN</div>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
});

Header.propTypes = {
  theme: PropTypes.oneOf([THEMES.DARK, THEMES.LIGHT])
};

Header.defaultProps = {
  theme: THEMES.DARK
};
