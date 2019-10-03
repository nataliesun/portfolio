import React, { Component } from 'react';
import './CircleIcon.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMobileAlt, faEnvelopeOpenText, faMapPin } from "@fortawesome/free-solid-svg-icons";

class CircleIcon extends Component {
    render() {
        return (
            <section className="contact-icons">
                <ul className="circles">
                    <li>
                        <div className="circle">
                            <FontAwesomeIcon icon={faMobileAlt} />
                            <p>Phone</p>
                        </div>
                        <p>+1(310)-382-6828</p>
                    </li>
                    <li>
                        <div className="circle">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            <p>Email</p>
                        </div>
                        <p>nataliemsun@gmail.com</p>
                    </li>
                    <li>
                        <div className="circle">
                            <FontAwesomeIcon icon={faMapPin} />
                            <p>Location</p>
                        </div>
                        <p>San Diego, CA</p>
                    </li>
                </ul>
            </section>


        );
    }
}

export default CircleIcon;