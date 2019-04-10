import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
    
    render() {

        const { title, image, description } = this.props;

        return (
            <div className="Project">
                <div className="overlay"> 
                    <img src={image} alt={title} />
                </div>
                <div className="project-description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default Project;