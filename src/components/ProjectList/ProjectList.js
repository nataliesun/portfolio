import React, { Component } from 'react';
import Project from '../Project/Project';

import forDrizzle from '../../assets/forDrizzle.jpg';
import estateCloud from '../../assets/estateCloud.jpg';
import everest from '../../assets/everest.jpg';


import './ProjectList.scss';




class ProjectList extends Component {

    render() {

        return (
            <main className="ProjectList">
                <Project image={estateCloud} title='EstateCloud' description="React, responsive design, HTML5, CSS3, Node.js, Express, Postgresql" link="https://estatecloud.nataliesun.now.sh" repo="https://github.com/nataliesun/for-drizzle" />

                <Project image={forDrizzle} title='For Drizzle' description="Javascript, jQuery, HTML5, CSS3, RestfulAPI" link="https://nataliesun.github.io/for-drizzle/" repo="https://github.com/nataliesun/estatecloud-app" />

                <Project image={everest} title='Everest' description="React, Javascript, jQuery, HTML5, CSS3, Node, Express, Postgresql" link="https://everest.everest.now.sh" repo="https://www.github.com/mengqi89/everest-client" />
            </main>
        )
    }
}

export default ProjectList;