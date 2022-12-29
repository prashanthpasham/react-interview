import React from 'react';
import './style.css';
import City from './City';
import StateExample from './StateExample';
import Child from './Child';
export default class App extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>

        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
        <Child value={this.state.counter} />

        <City />
        <StateExample />
      </div>
    );
  }
}
