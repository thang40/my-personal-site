import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faStackOverflow,
  faDev
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

export const IntroHero = ({ translate }) => {
  return (
    <aside>
      <h1>
        {translate("Hello")},{" "}
        <FontAwesomeIcon icon={faGlobeAsia} color="#b1d7fa" /> !
      </h1>
      <p>
        {translate("I build things with")}{" "}
        <FontAwesomeIcon icon={faChevronRight} color="#7575dc" /> ReactJS{" "}
        <FontAwesomeIcon icon={faReact} color="blue" spin />, Javascript{" "}
        <FontAwesomeIcon icon={faJs} color="#7575dc" />
      </p>
      <p>
        {translate("Me in the community")}{" "}
        <FontAwesomeIcon icon={faChevronRight} color="#7575dc" />{" "}
        <a href="https://stackoverflow.com/users/7175364/thang-le">
          StackOverflow
        </a>{" "}
        <FontAwesomeIcon icon={faStackOverflow} color="gray" />{" "}
        <a href="https://dev.to/thang40">Dev.to</a>{" "}
        <FontAwesomeIcon icon={faDev} color="#7575dc" />
      </p>
    </aside>
  );
};

IntroHero.propTypes = {
  translate: PropTypes.func
};

IntroHero.defaultProps = {
  translate: text => text
};
