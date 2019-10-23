import React, { Component } from 'react';
import SearchField from '../SearchField';
import WeatherFullView from '../WeatherFullView';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SearchField />

        <WeatherFullView />
      </div>
    );
  }
}

export default Home;
