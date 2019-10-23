import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class WeatherSmallView extends Component {
  getDayName() {
    const date = new Date(this.props.data.Date);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  render() {
    const dayName = this.getDayName();
    const degreesMin = `${this.props.data.Temperature.Minimum.Value}°${this.props.data.Temperature.Minimum.Unit}`;
    const degreesMax = `${this.props.data.Temperature.Maximum.Value}°${this.props.data.Temperature.Maximum.Unit}`;

    return (
      <Card>
        <Card.Body>
          <Card.Title>{dayName}</Card.Title>
          <Card.Text>
            {degreesMin} - {degreesMax}
          </Card.Text>
          <Card.Text>{this.props.data.Day.IconPhrase}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
