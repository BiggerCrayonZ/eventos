import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


/* Components */
import Navbar from './components/template/NavBar';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Login from './components/auth/Login';

library.add(fas, fab);

const config = {
  issuer: 'https://dev-917519.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaj1kv24yYQSExTt0h7'
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
        >
          <div className="App">
            <Navbar />
            <div className="app_container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/events" exact={true} component={Events} />
              <Route
                path="/login"
                render={() => (
                  < Login baseUrl='https://dev-917519.oktapreview.com/oauth2/default' />
                )} />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
