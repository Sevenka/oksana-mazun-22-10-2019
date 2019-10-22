import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import WeatherFullView from '../WeatherFullView';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weathersList: [
        {
          id: 0,
          title: "Sunday",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 1,
          title: "Sunday",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 2,
          title: "Sunday",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 3,
          title: "Sunday",
          degrees: 30,
          weather: "Sunny"
        },
        {
          id: 4,
          title: "Sunday",
          degrees: 30,
          weather: "Sunny"
        }
      ]
    };
  }

  render() {
    return (
      <div className="home">
        <Form>
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="Enter city name" />
          </Form.Group>
        </Form>

        <WeatherFullView weathersList={this.state.weathersList} />
      </div>
    );
  }
}
