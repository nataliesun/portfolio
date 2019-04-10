import React, { Component } from 'react';
import './Header.css';

import Typing from 'react-typing-animation';

class Header extends Component {
    render() {
        const greetings = ["Hello!", "こんにちは!", "Hola!","안녕하세요!"];
        let content = '';
        const main = (
            <>
            <div className="greeting">
                <Typing loop cursorClassName="blue">
                    <h1>{greetings[0]}
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={greetings[0].length + 1} />
                    {greetings[1]}
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={greetings[1].length + 1} />
                    {greetings[2]}
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={greetings[2].length + 1} />
                    {greetings[3]}
                    <Typing.Delay ms={1000} />
                    <Typing.Backspace count={greetings[3].length + 1} />
                    </h1>
            </Typing>
            </div>
                <p className="subtitle">I'm Natalie a full-stack web developer.</p>
                </>
        )
        const about = (
            <>
                <h1>About Me</h1>
            </>
        )
        const contact = (
            <>
                <h1>Contact</h1>
            </>
        )

        if (this.props.page === 'main') {
            content = main
        } else if (this.props.page === 'about') {
            content = about
        } else {
            content = contact
        }
        return (
            <header className="App-header">
                {content}
                <div className="line"></div>
            </header>
        );
    }
}

export default Header;