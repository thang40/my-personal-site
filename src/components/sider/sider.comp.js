import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import { Nav } from "react-bootstrap";
// import { ThemeContext } from "../../context/theme.context";

// const { SubMenu } = Menu;

export const Sider = ({ style }) => {
  // const theme = useContext(ThemeContext);

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as="div">
        <Link to={ROUTES.FUN_POKEDEX_ROUTE}>PokeDex</Link>
      </Nav.Link>
      <Nav.Link as="div">
        <Link to={ROUTES.FUN_AUTH_ROUTE}>Authentication</Link>
      </Nav.Link>
    </Nav>
  );
};

Sider.propTypes = {
  style: PropTypes.object
};
