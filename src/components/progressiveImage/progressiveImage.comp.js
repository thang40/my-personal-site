import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./progressiveImage-comp.module.css";
import img404 from "../../assets/image-404.jpg";
import { getImgPlaceHolder } from "../../services/imgPlaceholder.service";

export const ProgressiveImage = ({ src, delay, fluid, ...rest }) => {
  const imgRef = useRef(null);
  const [internalSrc, setInternalSrc] = useState(
    getImgPlaceHolder(350, 200, "loading")
  );
  useEffect(() => {
    const _setLazyLoading = (Element, delayFlashing) => {
      let buffer = new Image();
      buffer.onload = () => {
        setTimeout(() => {
          if (imgRef.current) {
            setInternalSrc(src);
          }
        }, delayFlashing);
      };
      buffer.onerror = () => setInternalSrc(img404);

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                buffer.src = src;
                lazyImageObserver.unobserve(Element);
              }
            });
          }
        );

        lazyImageObserver.observe(Element);
      } else {
        // Possibly fall back to a more compatible method here
      }
    };
    _setLazyLoading(imgRef.current, delay);
  }, [delay, src]);

  return (
    <img
      {...rest}
      src={internalSrc}
      ref={imgRef}
      alt={rest.alt}
      className={`${rest.className === "undefined" ? "" : rest.className} ${
        fluid ? styles["fluid-img"] : ""
      }`}
    />
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string,
  delay: PropTypes.number,
  fluid: PropTypes.bool,
  rest: PropTypes.object
};

ProgressiveImage.defaultProps = {
  delay: 1000,
  fluid: false
};
