import React from "react";

import LayoutStyle from "./layoutStyle";

import { Layout, Divider, Affix, Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;
class layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LayoutStyle>
        <Affix offsetTop="120">
          <Button type="danger">Affix Bottom</Button>
        </Affix>
        <Divider orientation="left" dashed>
          this is LayOut
        </Divider>

        <Divider>First</Divider>
        <Layout>
          <Header children={"This is Header"} />
          <Content children="This is Content" />
          <Footer children="This is Footer" />
        </Layout>
        <Divider>Second</Divider>
        <Layout>
          <Header children={"This is Header"} />
          <Layout>
            <Sider children="this is Sider" />
            <Content children="This is Content" />
          </Layout>
          <Footer children="This is Footer" />
        </Layout>
        <Divider>Third</Divider>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <Divider>Forth</Divider>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </LayoutStyle>
    );
  }
}

export default layout;
