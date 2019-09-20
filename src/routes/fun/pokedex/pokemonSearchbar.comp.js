import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

export const PokemonSearchbar = ({ handleChange }) => {
  const [searchStr, setSearchStr] = useState("");
  return (
    <Form.Group as={Col} md="12" controlId="searchStr">
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchStr}
        onChange={e => {
          setSearchStr(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </Form.Group>
  );
};
