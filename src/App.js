import React from 'react';
import './style.css';
import City from './City';
import StateExample from './StateExample';
import Child from './Child';
import AppRender from './AppRender';
import Hello from './Hello';
export default class App extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <Hello name="World" />

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
        <AppRender />
      </div>
    );
  }
}
