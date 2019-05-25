import React, { Component } from 'react';
import Header from './Header';
import nataliesun from '../assets/nataliesun.jpg';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <Header page='about' />
                <div className="split-container">
                    <div className="split left">
                        {/* move to public */}
                        <img src={nataliesun} alt="natalie" />
                    </div>
                    <div className="split right">
                        <p>
                            Hi, I’m Natalie! I’m a driven, versatile full-stack web developer and design enthusiast with expertise in React frontend and Node.js backend. I have professional experience in contracts and finance and have honed a diverse set of transferable skills in my business management career, including problem solving, project management, communications, and strategic planning—that have enriched my recent career change to web development.
                        </p>
                        <div className="tech-lists">
                            <div>
                                <h3>
                                    Languages:
                                </h3>
                                <ul>
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>

                            </div>
                            <div>
                                <h3>
                                    Technologies:
                                </h3>
                                <ul>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Postgresql</li>
                                    <li>RESTful APIs</li>
                                </ul>
                            </div>
                            <div>
                                <h3>
                                    Tools:
                                </h3>
                                <ul>
                                    <li>Git & Github</li>
                                    <li>Terminal</li>
                                    <li>Heroku</li>
                                    <li>Zeit (Now)</li>
                                </ul>
                            </div>

                        </div>
                        <div className="hobbies">
                            <h3>Hobbies:</h3>
                            <ul className="about-icons">
                                <li datatype="surfing">
                                    <img src='./assets/005-surf-1.png' alt="surfing" />
                                </li>
                                <li datatype="volleyball">
                                    <img src='./assets/004-volleyball.png' alt="surfing" />
                                </li>
                                <li datatype="snowboarding">
                                    <img src='./assets/003-snowboard.png' alt="snowboard" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;