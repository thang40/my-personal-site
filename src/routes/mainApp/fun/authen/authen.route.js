import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { LoginForm } from "./loginForm.comp";
import { loginAction } from "../../../../ducks";
import { useAuthStatus } from "../../../../hooks/authHooks";

const _FunAuthRoute = ({ loginAction }) => {
  const isAuth = useAuthStatus(false);
  const handleLogin = values => {
    loginAction(values);
  };

  return (
    <React.Fragment>
      {isAuth ? <Redirect to="/user" /> : null}
      <Row>
        <Col>
          <LoginForm handleLogin={handleLogin} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export const FunAuthRoute = connect(
  () => {
    return {};
  },
  {
    loginAction: loginAction
  }
)(_FunAuthRoute);
