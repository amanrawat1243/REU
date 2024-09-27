// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
    const educationList = [
        {
            institution: "Graphic Era Deemed University",
            degree: "Bachelor of Science in Information Technology",
            year: "2019 - 2022"
        },
        
        {
            institution: " SGRR Dehradun",
            degree: "Senior secondary education",
            year: "2016-2018"
        },

        {
            institution: " High School St Thomas Pauri",
            degree: "High School Diploma",
            year: "2016"
        }
    ];

    return (
        <section id="education" className="education">
            <h2>Education</h2>
            <div className="education-list">
                {educationList.map((edu, index) => (
                    <div className="education-item" key={index}>
                        <h3>{edu.institution}</h3>
                        <p>{edu.degree}</p>
                        <p>{edu.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
