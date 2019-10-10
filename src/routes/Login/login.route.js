import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { faHome, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LoginForm, SmallContainer } from "../../components";
import { THEMES, themeContext, languageContext } from "../../contexts";
import { ROUTES } from "../../consts";
import styles from "./login-route.module.scss";

export const LoginRoute = () => {
  const { toggleTheme, theme } = useContext(themeContext);
  const { language, toggleLanguage } = useContext(languageContext);
  const displayLang = lang => {
    if (lang === "vi") {
      return "vn";
    }
    return lang;
  };
  return (
    <div id={styles["login"]} className="vh-100 vw-100 text-white-50">
      <nav className="p-2 d-flex">
        <Nav className="mr-auto align-items-center">
          <Nav.Item>
            <Link to={ROUTES.HOME_ROUTE}>
              <Icon icon={faHome} size="lg" />
            </Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-end align-items-center">
          <Nav.Item>
            <span className="nav-link" onClick={toggleTheme}>
              <Icon
                size="lg"
                style={{ cursor: "pointer" }}
                icon={theme === THEMES.DARK ? faMoon : faSun}
                color={theme === THEMES.DARK ? "#f5f3ce" : "#FDB813"}
              />
            </span>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant={theme === THEMES.DARK ? "outline-light" : "outline-dark"}
              onClick={toggleLanguage}
              className="text-uppercase"
            >
              <div>{displayLang(language)}</div>
            </Button>
          </Nav.Item>
        </Nav>
      </nav>
      <SmallContainer>
        <section className="ml-5 mr-5">
          <h1 className="pb-5 pt-5">WHO ARE YOU</h1>
          <LoginForm
            handleSubmit={() => alert("under development 😂 😂 😂 ")}
          />
        </section>
      </SmallContainer>
    </div>
  );
};

export default LoginRoute;
