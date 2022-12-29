import React from 'react';
const Test = () => {
  return <h1>Test Component222</h1>;
};
export default class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value,
      x: this.props.x.a,
    };
    console.log('child constructor :: ' + this.state);
  }

  render() {
    console.log('render child called!');
    const user={
      name:'testing'
    }
    return (
      <div>
        <h1>Child Component!</h1>
        <p>counter:{this.state.counter}</p>
        <p> a is {this.state.x}</p>
        <Test />
      </div>
    );
  }
}
