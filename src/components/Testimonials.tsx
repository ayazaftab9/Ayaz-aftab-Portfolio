import React from 'react';
import AnimatedSection from './AnimatedSection';
import { testimonialsData, projectsData } from '../data/data';
import { Project } from '../types/types';

const Testimonials = ({ onProjectClick }: { onProjectClick: (project: Project | undefined) => void }) => (
    <section>
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">What My Clients Say</h2>
            </div>
            <div className="testimonials-list">
                {testimonialsData.map(testimonial => (
                    <div className="testimonial-card" key={testimonial.projectId}>
                        <div className="testimonial-header">
                            <img src={testimonial.logoUrl} alt={`${testimonial.author} Logo`} className="testimonial-logo" />
                            <div className="stars">
                                ★★★★★
                            </div>
                        </div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-footer">
                            <div>
                                <p className="testimonial-author-name">{testimonial.author}</p>
                                <p className="testimonial-author-title">{testimonial.title}</p>
                            </div>
                            <a href="#" onClick={(e) => { e.preventDefault(); onProjectClick(projectsData.find(p => p.id === testimonial.projectId));}} className="view-project-link">
                                View Project &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

export default Testimonials;
