import React from 'react';
import AnimatedSection from './AnimatedSection';
import Icon from './Icon';
import { servicesData } from '../data/data';

const Services = () => (
    <section id="services">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Digital Growth Services</h2>
                <p className="section-subtitle">
                    I partner with businesses to drive measurable growth by developing and executing targeted marketing campaigns across a variety of digital marketing channels. Whether you need a dedicated team member for a full-time role or project-specific expertise, here are the ways we can work together.
                </p>
            </div>
            <div className="engagement-header">
                <h2 className="section-title">Engagement Models</h2>
            </div>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-description">{service.description}</p>
                        <ul className="service-list">
                            {service.items.map((item, i) => (
                                <li key={i} className="service-list-item">
                                    <Icon name="check" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={service.href}
                            className="btn btn-secondary service-card-btn"
                            {...(service.download && { download: true, target: '_blank', rel: 'noopener noreferrer' })}
                        >
                            <span>{service.cta}</span>
                            <Icon name={service.icon} size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

export default Services;
