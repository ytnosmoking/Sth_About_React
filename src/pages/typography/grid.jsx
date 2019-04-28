import React from "react";
import Gridstyle from "./gridStyle";

import { Row, Col } from "antd";
class grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.match.url);
  }
  render() {
    return (
      <Gridstyle>
        <Row>
          <Col span={12}> col-12</Col>
          <Col span={12}> col-12</Col>
        </Row>
        <Row>
          <Col span={8}> col-8</Col>
          <Col span={8}> col-8</Col>
          <Col span={8}> col-8</Col>
        </Row>
        <h1>gutter</h1>
        <Row>
          <Col span={8}> col-8</Col>
          <Col span={8} offset={8}>
            {" "}
            col-8
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            {" "}
            col-8
          </Col>
        </Row>
        <h2>响应</h2>
        <Row>
          <Col
            xs={{ span: 2, offset: 10 }}
            sm={{ span: 16, offset: 8 }}
            md={22}
            lg={{ span: 1, offset: 12 }}
            xl={10}
            xxl={14}
          >
            {" "}
            col-8
          </Col>
        </Row>
      </Gridstyle>
    );
  }
}

export default grid;
