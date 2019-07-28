import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../auth";
import { Layout, Menu } from "antd";

export const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Layout.Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item>
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
