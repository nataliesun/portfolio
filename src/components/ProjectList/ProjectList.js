import React, { Component } from 'react';
import Project from '../Project/Project';

import forDrizzle from '../../assets/images/forDrizzle.jpg';
import estateCloud from '../../assets/images/estateCloud.jpg';
import everest from '../../assets/images/everest.jpg';
import tsVolleyball from '../../assets/images/tsVolleyball.jpg';


import './ProjectList.scss';




class ProjectList extends Component {

    render() {

        return (
            <main className="ProjectList">
                <Project image={estateCloud} title='EstateCloud' description="React, responsive design, HTML5, CSS3, Node.js, Express, Postgresql" link="https://estatecloud.nataliesun.now.sh" repo="https://github.com/nataliesun/for-drizzle" />

                <Project image={forDrizzle} title='For Drizzle' description="Javascript, jQuery, HTML5, CSS3, RestfulAPI" link="https://nataliesun.github.io/for-drizzle/" repo="https://github.com/nataliesun/estatecloud-app" />

                <Project image={everest} title='Everest' description="React, Javascript, jQuery, HTML5, CSS3, Node, Express, Postgresql" link="https://everest.everest.now.sh" repo="https://www.github.com/mengqi89/everest-client" />

                <Project image={tsVolleyball} title='Taylor Sun Volleyball' description="React, Javascript, HTML5, CSS3, SASS" link="https://build.nataliesun.now.sh/" />

            </main>
        )
    }
}

export default ProjectList;