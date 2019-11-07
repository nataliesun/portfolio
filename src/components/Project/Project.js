import React, { Component } from 'react';
import './Project.scss'

class Project extends Component {


    render() {

        const { title, image, description, repo, link } = this.props;

        return (
            <div className="Project">
                <img src={image} alt={title} className="image" />
                <div className="project-description">
                    <h3>
                        <a
                            target="_blank"
                            href={link}
                            rel="noopener noreferrer"
                        >{title}
                        </a>
                    </h3>
                    <p>{description}</p>
                    {repo && <h4>
                        <a href={repo} target="_blank" rel="noopener noreferrer">Github</a>
                    </h4>}

                </div>
            </div>
        );
    }
}

export default Project;