import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './CoursesPage.css';

// Sample data for your courses. You would typically fetch this from an API.
const coursesData = [
    {
        id: 1,
        category: 'Leadership',
        title: 'The Authentic Leader',
        description: 'Discover your unique leadership style and learn to inspire, influence, and empower your team with confidence.',
        duration: '6 Weeks',
        level: 'Intermediate',
        format: 'Live Cohort',
        price: '24999'
    },
    {
        id: 2,
        category: 'Productivity',
        title: 'Peak Performance System',
        description: 'Stop being busy and start being effective. Master time management, goal setting, and habit formation.',
        duration: '4 Weeks',
        level: 'All Levels',
        format: 'Self-Paced Video',
        price: '9999'
    },
    {
        id: 3,
        category: 'Communication',
        title: 'Powerful Public Speaking',
        description: 'Conquer your fear of public speaking and learn to deliver compelling presentations that captivate any audience.',
        duration: '8 Weeks',
        level: 'Beginner',
        format: 'Live Cohort',
        price: '19999'
    },
    {
        id: 4,
        category: 'Mindset',
        title: 'Resilient Mindset Mastery',
        description: 'Develop the mental toughness to navigate challenges, overcome setbacks, and thrive under pressure.',
        duration: '5 Weeks',
        level: 'All Levels',
        format: 'Self-Paced Video',
        price: '12999'
    }
];

function CoursesPage() {
    return (
        <div className="courses-page-container">
            {/* Section 1: Hero */}
            <header className="courses-hero">
                <div className="hero-content">
                    <h1>Invest in Your Growth</h1>
                    <p className="subtitle">Browse our expert-led courses and take the next step in your personal and professional development journey.</p>
                </div>
            </header>

            {/* Section 2: Course Grid */}
            <section className="courses-section">
                <div className="courses-grid">
                    {coursesData.map(course => (
                        <div className="course-card" key={course.id}>
                            <div className="card-header">
                                <span className="course-category">{course.category}</span>
                                <h3>{course.title}</h3>
                            </div>
                            <div className="card-content">
                                <p>{course.description}</p>
                            </div>
                            <div className="course-meta">
                                <span><strong>Duration:</strong> {course.duration}</span>
                                <span><strong>Level:</strong> {course.level}</span>
                                <span><strong>Format:</strong> {course.format}</span>
                            </div>
                            <div className="card-footer">
                                <span className="course-price">₹{course.price}</span>
                                {/* This Link will go to a route like /course/1 */}
                                <Link to={`/course/${course.id}`} className="btn-details">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Section 3: Value Proposition */}
            <section className="value-prop-section">
                <div className="section-title">
                    <h2>Why Learn With ProCoach?</h2>
                </div>
                <div className="value-prop-grid">
                    <div className="value-prop-item">
                        <div className="icon-wrapper">✓</div>
                        <h3>Expert Instructors</h3>
                        <p>Learn from certified coaches and industry veterans with real-world experience.</p>
                    </div>
                    <div className="value-prop-item">
                        <div className="icon-wrapper">✓</div>
                        <h3>Practical Frameworks</h3>
                        <p>We focus on actionable strategies and tools you can apply immediately.</p>
                    </div>
                    <div className="value-prop-item">
                        <div className="icon-wrapper">✓</div>
                        <h3>Community Support</h3>
                        <p>Join a vibrant community of like-minded peers for networking and support.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Final CTA */}
            <section className="courses-cta">
                <h2>Looking for Corporate Training?</h2>
                <p>We offer customized training programs and workshops for teams and organizations. Let's discuss your needs.</p>
                <Link to="/contact" className="cta-button">Contact Us</Link>
            </section>
        </div>
    );
}

export default CoursesPage;