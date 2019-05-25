import * as emailjs from 'emailjs-com';
import React, { Component } from 'react';
import Header from './Header';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import './ContactPage.css'
import CircleIcon from './CircleIcon';

class ContactPage extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        subject: '',
        loading: false
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            loading: true
        })

        emailjs.send('sendgrid', 'template_f4iMq26t', this.state, 'user_KeO7FlZ4bJY35pYpiCOTi')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                console.log(this)
            }, function (err) {
                console.log('FAILED...', err);
            });
    }

    handleUpdateName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleUpdateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleUpdateSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    }
    handleUpdateMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    render() {

        return (
            <div className="ContactPage">
                <Header page='contact' />
                <img src="./assets/beach-sunrise.jpg
                " alt="beach" id="banner" />
                <CircleIcon />
                <form>
                    <div className="form-container">
                        <div className="info-container">
                            <div className="labels-container">
                                <label htmlFor="name" >Name: </label>
                                <label htmlFor="email">Email: </label>
                                <label htmlFor="subject">Subject: </label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleUpdateName} />
                                <input
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleUpdateEmail}
                                />
                                <input
                                    id="subject"
                                    value={this.state.subject}
                                    onChange={this.handleUpdateSubject}
                                />
                            </div>
                        </div>
                        <div className="message-container">
                            <label htmlFor="message">Message: </label>
                            <textarea
                                id="message"
                                value={this.state.subjmessageect}
                                onChange={this.handleUpdateMessage}
                            />
                        </div>
                        <button className="ui button" onClick={this.handleSubmitForm}>Send{" "}
                            <FontAwesomeIcon icon={faPaperPlane} size="sm" />
                        </button>

                    </div>
                </form>

            </div>
        );
    }
}

export default ContactPage;