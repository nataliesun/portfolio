import React, { Component } from 'react';
import Header from './Header';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import './ContactPage.css'
import CircleIcon from './CircleIcon';

class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <Header page='contact' />
                {/* <h2>Get in touch!</h2>  */}
                <img src="https://imgnooz.com/sites/default/files/wallpaper/nature/60808/beach-sunrise-horizon-wallpapers-60808-7395803.jpg" alt="beach" id="banner"/>
                <CircleIcon />
                <form>
                    <div className="info-container">
                        <div className="labels-container">
                            <label htmlFor="name">Name: </label>
                            <label htmlFor="email">Email: </label>
                            <label htmlFor="subject">Subject: </label>
                        </div>
                        <div className="input-container">
                            <input id="name" />
                            <input id="email" />
                            <input id="subject"/>
                        </div>
                    </div>
                    <div className="message-container">
                        <label htmlFor="message">Message: </label>
                        <textarea id="message"></textarea>
                    </div>
                    <button>Send{" "}
                        <FontAwesomeIcon icon={faPaperPlane} size="sm"/>
                    </button>
                </form>

            </div>
        );
    }
}

export default ContactPage;