import React, { Component } from "react";

import { withRouter } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { WrapRoot } from "./style";
import PropTypes from "prop-types";
import { changeRole } from "./store/actions";

// import Login from "./pages/login";
import BaseView from "./components/baseCont";
import LoginView from "./components/loginCont";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    role: PropTypes.string.isRequired
  };

  render() {
    const { role, login } = this.props;

    return (
      <WrapRoot>
        {!role ? (
          // 登录前的 页面路由
          <LoginView />
        ) : (
          // 登录后的 路由页面
          <BaseView role={role} clearRole={login} />
        )}
      </WrapRoot>
    );
  }
}

const mapStateToProps = state => ({
  role: state.home.role
});
const mapDispatchToProps = dispatch => ({
  login: role => dispatch(changeRole(role))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
