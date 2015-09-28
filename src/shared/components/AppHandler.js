import React from "react";

export default class AppHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.getName()
    };
  }

  getNewName() {
    this.setState({
      username: this.getName()
    });
  }

  getName() {
    var possibleNames = [
      'You',
      'Me',
      'Mr Baggins',
      'Whatever'
    ],
      chosenNameIndex = this.getRandomInt(0, possibleNames.length);

    return possibleNames[chosenNameIndex];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return <div>Hello, { this.state.username }!
      This text was rendered by the { this.props.renderedBy }.

      <button type="button" onClick={this.getNewName.bind(this)}>Get new name</button>
    </div>;
  }
};

AppHandler.propTypes = { renderedBy: React.PropTypes.string };
AppHandler.defaultProps = { renderedBy: 'nothing' };
