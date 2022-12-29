import React from 'react';
export default class Hello extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props.name);
    this.state = { name: 'Guest!!!' };
  }
  getName() {
    return 'Guest';
  }
  getWelcomeMessage() {
    return 'Welcome';
  }
  render() {
    var message = this.getWelcomeMessage() + ' ' + this.getName();
    return <h1>{message}</h1>;
  }
}
