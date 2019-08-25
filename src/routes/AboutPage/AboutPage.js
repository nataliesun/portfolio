import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import nataliesun from '../../assets/nataliesun.jpg';
import surfing from '../../assets/icons/surf.png';
import volleyball from '../../assets/icons/volleyball.png';
import snowboarding from '../../assets/icons/snowboarding.png';
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
                            Hi, I’m Natalie! I’m a full-stack web developer and design enthusiast with expertise in React frontend and Node.js backend.
                        </p>
                        <p>
                            Based in San Diego. Open to freelance projects and remote jobs.
                        </p>
                        <p>
                            Lover of good food and drink.
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
                                    <li>SVN</li>
                                </ul>
                            </div>

                        </div>
                        <div className="hobbies">
                            <h3>Hobbies:</h3>
                            <ul className="about-icons">
                                <li datatype="surfing">
                                    <img src={surfing} alt="surfing" />
                                </li>
                                <li datatype="volleyball">
                                    <img src={volleyball} alt="volleyball" />
                                </li>
                                <li datatype="snowboarding">
                                    <img src={snowboarding} alt="snowboard" />
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