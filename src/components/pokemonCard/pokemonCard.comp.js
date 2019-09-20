import React from "react";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
export const PokemonCard = ({ name, imageSrc }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ProgressiveImage src={imageSrc} />
    </div>
  );
};
