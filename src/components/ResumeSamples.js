import React from 'react';
import './ResumeSamples.css'; // We will create this CSS file next

// Data for our resume samples. The image paths point to the 'public' folder.
const resumeSamplesData = [
    {
        id: 1,
        title: 'Modern Chronological',
        description: 'A clean, professional design perfect for corporate roles. Highlights a clear career progression.',
        image: '/samples/resume-sample-1.png', // Path relative to the 'public' folder
    },
    {
        id: 2,
        title: 'Creative Infographic',
        description: 'Ideal for designers, marketers, and roles where creativity is key. Visually engaging and unique.',
        image: '/samples/resume-sample-2.png',
    },
    {
        id: 3,
        title: 'Executive Minimalist',
        description: 'A sophisticated, concise layout for senior-level executives. Focuses on impact and achievements.',
        image: '/samples/resume-sample-3.png',
    }
];

function ResumeSamples() {
    return (
        <section className="samples-container">
            <div className="section-title-samples">
                <h2>Our Work Speaks for Itself</h2>
                <p>Take a look at some of the high-impact resumes we've crafted for our clients.</p>
            </div>
            <div className="samples-grid">
                {resumeSamplesData.map(sample => (
                    <div className="sample-card" key={sample.id}>
                        <div className="sample-image-wrapper">
                            <img 
                                src={sample.image} 
                                alt={sample.title} 
                                className="sample-image"
                            />
                            <div className="sample-overlay">
                                <a href={sample.image} target="_blank" rel="noopener noreferrer" className="btn-view-sample">
                                    View Sample
                                </a>
                            </div>
                        </div>
                        <div className="sample-info">
                            <h3>{sample.title}</h3>
                            <p>{sample.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ResumeSamples;