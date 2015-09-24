import React from "react";

export default class AppHandler extends React.Component {
  constructor() {
    super();
    this.username = this._getName();
  }

  render() {
    return <div>Hello, { this.username }!
      This text was rendered by the { this.props.renderedBy }.</div>;
  }

  _getName() {
    var possibleNames = [
      'You',
      'Me',
      'Mr Baggins',
      'Whatever'
    ],
      chosenNameIndex = this._getRandomInt(0, possibleNames.length);

    return possibleNames[chosenNameIndex];
  }

  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
