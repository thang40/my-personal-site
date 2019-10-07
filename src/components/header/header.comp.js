import React from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import { THEMES } from "../../contexts/theme.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import styles from "./header-comp.module.scss";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";
const baseName =
  process.env.NODE_ENV === "production" ? "/my-personal-site" : "/";
export const Header = React.forwardRef(
  ({ theme, toggleTheme, language, toggleLanguage, translate }, ref) => {
    const displayLang = lang => {
      if (lang === "vi") {
        return "vn";
      }
      return lang;
    };
    return (
      <header id={styles["header"]} ref={ref} className={styles[theme]}>
        <Navbar expand="lg" id={styles["header-nav"]}>
          <Navbar.Brand href={baseName}>
            <Image style={{ height: "60px" }} src={logo} />
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
                  {translate("Home")}
                </NavLink>
              </span>

              <span className="nav-link">
                <NavLink
                  exact={true}
                  activeClassName={styles["active"]}
                  to={ROUTES.BLOG_ROUTE}
                >
                  {translate("Blogs")}
                </NavLink>
              </span>
              <span className="nav-link">
                <NavLink
                  exact={true}
                  activeClassName={styles["active"]}
                  to={ROUTES.FUN_ROUTE}
                >
                  {translate("Fun")}
                </NavLink>
              </span>
              {/* <span className="nav-link">
                <NavLink
                  exact={true}
                  activeClassName={styles["active"]}
                  to="/about-me"
                >
                  {translate("About Me")}
                </NavLink>
              </span> */}
              <span className="nav-link">
                <NavLink
                  exact={true}
                  activeClassName={styles["active"]}
                  to={ROUTES.CONTACT_ROUTE}
                >
                  {translate("Contact")}
                </NavLink>
              </span>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Item>
                <span
                  id={styles["theme-btn"]}
                  className="nav-link"
                  onClick={toggleTheme}
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={theme === THEMES.DARK ? faMoon : faSun}
                    color={theme === THEMES.DARK ? "#f5f3ce" : "#FDB813"}
                  />
                </span>
              </Nav.Item>
              <Nav.Item>
                <Button
                  variant={
                    theme === THEMES.DARK ? "outline-light" : "outline-dark"
                  }
                  onClick={toggleLanguage}
                  className="text-uppercase"
                  id={styles["lang-btn"]}
                >
                  <div>{displayLang(language)}</div>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
);

Header.propTypes = {
  theme: PropTypes.oneOf([THEMES.DARK, THEMES.LIGHT]),
  translate: PropTypes.func
};

Header.defaultProps = {
  theme: THEMES.LIGHT,
  translate: text => text
};
