import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import Logo from '../assets/Logo';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatusMessage('Please fill out all fields.');
            setTimeout(() => setStatusMessage(''), 3000);
            return;
        }

        const subject = `New Message from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:ayazaftab9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setStatusMessage('Your message is ready to send!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatusMessage(''), 4000);
    };

    return (
        <footer id="contact" className="footer">
             <AnimatedSection className="container">
                <div className="footer-content">
                    <h2 className="footer-title">Let's build together.</h2>
                    <p className="footer-subtitle">Have a project in mind or a role to discuss? Let's connect.</p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                             <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    placeholder="e.g., John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="e.g., john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                             <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required>
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary form-submit-btn">Send Message</button>
                        {statusMessage && <p className="form-status-message">{statusMessage}</p>}
                    </form>

                    <div className="hero-socials footer-socials">
                        <a href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                        <a href="#" className="social-link" aria-label="Twitter"><Icon name="twitter" /></a>
                        <a href="#" className="social-link" aria-label="Github"><Icon name="github" /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                     <a href="#" className="logo-container" aria-label="Back to top">
                        <Logo />
                    </a>
                    <p className="copyright">&copy; {new Date().getFullYear()} Ayaz Aftab</p>
                </div>
             </AnimatedSection>
        </footer>
    );
};

export default Footer;
