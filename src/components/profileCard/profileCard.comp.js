import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faQuestionCircle,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { THEMES } from "../../contexts/theme.context";
import styles from "./profileCard-comp.module.scss";

export const ProfileCard = ({ theme, translate }) => {
  return (
    <Card id={styles["profile-card"]} className={styles[theme]}>
      <Card.Img
        as={ProgressiveImage}
        variant="top"
        className={styles["image"]}
        src="https://i.kym-cdn.com/photos/images/newsfeed/000/263/861/8b8.jpg"
      />
      <Card.Body>
        <Card.Title>
          {translate("I am Siegen")}{" "}
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="profile-tooltip-top">
                {translate(`Meaning "Thắng" that's my Vietnamese name`)}
              </Tooltip>
            }
          >
            <FontAwesomeIcon icon={faQuestionCircle} color="red" />
          </OverlayTrigger>
        </Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={faTerminal} color="#7575dc" />
          <span>{translate(`I'm a Front-end Developer from VIETNAM`)}</span>
          <span>{translate(` and I love cat`)}</span>
          <FontAwesomeIcon icon={faChevronLeft} color="#7575dc" />
        </Card.Text>
        {/* <div className="text-center">
          <Button variant="success">Contact</Button>
        </div> */}
      </Card.Body>
    </Card>
  );
};

ProfileCard.propTypes = {
  theme: PropTypes.oneOf([THEMES.DARK, THEMES.LIGHT]),
  translate: PropTypes.func
};

ProfileCard.defaultProps = {
  theme: THEMES.LIGHT,
  translate: text => text
};
