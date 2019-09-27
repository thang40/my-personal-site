import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import { upperCase1stChar } from "../../utils/generalHelper.util";
import PropTypes from "prop-types";
import styles from "./itemBar-comp.module.scss";

export const ItemBar = ({ imageSrc, title, createdDate }) => {
  return (
    <Row id={styles["item-bar"]} className="align-items-center">
      <Col lg="2">
        <ProgressiveImage src={imageSrc} fluid={true} />
      </Col>
      <Col lg="10">
        <h6>{upperCase1stChar(title)}</h6>
        <p className={styles["date-time"]}>{createdDate}</p>
      </Col>
    </Row>
  );
};

ItemBar.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  createdDate: PropTypes.string
};
