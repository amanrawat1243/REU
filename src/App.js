// src/App.js
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Global styles
import Skills from './components/Skills'

const App = () => {
    return (
        <div className="App">
            <Header />
            <Skills/>
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
