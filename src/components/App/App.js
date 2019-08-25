import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AboutPage from '../../routes/AboutPage/AboutPage';
import ContactPage from '../../routes/ContactPage/ContactPage'
import PortfolioPage from '../../routes/PortfolioPage/PortfolioPage';
import NavBar from '../NavBar/NavBar'

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
