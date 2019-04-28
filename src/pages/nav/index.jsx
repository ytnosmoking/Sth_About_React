import React from "react";

import { Affix, Button, Breadcrumb, Divider, Icon, Menu, Dropdown } from "antd";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: 10
    };
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Affix offsetBottom={this.state.bottom}>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10
              });
            }}
          >
            Affix top
          </Button>
        </Affix>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/icon">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/home">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Divider>Second</Divider>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="/home">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default index;
