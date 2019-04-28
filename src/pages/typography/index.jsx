import React from "react";

import { Typography, Divider } from "antd";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Loadable from "../../components/loadable/Index";
import { Icon } from "antd";
const { Title, Paragraph, Text } = Typography;
const getView = name =>
  Loadable({ loader: () => import(`../../pages${name}`) });
// const getCom = name => () => import(`../../pages${name}`);
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let { path, url } = this.props.match;
    console.log(this.props.match);
    console.log(path);
    console.log(url);
    const routes = [
      {
        path: `${url}/grid`,
        com: getView(`${url}/grid`),
        title: "grid",
        icon: "file"
      },
      {
        path: `${url}/layout`,
        com: getView(`${url}/layout`),
        title: "layout",
        icon: "cloud"
      },
      {
        path: `${url}/:id`,
        flag: true,
        com: getView(`${url}/other`),
        title: "other",
        icon: "branches"
      }
    ];
    console.log(routes);
    return (
      <div>
        <Title>介绍</Title>
        <Paragraph>
          蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
        </Paragraph>
        <Paragraph>
          随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
          Ant Design。基于<Text mark>『确定』和『自然』</Text>
          的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
          <Text strong>更好的用户体验</Text>。
        </Paragraph>
        <Title level={2}>设计资源</Title>
        <Paragraph>
          我们提供完善的设计原则、最佳实践和设计资源文件（
          <Text code>Sketch</Text> 和 <Text code>Axure</Text>
          ），来帮助业务快速设计出高质量的产品原型。
        </Paragraph>
        <Divider />
        <Paragraph>
          {/* <ul>
            <li>
              <a href="/typography/layout">typography/layout</a>
            </li>
            <li>
              <a href="/typography/grid">typography/grid</a>
            </li>
            <li>
              <a href="/docs/resource/download">设计资源</a>
            </li>
          </ul> */}
        </Paragraph>
        {/* <Route
          to={`${this.props.match.url}/grid`}
          component={getView(`${this.props.match.url}/grid`)}
        /> */}
        <ul>
          {routes.map(route =>
            route.flag ? (
              ""
            ) : (
              <li key={route.path}>
                <Link to={route.path}>
                  {route.title} <Icon type={route.icon} />
                </Link>
              </li>
            )
          )}
          <li>
            <Link to={`${url}/234`}>
              id234 <Icon type="fork" />
            </Link>
          </li>
        </ul>

        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.com}
            />
          ))}
          <Redirect from="" to={`${path}/grid`} />
        </Switch>
      </div>
    );
  }
}

export default index;
