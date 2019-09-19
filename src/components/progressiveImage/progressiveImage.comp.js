import React, { useState, useEffect } from "react";
import { Image as BoostrapImage } from "react-bootstrap";
import blurryImage from "../../assets/blurry-holder.jpg";

export const ProgressiveImage = ({ src }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const buffer = new Image();
    buffer.onload = () => setReady(true);
    buffer.src = src;
  });
  return <BoostrapImage src={ready ? src : blurryImage} fluid></BoostrapImage>;
};
