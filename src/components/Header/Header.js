import React, { Component } from 'react';
import './Header.scss';

import Typing from 'react-typing-animation';

class Header extends Component {
    state = { width: 0, height: 0 };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const greetings = ["Hello!", "こんにちは!", "Hola!", "안녕하세요!"];
        let content = '';
        const main = (
            <div className="Header">
                <div className="greeting">
                    <Typing loop cursorClassName="blue">
                        <h1 id="typing">{greetings[0]}
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
            </div>
        )

        const mobile = (
            <div className="Header">
                <div className="greeting">
                    <Typing cursorClassName="blue">
                        <h1 id="typing">{greetings[0]}
                        </h1>
                    </Typing>
                </div>
                <p className="subtitle">I'm Natalie a full-stack web developer.</p>
            </div>
        )

        const about = (
            <div className="Header">
                <h1>About Me</h1>
            </div>
        )
        const contact = (
            <div className="Header">
                <h1>Contact</h1>
            </div>
        )

        if (this.props.page === 'main') {
            if (this.state.width > 735) {
                content = main
            }
            content = mobile
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