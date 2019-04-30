import React from "react";
import { Button, Input } from "antd";
import { changeRole } from "../../store/actions";
import { connect } from "react-redux";
import Wrapper from "./style";

const Search = Input.Search;

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <Wrapper>
        <div className="loginCont">
          <h3>there is no Role</h3>
          <div className="formCont">
            <Search
              placeholder="input search text"
              onSearch={value => this.props.login(value)}
              enterButton="登录"
            />
            <Button onClick={() => this.props.login()}>like login</Button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: role => dispatch(changeRole(role))
});

export default connect(
  null,
  mapDispatchToProps
)(index);
