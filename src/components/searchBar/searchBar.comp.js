import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./searchBar-comp.module.css";

export const SearchBar = ({ handleChange, placeholder }) => {
  const [searchStr, setSearchStr] = useState("");
  return (
    <Form.Control
      type="text"
      placeholder={placeholder}
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

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
};

SearchBar.defaultProps = {
  handleChange: () => {},
  placeholder: "Search"
};
