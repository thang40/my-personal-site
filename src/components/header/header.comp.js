import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { ROUTES } from "../../consts";
import { useAuthStatus, useRightStatus } from "../../hooks/commonHooks";
import { ThemeContext } from "../../context/theme.context";
import styles from "./header-comp.module.css";

const headerOvrStyles = {
  padding: 0
};

export const Header = () => {
  const theme = useContext(ThemeContext);
  const isAuth = useAuthStatus(false);
  const hasAdminRight = useRightStatus(["admin"]);

  const renderAuthMenu = () => {
    return isAuth ? (
      <Menu.Item key="5">
        <Link to={ROUTES.USER_ROUTE}>user</Link>
      </Menu.Item>
    ) : (
      <Menu.Item key="3">
        <Link to={ROUTES.LOGIN_ROUTE}>Login</Link>
      </Menu.Item>
    );
  };

  const renderAdminMenu = () => {
    return hasAdminRight ? (
      <Menu.Item key="6">
        <Link to="/admin">Admin</Link>
      </Menu.Item>
    ) : null;
  };

  return (
    <Layout.Header style={headerOvrStyles}>
      <div className={styles["logo-container"]}>
        <img
          className={styles["logo"]}
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          alt="logo"
        />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to={ROUTES.HOME_ROUTE}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={ROUTES.BLOG_ROUTE}>Blogs</Link>
        </Menu.Item>
        {renderAuthMenu()}
        <Menu.Item key="4">
          <Link to="/learning">Learning</Link>
        </Menu.Item>
        {renderAdminMenu()}
        <Menu.Item key="7">
          <Button onClick={theme.changeTheme}>mode</Button>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
