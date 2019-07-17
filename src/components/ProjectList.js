import React, { Component } from 'react';
import Project from './Project';

import forDrizzle from '../assets/forDrizzle.jpg';
import estateCloud from '../assets/estateCloud.jpg';

import './ProjectList.scss';




class ProjectList extends Component {

    render() {

        return (
            <main className="ProjectList">
                <Project image={estateCloud} title='EstateCloud' description="React, responsive design, HTML5, CSS3, Node.js, Express, Postgresql" link="https://estatecloud-app.nataliesun.now.sh" repo="https://github.com/nataliesun/for-drizzle" />

                <Project image={forDrizzle} title='For Drizzle' description="Javascript, jQuery, HTML5, CSS3, RestfulAPI" link="https://nataliesun.github.io/for-drizzle/" repo="https://github.com/nataliesun/estatecloud-app" />

            </main>
        )
    }
}

export default ProjectList;