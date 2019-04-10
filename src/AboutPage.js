import React, { Component } from 'react';
import Header from './Header';
import nataliesun from './assets/nataliesun.jpg';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="AboutPage">
                <Header page='about' />
                <div className="split-container">
                <div className="split left">
                    <img src={nataliesun} alt="natalie"/>
                </div>
                <p className="split right">
                    Hi, I’m Natalie! I’m a driven, versatile full-stack web developer and design enthusiast with expertise in front end UI/UX development and React. I have professional experience crafting impactful content and have honed a diverse set of transferable skills in my public relations and scientific publishing careers—including problem solving, project management, communications, and strategic planning—that have enriched my recent career change to web development. <br /><br />

                    I’m a detail-oriented, deadline-conscious self-starter who learns quickly and adapts easily to changing workflows and the unique needs of several clients, ranging from government and national research institutes to pharma and biotech startups. I have a track record of producing high quality, accurate work with fast turnaround times and effectively leveraging problem-solving and interpersonal skills to tackle challenges.<br /><br />

                    As a web developer, I have built dynamic end-to-end web applications that utilize HTML5, CSS3, JavaScript, jQuery, AJAX, responsive design, JSON, RESTful APIs, Bootstrap, Handlebars.js, Firebase, cookies, local storage, Node.js, Express.js, React.js, MongoDB, MySQL, Sequelize, MVC, Heroku, and Git. I’m excited to continue cultivating my technical knowledge and contribute meaningfully to impact-driven, technological advancements that improve the human experience.
                </p>
                </div>
            </div>
        );
    }
}

export default AboutPage;