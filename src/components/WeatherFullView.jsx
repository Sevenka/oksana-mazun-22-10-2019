import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFiveDaysForecast,
  addToFavorites,
  removeFromFavorites
} from '../actions';
import { Card, Media, Button } from 'react-bootstrap';
import WeatherSmallView from './WeatherSmallView';
import '../css/WeatherFullView.css';

class WeatherFullView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocationInFavorites: false
    }
  }

  onAddToFavorites() {
    this.props.addToFavorites(this.props.currentLocation);
    this.setState({ isLocationInFavorites: true });
  }

  onRemoveFromFavorites() {
    this.props.removeFromFavorites(this.props.currentLocation.Key);
    this.setState({ isLocationInFavorites: false });
  }

  componentDidMount() {
    this.props.getFiveDaysForecast(this.props.currentLocation.Key);
    this.setState({ isLocationInFavorites: this.props.favoriteLocations.some(item => item.Key === this.props.currentLocation.Key) });
  }

  componentDidUpdate(prevProps) {
    if ((this.props.currentLocation !== prevProps.currentLocation) || (this.props.favoriteLocations !== prevProps.favoriteLocations)) {
      this.setState({ isLocationInFavorites: this.props.favoriteLocations.some(item => item.Key === this.props.currentLocation.Key) });
    }
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
          {this.state.isLocationInFavorites ?
            <Button onClick={() => this.onRemoveFromFavorites()} variant="danger">Remove from favorites</Button>
          :
            <Button onClick={() => this.onAddToFavorites()}>Add to favorites</Button>}
        </div>

        <div className="inner flex-wrap">
          {this.props.fiveDaysForecast.map(weatherItem => (
            <WeatherSmallView
              data={weatherItem}
              key={weatherItem.Date}
              dayName
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
  fiveDaysForecast: state.weather.fiveDaysForecast,
  favoriteLocations: state.weather.favoriteLocations
});

const mapDispatchToProps = {
  getFiveDaysForecast,
  addToFavorites,
  removeFromFavorites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherFullView);
