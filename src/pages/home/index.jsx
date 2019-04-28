import React, { Component } from "react";
import { Button, Divider, Spin } from "antd";
import { connect } from "react-redux";
import { changeRole } from "../../store/actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changeRole, home } = this.props;
    const { role, loading } = home;
    // console.log(`loading====${loading}`);
    // console.log(`-----home----------${home}------------`);
    return (
      // <div style={{ backgroundColor: "#ccc" }}>
      <Spin spinning={loading}>
        {/* <Skeleton loading={loading} active> */}
        <Divider>
          <Button
            type="primary"
            children={"changeUseRole"}
            onClick={() => (role !== "user" ? changeRole("user") : "")}
          />
        </Divider>
        <Divider>
          <Button
            type="primary"
            children={"changeShopRole"}
            onClick={() => changeRole("shop")}
          />
        </Divider>
        <Divider>
          <Button
            type="primary"
            children={"changeAllRole"}
            onClick={() => changeRole("all")}
          />
        </Divider>
        <Divider>ROLE : {role.toUpperCase()}</Divider>
        {/* </Skeleton> */}
      </Spin>
      // </div>
    );
  }
}
const mapStateToProps = state => ({
  home: state.home
});
export default connect(
  mapStateToProps,
  { changeRole }
)(Home);
