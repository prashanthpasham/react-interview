import React from 'react';

export default class City extends React.Component {
  constructor() {
    super();
    this.state = { city: ['Kolkata', 'mumbai', 'delhi'] };
    var cityls = this.state.city;
    cityls.push('Bang');
    this.setState({ city: cityls });
  }
  render() {
    return (
      <div>
        {this.state.city.map(function (city) {
          return <li index={city}>{city}</li>;
        })}
      </div>
    );
  }
}
