import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFiveDaysForecast,
  addToFavorites
} from '../actions';
import { Card, Media, Button } from 'react-bootstrap';
import WeatherSmallView from './WeatherSmallView';
import '../css/WeatherFullView.css';

class WeatherFullView extends Component {
  onAddToFavorites() {
    this.props.addToFavorites(this.props.currentLocation);
  }

  componentDidMount() {
    this.props.getFiveDaysForecast(this.props.currentLocation.Key);
  }

  render() {
    const todaysForecast = this.props.fiveDaysForecast[0];
    const degreesMin = todaysForecast ? `${todaysForecast.Temperature.Minimum.Value}°${todaysForecast.Temperature.Minimum.Unit}` : '';
    const degreesMax = todaysForecast ? `${todaysForecast.Temperature.Maximum.Value}°${todaysForecast.Temperature.Maximum.Unit}` : '';

    return (
      <Card className="weather-full-view">
        <div className="inner">
          <Media>
            <Media.Body>
              <h5>{this.props.currentLocation.LocalizedName}</h5>
              <p>
                {degreesMin} - {degreesMax}
              </p>
            </Media.Body>
          </Media>
          <Button onClick={() => this.onAddToFavorites()}>Add to favorites</Button>
        </div>

        <div className="inner">
          {this.props.fiveDaysForecast.map(weatherItem => (
            <WeatherSmallView
              data={weatherItem}
              key={weatherItem.Date}
              temperatureRange
              days />
          ))}
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.weather.currentLocation,
  fiveDaysForecast: state.weather.fiveDaysForecast
});

const mapDispatchToProps = {
  getFiveDaysForecast,
  addToFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherFullView);
