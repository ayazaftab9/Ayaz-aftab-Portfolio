import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { Project } from '../types/types';

const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => project && setCurrentImageIndex((i) => (i + 1) % project.visuals.length);
    const prevImage = () => project && setCurrentImageIndex((i) => (i - 1 + project.visuals.length) % project.visuals.length);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close project details"><Icon name="x" /></button>
                <div className="modal-body">
                     <div className="modal-header">
                        <h2 className="section-title">{project.title}</h2>
                        <p className="project-client">{project.client}</p>
                    </div>

                    <div className="modal-grid">
                        <div className="modal-main-content">
                            <div className="modal-section">
                                <h3 className="modal-section-title">Challenge</h3>
                                <p>{project.challenge}</p>
                            </div>

                             <div className="modal-section">
                                <h3 className="modal-section-title">My Role</h3>
                                <p>{project.role}</p>
                            </div>

                             <div className="modal-section">
                                <h3 className="modal-section-title">Strategy</h3>
                                <p>{project.strategy}</p>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Execution</h3>
                                <p>{project.execution}</p>
                            </div>
                             {project.testimonial && (
                                 <div className="modal-section">
                                    <h3 className="modal-section-title">Testimonial</h3>
                                    <blockquote className="testimonial-quote">"{project.testimonial}"</blockquote>
                                </div>
                            )}
                        </div>
                        <div className="modal-sidebar">
                             <div className="modal-section">
                                <h3 className="modal-section-title">Key Results</h3>
                                <ul className="modal-results-list">
                                    {project.results.map((result: string, index: number) => (
                                        <li key={index} className="modal-result-item">
                                            <Icon name="check-circle" size={16} />
                                            <span>{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                              {project.liveLink && project.liveLink !== '#' && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live Project</a>
                            )}
                        </div>
                    </div>

                    {project.visuals && project.visuals.length > 0 && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Visuals</h3>
                            <div className="carousel">
                                <img
                                    src={project.visuals[currentImageIndex]}
                                    alt={`Visual for ${project.title} - ${currentImageIndex + 1}`}
                                    className="carousel-image"
                                    loading="lazy"
                                    width="800"
                                    height="450"
                                />
                                {project.visuals.length > 1 && (
                                    <>
                                        <button onClick={prevImage} className="carousel-btn prev" aria-label="Previous image"><Icon name="chevron-left" /></button>
                                        <button onClick={nextImage} className="carousel-btn next" aria-label="Next image"><Icon name="chevron-right" /></button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
