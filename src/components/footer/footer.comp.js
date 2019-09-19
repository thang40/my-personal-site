import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar
      style={{
        textAlign: "center",
        backgroundColor: "#fff",
        border: "solid 1px #f1f1f1"
      }}
      className="justify-content-center flex-column"
    >
      <Nav>
        <Nav.Item>
          <div>Siegen @2019</div>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <div>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/xnimrodx"
              title="xnimrodx"
            >
              xnimrodx
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
