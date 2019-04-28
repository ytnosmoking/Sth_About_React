import React, { Component } from "react";

import { Route, Switch, Redirect, Link } from "react-router-dom";
import { Layout, Icon, Menu, Typography, Button } from "antd";
import { routes } from "../../routes/index";
const { Header, Content, Sider } = Layout;
const { Text } = Typography;
const SubMenu = Menu.SubMenu;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { clearRole } = this.props;
    return (
      <Layout className="content">
        <Sider className="sider">
          <Menu mode="inline" theme="dark" defaultSelectedKeys={["0"]}>
            {routes
              .filter(route => {
                return this.props.role === "all" || route.role.includes("all")
                  ? route
                  : route.role.includes(this.props.role)
                  ? route
                  : "";
              })
              .map((route, index) =>
                route.children ? (
                  <SubMenu
                    key={index}
                    title={
                      <span>
                        {route.title}&nbsp; <Icon type={route.icon} />
                      </span>
                    }
                  >
                    {route.children.map((child, jdex) =>
                      child.flag ? (
                        ""
                      ) : (
                        <Menu.Item key={index + "-" + jdex}>
                          <Link to={child.path}>
                            {child.title} <Icon type={child.icon} />
                          </Link>
                        </Menu.Item>
                      )
                    )}
                  </SubMenu>
                ) : (
                  <Menu.Item key={index}>
                    <Link to={route.path}>
                      {route.title} <Icon type={route.icon} />
                    </Link>
                  </Menu.Item>
                )
              )}
          </Menu>
        </Sider>
        <Layout>
          <Header className="innerHeader">
            <Text> This is Learn React </Text>
            <Button onClick={() => clearRole("")}> clear Token </Button>
          </Header>
          <Content>
            <Switch>
              {routes
                .filter(route => {
                  return this.props.role === "all" || route.role.includes("all")
                    ? route
                    : route.role.includes(this.props.role)
                    ? route
                    : "";
                })
                .map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.com}
                  />
                ))}
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default index;
