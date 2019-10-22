import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherSmallView from '../WeatherSmallView';

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weathersList: [
        {
          id: 0,
          title: "TelAviv",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 1,
          title: "TelAviv",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 2,
          title: "TelAviv",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 3,
          title: "TelAviv",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 4,
          title: "TelAviv",
          degrees: 30,
          weather: "Sunny"
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.weathersList.map(weatherItem => (
            <Col key={weatherItem.id}>
              <WeatherSmallView data={weatherItem} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
