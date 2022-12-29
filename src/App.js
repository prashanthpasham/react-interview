import React from 'react';
import './style.css';
import City from './City';
import StateExample from './StateExample';
import Child from './Child';
import AppRender from './AppRender';
import Hello from './Hello';
import Approach from './Approach';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      x: {
        a: 1,
        b: 200,
      },
    };
  }
  render() {
    return (
      <div>
        <Approach />
        <Hello name="World" />

        <button
          onClick={() => {
            const obj = this.state.x;
            obj.a = 2;
            obj.a++;
            this.setState({ counter: this.state.counter + 1, x: obj });
          }}
        >
          Increment
        </button>
        <Child
          key={this.state.counter}
          value={this.state.counter}
          x={this.state.x}
        />

        <City />
        <StateExample />
        <AppRender />
      </div>
    );
  }
}
