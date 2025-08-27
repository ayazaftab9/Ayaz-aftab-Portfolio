import React from 'react';
import Logo from '../assets/Logo';
import Icon from './Icon';

const OffCanvasMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    // This outer div handles the overlay click to close
    return (
        <div className={`off-canvas-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            {/* This inner div is the menu itself, stopping click propagation */}
            <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="off-canvas-header">
                     <a href="#" className="logo-container" onClick={onClose}>
                        <Logo />
                        <span className="logo-text">Ayaz Aftab</span>
                    </a>
                    <button onClick={onClose} className="close-menu-btn" aria-label="Close menu">
                        <Icon name="x" />
                    </button>
                </div>
                <nav className="menu-links">
                    <a href="#services" onClick={onClose} className="menu-link"><Icon name="settings" size={20}/> Services</a>
                    <a href="#projects" onClick={onClose} className="menu-link"><Icon name="briefcase" size={20}/> Projects</a>
                    <a href="#skills" onClick={onClose} className="menu-link"><Icon name="bar-chart-2" size={20}/> Skills</a>
                    <a href="#contact" onClick={onClose} className="menu-link"><Icon name="mail" size={20}/> Contact</a>
                </nav>
                 <a href="resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-primary menu-resume-btn">Download Resume</a>

                <div className="off-canvas-footer">
                    <a href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                    <a href="#" className="social-link" aria-label="Twitter"><Icon name="twitter" /></a>
                    <a href="#" className="social-link" aria-label="Github"><Icon name="github" /></a>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasMenu;
