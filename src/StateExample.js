import React from 'react';
export default class StateExample extends React.PureComponent {
  constructor() {
    super();
    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log('In Call back : ' + this.state.count);
      }
    );
    console.log('After Set Method : ' + this.state.count);
  }
  render() {
    console.log('render called count state is ' + this.state.count);
    return (
      <div>
        <button onClick={() => this.updateCount()}>Update Count</button>
      </div>
    );
  }
}
