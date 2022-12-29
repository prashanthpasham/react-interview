import React from 'react';
export default class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value,
    };
  }
  render() {
    return <h1>{this.state.counter}</h1>;
  }
}
