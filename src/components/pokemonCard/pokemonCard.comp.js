import React from "react";
import { Card } from "react-bootstrap";
import { ProgressiveImage } from "../progressiveImage/progressiveImage.comp";
export const PokemonCard = ({ name, imageSrc }) => {
  return (
    <div>
      <Card>
        <Card.Img as={ProgressiveImage} src={imageSrc}></Card.Img>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
