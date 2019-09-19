import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { LoginForm } from "./login-form2.route";
import { loginAction } from "../../ducks";
import { useAuthStatus } from "../../hooks/commonHooks";

const _LoginRoute = ({ loginAction }) => {
  const isAuth = useAuthStatus(false);
  const handleLogin = values => {
    loginAction(values);
  };
  return (
    <React.Fragment>
      {isAuth ? <Redirect to="/user" /> : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
          background: "#fff",
          padding: "1rem 0",
          margin: 0
        }}
      >
        <Row>
          <Col>
            <LoginForm handleLogin={handleLogin} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export const LoginRoute = connect(
  () => {
    return {};
  },
  {
    loginAction: loginAction
  }
)(_LoginRoute);
