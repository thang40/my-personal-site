import React from "react";
import { Formik } from "formik";
import { Col, Form, Button } from "react-bootstrap";
import * as yup from "yup";
import { LoadingSpinner } from "../loadingSpinner/loadingSpinner.comp";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

export const LoginForm = ({ handleSubmit, isLoading, disabled, translate }) => (
  <Formik
    validationSchema={schema}
    onSubmit={handleSubmit}
    initialValues={{
      username: "",
      password: ""
    }}
    validateOnChange={false}
  >
    {({ handleSubmit, handleChange, values, errors }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>
          {/* USERNAME */}
          <Form.Group as={Col} md="12" controlId="username">
            <Form.Label>{translate("What is my Username?")}</Form.Label>
            <Form.Control
              disabled={disabled}
              type="text"
              placeholder={translate("USERNAME ONLY I KNOW")}
              name="username"
              value={values.username}
              onChange={handleChange}
              isInvalid={errors.username}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          {/* PASSWORD */}
          <Form.Group as={Col} md="12" controlId="password">
            <Form.Label>{translate("Only me know the password")}</Form.Label>
            <Form.Control
              disabled={disabled}
              type="password"
              placeholder={translate("PASSWORD ONLY I KNOWS")}
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button
          type="submit"
          disabled={disabled}
          variant="warning"
          style={{ minWidth: "8rem" }}
        >
          {isLoading ? (
            <LoadingSpinner size="sm" as="span" />
          ) : (
            <React.Fragment>
              {translate("Let me in!")}
              <span
                role="img"
                aria-label="joy"
                style={{ animation: "spin 1s infinite linear" }}
              >
                😂
              </span>
            </React.Fragment>
          )}
        </Button>
      </Form>
    )}
  </Formik>
);
