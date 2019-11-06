import * as emailjs from 'emailjs-com';
import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


import './ContactPage.scss';

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

    handleInputUpdate = (e, inputName) => {
        this.setState({
            [inputName]: e.target.value
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
                <div className='modal' id='send-modal'>
                    <span className="close" onClick={this.closeModal}>&times;</span>
                    <h2>
                        Sent!
                    </h2>
                </div>
                <div className="social">
                    <a href="https://github.com/nataliesun" target="_blank" rel="noopener noreferrer">Github <FontAwesomeIcon icon={faGithub} size="sm" /></a>
                    <a href="https://www.linkedin.com/in/natalie-sun-159476142/" target="_blank" rel="noopener noreferrer">LinkedIn <FontAwesomeIcon icon={faLinkedin} size="sm" /></a>
                </div>
                <form className="small-hide">
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
                                    onChange={(e) => this.handleInputUpdate(e, "name")} required />
                                <input
                                    id="email"
                                    value={this.state.email}
                                    onChange={(e) => this.handleInputUpdate(e, "email")}
                                    required
                                />
                                <input
                                    id="subject"
                                    value={this.state.subject}
                                    onChange={(e) => this.handleInputUpdate(e, "subject")}
                                    required
                                />
                            </div>
                        </div>
                        <div className="message-container">
                            <label htmlFor="message">Message: </label>
                            <textarea
                                id="message"
                                value={this.state.message}
                                onChange={(e) => this.handleInputUpdate(e, "message")}
                            />
                        </div>
                        <button className="ui button send-btn" onClick={this.handleSubmitForm}>

                            {!this.state.loading ? (<span>Send  {airplane} </span>
                            ) : (<span>{spinner}</span>)}
                        </button>

                    </div>
                </form>
                <form className="small-show">
                    <label>
                        Name:
                    </label>
                    <input type="text" value={this.state.name}
                        onChange={(e) => this.handleInputUpdate(e, "name")} />
                    <label>
                        Email:
                    </label>
                    <input type="email" value={this.state.email}
                        onChange={(e) => this.handleInputUpdate(e, "email")} />
                    <label>
                        Message:
                    </label>
                    <textarea value={this.state.message}
                        onChange={(e) => this.handleInputUpdate(e, "message")} />
                    <button className="ui button send-btn" onClick={this.handleSubmitForm}>

                        {!this.state.loading ? (<span>Send  {airplane} </span>
                        ) : (<span>{spinner}</span>)}
                    </button>
                </form>
            </div>
        );
    }
}

export default ContactPage;