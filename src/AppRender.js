import React from 'react';
export default class AppRender extends React.PureComponent {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h4', null, 'Hi,'),
      React.createElement('h4', null, 'Welcome,'),
      'Guest'
    );
  }
}
