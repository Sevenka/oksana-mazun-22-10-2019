import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Dropdown } from 'react-bootstrap';
import {
  onSetCurrentLocation,
  getAutocompleteSearch
} from '../actions';
import '../css/SearchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.searchField = React.createRef(); 

    this.state = {
      dropdownIsShown: false,
      searchValue: ''
    };
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  showDropdown() {
    this.setState({ dropdownIsShown: true });
  }

  hideDropdown() {
    this.setState({ dropdownIsShown: false });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.onShowDropdown();
    }
  }

  onShowDropdown() {
    this.props.getAutocompleteSearch(this.state.searchValue);
    this.showDropdown();
  }

  onSelectItem(location) {
    this.props.onSetCurrentLocation(location);
    this.hideDropdown();
  }

  render() {
    return (
      <Form onKeyPress={e => this.handleKeyPress(e)}>
        <Form.Group controlId="search" className="search-field">
          <Form.Control
            type="text"
            placeholder="Enter city name"
            value={this.state.searchValue}
            onChange={(e) => this.handleChange(e)} />

          <Dropdown.Menu show={this.state.dropdownIsShown}>
            {this.props.locationsAutocomplete.map(location => (
              <Dropdown.Item
                onClick={() => this.onSelectItem(location)}
                key={location.Key}>
                {location.LocalizedName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.weather.currentLocation,
  locationsAutocomplete: state.weather.locationsAutocomplete
});

const mapDispatchToProps = {
  onSetCurrentLocation,
  getAutocompleteSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);