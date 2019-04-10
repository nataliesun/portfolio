import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';


import AboutPage from './AboutPage';
import ContactPage from './ContactPage';


import { Route } from 'react-router-dom'
import PortfolioPage from './PortfolioPage';


class App extends Component {
  state = {
    projects: [
      {
        title: 'For Drizzle', image: 'https://cnet2.cbsistatic.com/img/r55D9EFCaaNpPVUay88jTv5-gZ4=/830x467/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg', description: 'Full stack, React, Web Application'
      }, {
        title: 'Quiz App', image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', description: 'Full stack, React, Web Application'
      },
      {
        title: 'For Drizzle', image: 'https://cnet2.cbsistatic.com/img/r55D9EFCaaNpPVUay88jTv5-gZ4=/830x467/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg', description: 'Full stack, React, Web Application'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <NavBar/>

          <Route exact path='/' render={() => 
            <PortfolioPage projects={this.state.projects} />
          } />
        
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
        
          
      </div>
    );
  }
}

export default App;
