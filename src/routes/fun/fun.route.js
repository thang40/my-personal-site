import React from "react";
import { Sider } from "../../components";
import { ROUTES } from "../../consts";
import { Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FunAuthRoute } from "./authen/authen.route";
import { FunPokedexRoute } from "./pokedex/pokedex.route";
import styles from "./fun-route.module.css";
export const FunRoute = () => {
  return (
    <Row>
      <Col lg="2" sm="2">
        <Sider></Sider>
      </Col>
      <Col lg="10">
        <div className={styles["right-side-container"]}>
          <Route path={ROUTES.FUN_POKEDEX_ROUTE} component={FunPokedexRoute} />
          <Route path={ROUTES.FUN_AUTH_ROUTE} component={FunAuthRoute} />
        </div>
      </Col>
    </Row>
  );
};
