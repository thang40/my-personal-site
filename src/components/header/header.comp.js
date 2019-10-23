import React from "react";
import PropTypes from "prop-types";
import {
  Nav,
  Navbar,
  Image,
  Button,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";
import { THEMES } from "../../contexts/theme.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faUser,
  faCrown
} from "@fortawesome/free-solid-svg-icons";
import styles from "./header-comp.module.scss";
import logo from "../../assets/logo.svg";
import { useAuthStatus } from "../../hooks/authHooks";
import { HoldButton } from "../holdButton/holdButton.comp";
import { InboxButton } from "../inboxButton/inboxButton.comp";
export const Header = React.forwardRef(
  (
    {
      theme,
      toggleTheme,
      language,
      logoutAction,
      commits,
      toggleLanguage,
      translate
    },
    ref
  ) => {
    const isAuth = useAuthStatus();
    const displayLang = lang => {
      if (lang === "vi") {
        return "vn";
      }
      return lang;
    };
    const renderLeftMenu = (routePath, text) => {
      return (
        <span className="nav-link">
          <NavLink
            exact={true}
            activeClassName={styles["active"]}
            to={routePath}
          >
            {translate(text)}
          </NavLink>
        </span>
      );
    };
    const renderUserMenu = () => {
      return (
        <NavLink
          className="nav-link"
          exact={true}
          activeClassName={styles["active"]}
          to={isAuth ? "/admin" : ROUTES.LOGIN_ROUTE}
        >
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="profile-tooltip-top">
                {translate(
                  isAuth
                    ? "Welcome Admin 🔱!! press and hold to log out"
                    : "Stop! Don't click this!!"
                )}
              </Tooltip>
            }
          >
            <HoldButton
              size="lg"
              enableHolding={isAuth}
              handleAfterHold={isAuth ? logoutAction : undefined}
              icon={isAuth ? faCrown : faUser}
              color={theme === THEMES.DARK ? "#fff" : "#7575dc"}
            />
          </OverlayTrigger>
        </NavLink>
      );
    };
    const renderThemeBtn = () => {
      return (
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
      );
    };
    const renderLanguageBtn = () => {
      return (
        <Button
          variant={theme === THEMES.DARK ? "outline-light" : "outline-dark"}
          onClick={toggleLanguage}
          className="text-uppercase"
          id={styles["lang-btn"]}
        >
          <div>{displayLang(language)}</div>
        </Button>
      );
    };
    const renderRecentUpdateBtn = () => {
      return (
        <span className="nav-link">
          <InboxButton
            inboxMsgs={commits}
            theme={theme}
            color={theme === THEMES.DARK ? "white" : "black"}
          />
        </span>
      );
    };
    return (
      <header id={styles["header"]} ref={ref} className={styles[theme]}>
        <Navbar expand="lg" id={styles["header-nav"]}>
          <Navbar.Brand href={ROUTES.ROUTE_BASENAME}>
            <Image style={{ height: "60px" }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {renderLeftMenu(ROUTES.HOME_ROUTE, "Home")}
              {renderLeftMenu(ROUTES.BLOG_ROUTE, "Blogs")}
              {renderLeftMenu(ROUTES.FUN_ROUTE, "Fun")}
              {renderLeftMenu(ROUTES.CONTACT_ROUTE, "Contact")}
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Item>{renderRecentUpdateBtn()}</Nav.Item>
              <Nav.Item>{renderUserMenu()}</Nav.Item>
              <Nav.Item>{renderThemeBtn()}</Nav.Item>
              <Nav.Item>{renderLanguageBtn()}</Nav.Item>
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
