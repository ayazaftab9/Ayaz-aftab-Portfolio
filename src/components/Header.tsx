import React from 'react';
import Logo from '../assets/Logo';
import Icon from './Icon';

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
    <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="#" className="logo-container">
                    <Logo />
                    <span className="logo-text">Ayaz Aftab</span>
                </a>
                <button onClick={onMenuClick} className="menu-icon" aria-label="Open menu">
                    <Icon name="menu" />
                </button>
            </nav>
        </div>
    </header>
);

export default Header;
