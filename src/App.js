import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { changeRole } from "./store/actions";

import MainView from "./routes/mainView";
import LoginView from "./routes/loginView";
// import { Route, Switch, Redirect } from "react-router-dom";
// import { loginRoutes } from "./routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    role: PropTypes.string.isRequired
  };
  componentDidMount() {
    console.log(this.props.match);
    console.log(this.props);
  }
  render() {
    const { role, login } = this.props;

    return (
      <React.Fragment>
        {!role ? (
          // 登录前的 页面路由
          <LoginView />
        ) : (
          // 登录后的 路由页面
          <MainView role={role} clearRole={login} />
        )}
      </React.Fragment>
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
