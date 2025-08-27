import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import OffCanvasMenu from './components/OffCanvasMenu';
import Hero from './components/Hero';
import ProvenImpact from './components/ProvenImpact';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types/types';
import './assets/index.css';

declare module 'react' {
    interface HTMLAttributes<T> {
        width?: string | number;
        height?: string | number;
    }
}

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        // @ts-ignore
        if (window.feather) {
            // @ts-ignore
            feather.replace();
        }
    });

    useEffect(() => {
        if (isMenuOpen || selectedProject) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => document.body.classList.remove('no-scroll');

    }, [isMenuOpen, selectedProject]);

    const handleProjectClick = (project: Project | undefined) => {
        if (project) {
            setSelectedProject(project)
        }
    };
    const handleCloseModal = () => setSelectedProject(null);

    return (
        <>
            <Header onMenuClick={() => setIsMenuOpen(true)} />
            <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <main>
                <Hero />
                <ProvenImpact />
                <Services />
                <FeaturedProjects onProjectClick={handleProjectClick} />
                <Testimonials onProjectClick={handleProjectClick} />
                <Education />
                <Skills />
            </main>
            <Footer />
            {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
