import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faStackOverflow,
  faDev
} from "@fortawesome/free-brands-svg-icons";

export const IntroHero = () => {
  return (
    <aside>
      <h1>
        Hello, <FontAwesomeIcon icon={faGlobeAsia} color="blue" /> !
      </h1>
      <p>
        Techs I love <FontAwesomeIcon icon={faChevronRight} color="blue" />{" "}
        ReactJS <FontAwesomeIcon icon={faReact} color="blue" spin />, Javascript{" "}
        <FontAwesomeIcon icon={faJs} color="green" />
      </p>
      <p>
        Me in the community{" "}
        <FontAwesomeIcon icon={faChevronRight} color="blue" />{" "}
        <a href="https://stackoverflow.com/users/7175364/thang-le">
          StackOverflow
        </a>{" "}
        <FontAwesomeIcon icon={faStackOverflow} color="gray" />{" "}
        <a href="https://dev.to/thang40">Dev.to</a>{" "}
        <FontAwesomeIcon icon={faDev} color="green" />
      </p>
    </aside>
  );
};
