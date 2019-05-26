import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage'
import PortfolioPage from './components/PortfolioPage';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route exact path='/portfolio' component={PortfolioPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />

      </div>
    );
  }
}

export default App;
