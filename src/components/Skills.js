// src/components/Skills.js
import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: "Java", icon: <FaJava /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "MySQL", icon: <FaDatabase /> },
      
        { name: "MongoDB", icon: <FaDatabase /> }, // Use FaDatabase for MongoDB
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skill-list">
                {skills.map(skill => (
                    <div className="skill" key={skill.name}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
