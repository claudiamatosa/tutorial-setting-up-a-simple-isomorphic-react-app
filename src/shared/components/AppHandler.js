import React from "react";

export default class AppHandler extends React.Component {
  render() {
    return <div>Hello, { this.props.name }!
      This text was rendered by the { this.props.renderedBy }.</div>;
  }
}
