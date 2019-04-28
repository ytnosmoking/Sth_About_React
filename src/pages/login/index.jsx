import React from "react";
import { Typography, Button, Input } from "antd";
import { changeRole } from "../../store/actions";
import { connect } from "react-redux";

const { Text } = Typography;
const Search = Input.Search;

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Text>there is no Role</Text>
        <Search
          placeholder="input search text"
          onSearch={value => this.props.login(value)}
          enterButton
        />
        <Button onClick={() => this.props.login()}>like login</Button>
      </div>
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
