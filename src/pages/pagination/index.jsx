import React, { Component } from "react";

import { Pagination, Divider, Steps, Icon } from "antd";

const Step = Steps.Step;

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Pagination defaultCurrent={1} total={59} />
        <Divider />
        <Pagination showQuickJumper defaultCurrent={2} total={300} />
        <Divider />
        <Pagination simple defaultCurrent={3} total={120} />
        <Divider>Step</Divider>
        <Steps current={2}>
          <Step title={1} description="this is onStep 1" />
          <Step title={2} description="this is onStep 22" />
          <Step title={3} description="this is onStep 333" />
          <Step title={4} description="this is onStep 444" />
        </Steps>
        <Steps>
          <Step
            status="finish"
            title="finish"
            icon={<Icon type="user" />}
            description="this is finish 1"
          />
          <Step
            status="error"
            title="error"
            icon={<Icon type="warning" />}
            description="this is error 22"
          />
          <Step
            status="process"
            title="process"
            icon={<Icon type="loading" />}
            description="this is process 333"
          />
          <Step
            status="wait"
            title="wait"
            icon={<Icon type="smile-o" />}
            description="this is wait 444"
          />
        </Steps>
      </div>
    );
  }
}

export default index;
