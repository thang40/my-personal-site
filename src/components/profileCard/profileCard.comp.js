import React from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faQuestionCircle,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { THEMES } from "../../context/theme.context";
import styles from "./profileCard-comp.module.scss";

export const ProfileCard = ({ theme }) => {
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
          I am Siegen{" "}
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="profile-tooltip-top">
                Meaning "Win" that's my Vietnamese name
              </Tooltip>
            }
          >
            <FontAwesomeIcon icon={faQuestionCircle} color="red" />
          </OverlayTrigger>
        </Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={faTerminal} />
          <span>{` I'm a Front-end Developer from VIETNAM `}</span>
          <span>{` And I love cat `}</span>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Card.Text>
        <div className="text-center">
          <Button variant="success">Contact</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

ProfileCard.propTypes = {
  theme: PropTypes.oneOf([THEMES.DARK, THEMES.LIGHT])
};

ProfileCard.defaultProps = {
  theme: THEMES.LIGHT
};
