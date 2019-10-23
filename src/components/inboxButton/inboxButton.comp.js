import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import styles from "./inboxButton-comp.module.scss";

export const InboxButton = ({ inboxMsgs, color, theme }) => {
  const [isShowBox, setIsShowBox] = useState(false);
  const showBox = () => setIsShowBox(!isShowBox);
  const renderInboxMsgs = () => {
    return inboxMsgs.map(msg => <li key={msg.sha}>{msg.commit.message}</li>);
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
