import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import styles from "./blogCard-comp.module.scss";

export const BlogCard = ({
  title,
  cuid,
  coverImage,
  slug,
  dateAdded,
  theme
}) => {
  return (
    <Link
      id={styles["blog-card"]}
      className={styles[theme]}
      to={`${ROUTES.BLOG_ROUTE}/${slug + "-" + cuid}`}
    >
      <Card>
        <Card.Img as="div">
          <ProgressiveImage src={coverImage} fluid={true} />
        </Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-right">{dateAdded}</Card.Text>
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
