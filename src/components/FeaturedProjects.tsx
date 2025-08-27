import React from 'react';
import AnimatedSection from './AnimatedSection';
import { projectsData } from '../data/data';
import { Project } from '../types/types';

const FeaturedProjects = ({ onProjectClick }: { onProjectClick: (project: Project) => void }) => (
    <section id="projects">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                 <p className="section-subtitle">A selection of my recent work.</p>
            </div>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div className="project-card" key={project.id} onClick={() => onProjectClick(project)}>
                        <div className="project-image-container">
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} for ${project.client}`}
                                className="project-image"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                        <div className="project-content">
                            <p className="project-client">{project.client}</p>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-result">{project.keyResult}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

export default FeaturedProjects;
