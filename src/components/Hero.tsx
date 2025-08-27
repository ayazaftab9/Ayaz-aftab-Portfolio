import React, { useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero = () => {
    const specializations = useRef(['SEO', 'PPC', 'eCommerce Growth', 'Performance Marketing', 'Social Media Marketing', 'Content Strategy', 'CRO', 'SEM']).current;
    const displayText = useTypingEffect({ specializations });

    return (
        <section className="hero">
            <AnimatedSection className="container">
                <h1 className="hero-headline">
                    Hi, I'm <span className="gradient-text">Ayaz Aftab</span>.
                    <br />
                    <span className="hero-dynamic-subheading">I specialise in <span className="typing-text">{displayText}</span><span className="cursor"></span></span>
                </h1>
                <p className="hero-summary">
                    Results-driven specialist with 5+ years of experience in SEO, PPC, and full-funnel eCommerce management. I help businesses drive revenue growth through data-driven strategies that generate leads, boost sales, and increase organic traffic.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
                <div className="hero-socials">
                    <a href="mailto:ayazaftab9@gmail.com" className="social-link" aria-label="Email"><Icon name="mail" /></a>
                    <a href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                    <a href="#" className="social-link" aria-label="Twitter"><Icon name="twitter" /></a>
                    <a href="#" className="social-link" aria-label="Github"><Icon name="github" /></a>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default Hero;
