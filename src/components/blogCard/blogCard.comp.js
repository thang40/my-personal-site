import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import styles from "./blogCard-comp.module.css";

export const BlogCard = ({ title, cuid, coverImage, loading }) => {
  return (
    <Link className={styles["blog-card"]} to={`${ROUTES.BLOG_ROUTE}/${cuid}`}>
      <Card>
        <Card.Img as="div" fluid>
          <ProgressiveImage src={coverImage} fluid={true} />
        </Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  cuid: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
  loading: PropTypes.bool
};

BlogCard.defaultProps = {
  loading: true
};
