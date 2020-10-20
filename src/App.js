import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Details } from './Details';
import { Matches } from './Matches';
import { Standings } from './Standings';
import { Squad } from './Squad';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container-sm" style={{minHeight: "calc(100vh - 270px)"}}>
          <Switch>
            <Route exact path="/" component={Details} />
            <Route path="/matches" component={Matches} />
            <Route path="/standings" component={Standings} />
            <Route path="/squad" component={Squad} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
