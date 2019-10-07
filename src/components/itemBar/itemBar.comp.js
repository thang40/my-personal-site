import React from "react";
import PropTypes from "prop-types";
import styles from "./itemBar-comp.module.scss";
import { Row, Col } from "react-bootstrap";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import { datetimeUtils } from "../../utils/datetime.utils";

export const ItemBar = ({ imageSrc, title, createdDate, ...props }) => {
  return (
    <div id={styles["item-bar"]} className={props.className}>
      <Row className="align-items-center">
        <Col lg="2">
          <ProgressiveImage
            src={imageSrc}
            fluid={true}
            className={styles["border-img"]}
          />
        </Col>
        <Col lg="10">
          <h6 className="text-capitalize">{title}</h6>
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
