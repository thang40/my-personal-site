import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProfileCard, IntroHero } from "../../components";

export const HomeRoute = () => {
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg="7">
          <IntroHero />
        </Col>
        <Col lg="5" className="justify-content-end">
          <ProfileCard />
        </Col>
      </Row>
    </React.Fragment>
  );
};
