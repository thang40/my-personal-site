import React from "react";
import { Nav, Navbar, Form, FormControl, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image style={{ height: "60px" }} src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <span className="nav-link">
            <Link to={ROUTES.HOME_ROUTE}>Home</Link>
          </span>

          <span className="nav-link">
            <Link to={ROUTES.BLOG_ROUTE}>Blogs</Link>
          </span>
          <span className="nav-link">
            <Link to={ROUTES.FUN_ROUTE}>Fun</Link>
          </span>
          <span className="nav-link">
            <Link to={ROUTES.LOGIN_ROUTE}>Login</Link>
          </span>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
