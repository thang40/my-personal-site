import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginForm } from "./login-form.route";
import { Form } from "antd";
import { authAction } from "../../ducks";

const EnhancedLoginForm = Form.create()(LoginForm);

class _LoginRoute extends Component {
  handleLogin = values => {
    const { authAction } = this.props;
    authAction(values);
    console.log(values);
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center"
          }}
        >
          <EnhancedLoginForm handleLogin={this.handleLogin} />
        </div>
      </React.Fragment>
    );
  }
}

export const LoginRoute = connect(
  () => {},
  {
    authAction
  }
)(_LoginRoute);
