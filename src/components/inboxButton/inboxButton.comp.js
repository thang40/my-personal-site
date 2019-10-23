import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styles from "./inboxButton-comp.module.scss";

export const InboxButton = ({
  inboxMsgs,
  color,
  theme,
  datetimeFormat,
  translate
}) => {
  const [isShowBox, setIsShowBox] = useState(false);
  const showBox = () => setIsShowBox(!isShowBox);
  const renderInboxMsgs = () => {
    return inboxMsgs.map(msg => {
      const { message, author } = msg.commit;
      return (
        <li key={msg.sha} className="font-weight-lighter">
          <div className="text-capitalize">{message}</div>
          <div className={styles["date"]}>
            {`${datetimeFormat(author.date)} ${translate(
              "at"
            )} ${datetimeFormat(author.date, "HH:MM")}`}
          </div>
        </li>
      );
    });
  };
  return (
    <span onClick={showBox}>
      <FontAwesomeIcon size="lg" icon={faInbox} color={color} />
      <div
        id={styles["box"]}
        style={{ display: isShowBox ? "block" : "none" }}
        className={styles[theme]}
      >
        <ul>{renderInboxMsgs()}</ul>
      </div>
    </span>
  );
};

InboxButton.propTypes = {
  inboxMsgs: PropTypes.array,
  color: PropTypes.string,
  theme: PropTypes.string,
  dateTimeFormat: PropTypes.func,
  translate: PropTypes.func
};

InboxButton.defaultProps = {
  dateTimeFormat: date => date,
  translate: text => text
};
