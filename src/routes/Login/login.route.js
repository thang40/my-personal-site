import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { faHome, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { LoginForm, SmallContainer, CustomToast } from "../../components";
import { withInt } from "../../HOCs/withInt";
import { THEMES, themeContext, languageContext } from "../../contexts";
import { loginAction } from "../../ducks";
import { ROUTES } from "../../consts";
import { ToastService } from "../../services/toast.service";
import styles from "./login-route.module.scss";

const toastService = new ToastService();
const IntLoginForm = withInt(LoginForm);

export const _LoginRoute = ({ loginAction }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toggleTheme, theme } = useContext(themeContext);
  const { language, toggleLanguage, translate } = useContext(languageContext);

  const displayLang = lang => {
    if (lang === "vi") {
      return "vn";
    }
    return lang;
  };
  const handleLoginFailed = () => {
    setIsLoading(false);
    toastService.alert("WRONG!! Dude stop!!", 5000);
  };
  const handleLoginSuccess = () => {
    setIsLoading(false);
    toastService.alert("COOL! YOU REALLY ARE ME!!", 5000);
  };
  const handleLogin = value => {
    setIsLoading(true);
    setTimeout(() => {
      loginAction(value, {
        handleFail: handleLoginFailed,
        handleSuccess: handleLoginSuccess
      });
    }, 1000);
  };
  return (
    <div id={styles["login"]} className="vh-100 text-white-50">
      <nav className="pt-2 pb-2 pl-4 pr-4 d-flex">
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
        <h1 className="display-3 text-center">
          {translate("THIS PLACE IS ONLY FOR ADMIN!!")}
        </h1>
        <h2 className="display-4 text-center">{translate("ARE YOU ME?")}</h2>
        <section className="d-flex justify-content-center mt-4">
          <IntLoginForm handleSubmit={handleLogin} isLoading={isLoading} />
        </section>
      </SmallContainer>
    </div>
  );
};

const LoginRoute = connect(
  state => state,
  { loginAction }
)(_LoginRoute);

export default LoginRoute;
