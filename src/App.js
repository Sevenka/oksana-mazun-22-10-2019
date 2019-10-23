import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import mainRoute from './mainRoute';
import './css/App.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false
});

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />

        <Switch>
          <Route path={`${mainRoute}/favorites`}>
            <Favorites />
          </Route>
          <Route path={mainRoute}>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
