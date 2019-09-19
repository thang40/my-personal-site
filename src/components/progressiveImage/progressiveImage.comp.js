import React, { useState, useEffect } from "react";
import { Image as BoostrapImage, Spinner } from "react-bootstrap";
import styles from "./progressiveImage-comp.module.css";
import image404 from "../../assets/image-404.jpg";

export const ProgressiveImage = ({ src }) => {
  const [ready, setReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const prepImage = () => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  };
  useEffect(() => {
    const buffer = new Image();
    buffer.onload = () => {
      prepImage();
    };
    buffer.onerror = () => {
      setHasError(true);
      prepImage();
    };
    buffer.src = src;
  });

  return ready ? (
    <BoostrapImage src={hasError ? image404 : src} fluid></BoostrapImage>
  ) : (
    <div className={`text-center ${styles["spinner-container"]}`}>
      <Spinner animation="border" />
    </div>
  );
};
