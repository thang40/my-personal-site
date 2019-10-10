import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./loadingSpinner-comp.module.scss";

export const LoadingSpinner = ({ size }) => (
  <Spinner
    animation="border"
    variant="success"
    id={styles["spinner"]}
    className={styles[size]}
  />
);
