import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  onSetCurrentLocation,
  removeFromFavorites
} from '../actions';
import { Card, Button } from 'react-bootstrap';

class WeatherSmallView extends Component {
  navigateFromFavorites(e, weatherItem) {
    e.preventDefault();
    this.props.onSetCurrentLocation(weatherItem);
    this.props.history.push('/');
  }

  getDayName() {
    const date = new Date(this.props.data.Date);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  render() {
    let title = '';

    if (this.props.dayName) {
      title = this.getDayName();
    } else {
      title = this.props.data.LocalizedName;
    }

    let degrees = '';
    if (this.props.temperatureRange) {
      const degreesMin = `${this.props.data.Temperature.Minimum.Value}°${this.props.data.Temperature.Minimum.Unit}`;
      const degreesMax = `${this.props.data.Temperature.Maximum.Value}°${this.props.data.Temperature.Maximum.Unit}`;
      degrees = `${degreesMin} - ${degreesMax}`;
    } else {
      degrees = `${this.props.data.Temperature.Imperial.Value}°${this.props.data.Temperature.Imperial.Unit}`;
    }

    let weatherPhrase = '';
    if (this.props.singleCity) {
      weatherPhrase = this.props.data.WeatherText;
    } else {
      weatherPhrase = this.props.data.Day.IconPhrase;
    }

    return (
      <Card>
        <Card.Body>
          <Card.Link
            href="#"
            onClick={(e) => this.navigateFromFavorites(e, this.props.data)}>
            {title}
          </Card.Link>
          <Card.Text>{degrees}</Card.Text>
          <Card.Text>{weatherPhrase}</Card.Text>
          {this.props.singleCity &&
          <Button
            variant="danger"
            onClick={() => this.props.removeFromFavorites(this.props.data.Key)}>
            Remove item
          </Button>}
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  onSetCurrentLocation,
  removeFromFavorites
};

export default connect(null, mapDispatchToProps)(withRouter(WeatherSmallView));
