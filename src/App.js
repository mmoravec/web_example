import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import { logout } from './redux/actions/login';
import './css/app.css';
import './css/index.css';
import './css/normalize.css';
import './css/tokensale.webflow.css';
import './css/webflow.css';
import './utilities.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}
