import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from "./components/Navigation";
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import './css/App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />

        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
