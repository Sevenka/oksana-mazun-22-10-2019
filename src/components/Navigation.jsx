import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Nav } from 'react-bootstrap';
import mainRoute from '../mainRoute';
import '../css/Navigation.css';

class Navigation extends Component {
  navigate(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <Nav
        variant="pills"
        activeKey={this.props.history.location.pathname}
        onSelect={selectedKey => this.navigate(selectedKey)}
        className="navigation">
        <h1>Herolo Weather Task</h1>

        <div className="links">
          <Nav.Item>
            <Nav.Link eventKey={mainRoute}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={`${mainRoute}/favorites`}>Favorites</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    );
  }
}

export default withRouter(Navigation);