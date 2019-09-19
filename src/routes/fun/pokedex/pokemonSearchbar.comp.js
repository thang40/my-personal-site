import React from "react";
import { Formik } from "formik";
import { Col, Form, Button, FormControl } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  searchStr: yup.string()
});

export const PokemonSearchbar = ({ handleSubmit }) => {
  const onSubmit = (values, actions) => {
    console.log(values);
    handleSubmit(values.searchStr);
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        searchStr: ""
      }}
      validateOnChange={false}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form inline noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="searchStr">
              <Form.Control
                type="text"
                placeholder="Search"
                name="searchStr"
                className="mr-sm-2"
                value={values.searchStr}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};
