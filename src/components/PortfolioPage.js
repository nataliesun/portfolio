import React, { Component } from 'react';
import Header from './Header';
import ProjectList from './ProjectList';



class PortfolioPage extends Component {
    render() {
        return (
            <div className="content-container">
                <Header page='main'/>
                <ProjectList />
            </div>
        );
    }
}

export default PortfolioPage;