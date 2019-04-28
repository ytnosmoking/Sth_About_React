import React from "react";

class other extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  componentWillMount() {
    const { id } = this.props.match.params;
    if (!Number.isInteger(id / 1)) {
      this.props.history.goBack();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <span>URL :</span> <span>{this.props.match.url}</span>
        </div>
        <div>
          <span>ID :</span> <span>{this.props.match.params.id}</span>
        </div>
      </div>
    );
  }
}

export default other;
