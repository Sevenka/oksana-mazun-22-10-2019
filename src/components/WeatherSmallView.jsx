import React from 'react';
import { Card } from 'react-bootstrap';

export default function WeatherSmallView(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.degrees}</Card.Text>
        <Card.Text>{props.data.weather}</Card.Text>
      </Card.Body>
    </Card>
  );
}
