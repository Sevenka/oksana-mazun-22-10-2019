import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMultipleCurrentConditions } from '../../actions';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherSmallView from '../WeatherSmallView';

class Favorites extends Component {
  componentDidMount() {
    this.props.getMultipleCurrentConditions();
  }

  render() {
    const favoriteLocationsWithWeather = this.props.favoriteLocationsWithWeather.map(weatherItem => (
      <Col key={weatherItem.Key}>
        <WeatherSmallView
          data={weatherItem}
          singleCity />
      </Col>
    ));

    return (
      <Container>
        <Row className="justify-content-md-center">
          {favoriteLocationsWithWeather}
          {!favoriteLocationsWithWeather.length && <h2>No favorites</h2>}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favoriteLocations: state.weather.favoriteLocations,
  favoriteLocationsWithWeather: state.weather.favoriteLocationsWithWeather
});

const mapDispatchToProps = {
  getMultipleCurrentConditions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
