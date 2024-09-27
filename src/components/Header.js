// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Aman Rawat</h1>
            <p>Full Stack Developer</p>
            <a href="#contact" className="btn">Contact Me</a>
        </header>
    );
};

export default Header;
