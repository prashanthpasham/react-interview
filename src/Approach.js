import React from 'react';
export default class Approach extends React.Component {
  render() {
    const user = { name: 'User First' };
    function test(user) {
      return user.name;
    }
    return (
      <div>
        <h1>{test(user)}</h1>
      </div>
    );
  }
}
