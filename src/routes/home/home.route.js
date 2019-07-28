import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Auth0Provider, useAuth0 } from "../../auth";

const { Content } = Layout;

export const HomeRoute = () => {
  const { loading, user } = useAuth0();
  console.log(user);
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        Home
      </Content>
    </React.Fragment>
  );
};
