import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ProjectList from '../../components/ProjectList/ProjectList';

import './PortfolioPage.scss';

class PortfolioPage extends Component {
    render() {
        return (
            <div className="PortfolioPage">
                <Header page='main' />
                <ProjectList />
            </div>
        );
    }
}

export default PortfolioPage;