import React from 'react';
import AnimatedSection from './AnimatedSection';

const Education = () => (
    <section id="education">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Education</h2>
            </div>
            <div className="info-card education-item">
                <h3 className="education-degree">Diploma in Computer Science and Engineering</h3>
                <p className="education-university">Arka Jain University | Jamshedpur, Jharkhand</p>
                <p className="education-date">Completed: Jul 2021</p>
            </div>
        </AnimatedSection>
    </section>
);

export default Education;
