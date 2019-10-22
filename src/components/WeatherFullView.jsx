import React, { Component } from 'react';
import { Card, Media, Button } from "react-bootstrap";
import WeatherSmallView from './WeatherSmallView';
import '../css/WeatherFullView.css';

export default class WeatherFullView extends Component {
  render() {
    return (
      <Card className="weather-full-view">
        <div className="inner">
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://via.placeholder.com/64"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Tel Aviv</h5>
              <p>40 degrees</p>
            </Media.Body>
          </Media>
          <Button>Add to favorites</Button>
        </div>

        <div className="inner">
          {this.props.weathersList.map(weatherItem => (
            <WeatherSmallView
              data={weatherItem}
              key={weatherItem.id} />
          ))}
        </div>
      </Card>
    );
  }
}
