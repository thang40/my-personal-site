import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./holdButton-comp.module.scss";

export const HoldButton = ({
  icon,
  size,
  color,
  enableHolding,
  handleAfterHold,
  ...rest
}) => {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });
  let timer;
  const handleHolding = () => {
    if (enableHolding) {
      timer = setTimeout(() => {
        showLoadingAndCallHandler();
      }, 1000);
    }
  };

  const handleRelease = () => {
    if (enableHolding) {
      clearTimeout(timer);
    }
  };

  const showLoadingAndCallHandler = () => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      handleAfterHold();
    }, 3000);
  };

  return (
    <div
      {...rest}
      onMouseDown={showLoading ? null : handleHolding}
      onMouseLeave={showLoading ? null : handleRelease}
    >
      <FontAwesomeIcon
        icon={showLoading ? faCog : icon}
        size={size}
        color={color}
        id={enableHolding && !showLoading ? styles["icon"] : null}
        spin={showLoading ? true : false}
      />
    </div>
  );
};
