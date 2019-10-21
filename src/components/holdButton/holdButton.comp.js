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
  const [isHolding, setIsHolding] = useState(false);
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  let timer;

  const handleClick = e => {
    if (enableHolding && isHolding) {
      e.preventDefault();
    }
  };

  const handleHolding = () => {
    if (enableHolding) {
      timer = setTimeout(() => {
        setIsHolding(true);
        showLoadingAndCallHandler();
      }, 2000);
    }
  };

  const handleRelease = () => {
    if (enableHolding) {
      setIsHolding(false);
      clearTimeout(timer);
    }
  };

  const showLoadingAndCallHandler = () => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      setIsHolding(false);
      handleAfterHold();
    }, 3000);
  };

  return (
    <div
      {...rest}
      onMouseDown={showLoading ? null : handleHolding}
      onMouseUp={showLoading ? null : handleRelease}
      onClick={handleClick}
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
