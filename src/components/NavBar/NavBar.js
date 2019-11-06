import React, { Component } from 'react';
import Logo from '../../assets/images/Logo.png';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {
    state = {
        width: 0,
    }

    navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');


        nav.classList.toggle('nav-active');

        if (this.state.width < 768) {
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        }

        //burger animation
        burger.classList.toggle('toggle');

    }

    componentDidMount() {
        this.setState({ width: window.innerWidth });
        window.addEventListener('resize', this.handlResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handlResize);
    }

    handlResize = () => {
        this.setState({ width: window.innerWidth });
    }

    render() {

        return (
            <nav className="NavBar">
                <NavLink to='/portfolio'>
                    <img src={Logo} alt="natalie-sun" />
                </NavLink>
                <div className="burger" onClick={this.navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-links">
                    <li onClick={this.navSlide}>
                        <NavLink to='/portfolio'>
                            Portfolio
                        </NavLink>
                    </li>
                    <li onClick={this.navSlide}>
                        <NavLink to='/about' >
                            About
                        </NavLink>
                    </li>
                    <li onClick={this.navSlide}>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;