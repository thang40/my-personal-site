import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./pokemonSearchbar-comp.module.css";

export const PokemonSearchbar = ({ handleChange }) => {
  const [searchStr, setSearchStr] = useState("");
  return (
    <Form.Control
      type="text"
      placeholder="Search"
      className="mr-sm-2"
      id={styles["search-bar"]}
      value={searchStr}
      onChange={e => {
        setSearchStr(e.target.value);
        handleChange(e.target.value);
      }}
    />
  );
};
