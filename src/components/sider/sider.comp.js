import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import { Nav } from "react-bootstrap";
// import { themeContext } from "../../context/theme.context";

// const { SubMenu } = Menu;

export const Sider = ({ style }) => {
  // const theme = useContext(themeContext);

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Item as="div">
        <Link to={ROUTES.FUN_POKEDEX_ROUTE}>PokeDex</Link>
      </Nav.Item>
      {/* <Nav.Item as="div">
        <Link to={ROUTES.FUN_AUTH_ROUTE}>Authentication</Link>
      </Nav.Item> */}
    </Nav>
  );
};

Sider.propTypes = {
  style: PropTypes.object
};
