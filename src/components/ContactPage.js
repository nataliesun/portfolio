import * as emailjs from 'emailjs-com';
import React, { Component } from 'react';
import Header from './Header';
import beach from '../assets/icons/beach.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

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
        const modal = document.getElementById('send-modal');
        this.setState({
            loading: true
        })


        const { name, email, message, subject } = this.state;

        if (name && email && message && subject) {
            emailjs.send('sendgrid', 'template_f4iMq26t', this.state, 'user_KeO7FlZ4bJY35pYpiCOTi')
                .then((res) => {
                    modal.style.display = 'block';
                    this.setState({
                        name: '',
                        email: '',
                        message: '',
                        subject: '',
                        loading: false
                    });
                })
        }

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

    closeModal = () => {
        const modal = document.getElementById('send-modal');
        modal.style.display = 'none';
    }


    render() {
        const airplane = <FontAwesomeIcon icon={faPaperPlane} size="sm" />
        const spinner = <FontAwesomeIcon icon={faSpinner} spin size="sm" />
        return (
            <div className="ContactPage">
                <Header page='contact' />
                <img src={beach} alt="beach" id="banner" />
                <CircleIcon />
                <div className='modal' id='send-modal'>
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <h2>
                        Sent!
                    </h2>
                </div>
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
                                    onChange={this.handleUpdateName} required />
                                <input
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleUpdateEmail}
                                    required
                                />
                                <input
                                    id="subject"
                                    value={this.state.subject}
                                    onChange={this.handleUpdateSubject}
                                    required
                                />
                            </div>
                        </div>
                        <div className="message-container">
                            <label htmlFor="message">Message: </label>
                            <textarea
                                id="message"
                                value={this.state.message}
                                onChange={this.handleUpdateMessage}
                            />
                        </div>
                        <button className="ui button send-btn" onClick={this.handleSubmitForm}>

                            {!this.state.loading ? (<span>Send  {airplane} </span>
                            ) : (<span>{spinner}</span>)}
                        </button>

                    </div>
                </form>

            </div>
        );
    }
}

export default ContactPage;