import React from 'react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';

const Skills = () => (
    <section id="skills">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Skills & Certifications</h2>
            </div>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skills-header"><Icon name="star" size={20} /> <h3 className="skills-title">Core Competencies</h3></div>
                    <ul className="skills-list">
                        {['SEO', 'PPC', 'SEM', 'Performance Marketing', 'eCommerce Management', 'Content Strategy', 'Video Marketing & YouTube SEO', 'CRM Integration', 'Google Ads', 'Meta Ads', 'UI/UX Design', 'CRO'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
                <div className="skill-card">
                     <div className="skills-header"><Icon name="tool" size={20} /> <h3 className="skills-title">Technical Stack</h3></div>
                    <ul className="skills-list">
                        {['JavaScript', 'HTML', 'CSS', 'Google Analytics', 'Google Tag Manager', 'Semrush', 'WordPress', 'WooCommerce', 'Amazon Seller Central', 'Google Business Profile'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
                <div className="skill-card certifications-card">
                    <div className="skills-header"><Icon name="award" size={20} /> <h3 className="skills-title">Certifications</h3></div>
                    <div className="certifications-list">
                        <p className="certification-group">
                            <strong>Google:</strong> The Fundamentals of Digital Marketing, Google Ads, Google Analytics, AI-Powered Performance Ads, AI-Powered Shopping Ads, Conversion Optimization.
                        </p>
                        <p className="certification-group">
                            <strong>Semrush:</strong> Semrush SEO Certification, Mastering YouTube Search Trends & SEO Strategies.
                        </p>
                         <p className="certification-group">
                            <strong>YouTube:</strong> YouTube Music Certification, YouTube Music Rights Management.
                        </p>
                         <p className="certification-group">
                            <strong>Udacity:</strong> Foundation of Digital Marketing (Nanodegree).
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    </section>
);

export default Skills;
