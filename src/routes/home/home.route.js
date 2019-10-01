import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ProfileCard, IntroHero } from "../../components";
import { ThemeContext } from "../../context/theme.context";

export const HomeRoute = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg="7">
          <IntroHero />
        </Col>
        <Col lg="5" className="justify-content-end">
          <ProfileCard theme={theme} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomeRoute;
