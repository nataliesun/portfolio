import React, { Component } from 'react';

import Project from './Project';

import forDrizzle from '../assets/forDrizzle.jpg';
import quizApp from '../assets/quizApp.jpg';

import './ProjectList.css';




class ProjectList extends Component {

    render() {

        return (
            <main className="ProjectList">
                <Project image={forDrizzle} title='For Drizzle' description="Javascript, jQuery, HTML5, CSS3, RestfulAPI" link="https://nataliesun.github.io/for-drizzle/" />

                <Project image={quizApp} title='Quiz App' description="Javascript, responsive design, HTML5, CSS3, jQuery" link="https://nataliesun.github.io/quizApp/" />
            </main>
        )
    }
}

export default ProjectList;