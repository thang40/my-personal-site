import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import { upperCase1stChar } from "../../utils/generalHelper.utils";
import PropTypes from "prop-types";
import styles from "./itemBar-comp.module.scss";
import { datetimeUtils } from "../../utils/datetime.utils";

export const ItemBar = ({ imageSrc, title, createdDate }) => {
  return (
    <div id={styles["item-bar"]}>
      <Row className="align-items-center">
        <Col lg="2">
          <ProgressiveImage
            src={imageSrc}
            fluid={true}
            className={styles["border-img"]}
          />
        </Col>
        <Col lg="10">
          <h6>{upperCase1stChar(title)}</h6>
          <p className={styles["date-time"]}>
            {createdDate ? datetimeUtils.format(createdDate) : ""}
          </p>
        </Col>
      </Row>
    </div>
  );
};

ItemBar.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  createdDate: PropTypes.string
};
