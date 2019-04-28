import React from "react";

import { Icon } from "antd";
import WrapActive from "./style";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <WrapActive>
        <Icon type="home" spin />
        <Icon type="setting" theme="filled" />
        <Icon type="smile" theme="outlined" spin />
        <Icon type="sync" spin />
        <Icon type="smile" rotate={180} />
        <Icon type="loading" />
        <br />
        <Icon type="smile" theme="twoTone" />
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      </WrapActive>
    );
  }
}

export default Index;
