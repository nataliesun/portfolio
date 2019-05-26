import React, { Component } from 'react';
import Logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');


        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');

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
                    <li>
                        <NavLink to='/portfolio'>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' >
                            About
                        </NavLink>
                    </li>
                    <li>
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