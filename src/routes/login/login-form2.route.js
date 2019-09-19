import React from "react";
import { Formik } from "formik";
import { Col, Form, Button } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

export const LoginForm = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{}}
      validateOnChange={false}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            {/* USERNAME */}
            <Form.Group as={Col} md="12" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            {/* PASSWORD */}
            <Form.Group as={Col} md="12" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
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
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  </div>
);
