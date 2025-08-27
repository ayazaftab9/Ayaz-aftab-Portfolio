import React from 'react';
import AnimatedSection from './AnimatedSection';

const ProvenImpact = () => (
    <section>
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Proven Impact</h2>
                <p className="section-subtitle">Career highlights at a glance.</p>
            </div>
            <div className="impact-grid">
                <div className="info-card">
                    <p className="impact-metric">15,000+</p>
                    <p className="impact-label">Leads Generated</p>
                </div>
                <div className="info-card">
                    <p className="impact-metric">₹7.95 L+</p>
                    <p className="impact-label">Amazon Sales</p>
                </div>
                <div className="info-card">
                    <p className="impact-metric">+30%</p>
                    <p className="impact-label">Organic Traffic Growth</p>
                </div>
                <div className="info-card">
                    <p className="impact-metric">1,465+</p>
                    <p className="impact-label">Local Customer Interactions</p>
                </div>
            </div>
        </AnimatedSection>
    </section>
);

export default ProvenImpact;
