import React, { useState } from 'react';
import './CertificationsPage.css'; // We will create this CSS file next

// Sample data for certifications
const certificationsData = [
    {
        id: 'clp',
        title: 'Certified Leadership Professional (CLP)',
        description: 'Master the core competencies of modern leadership, from team motivation to strategic decision-making.',
        forWho: 'Ideal for new managers and aspiring team leaders.'
    },
    {
        id: 'aps',
        title: 'Advanced Productivity Specialist (APS)',
        description: 'Learn evidence-based systems to manage your time, energy, and attention for peak performance.',
        forWho: 'Perfect for professionals feeling overwhelmed and unproductive.'
    },
    {
        id: 'cap',
        title: 'Certified Agile Practitioner (CAP)',
        description: 'Embrace an agile mindset to lead projects and teams with flexibility and a focus on delivering value.',
        forWho: 'Suited for project managers and team members in fast-paced environments.'
    },
    {
        id: 'pps',
        title: 'Professional Public Speaker (PPS)',
        description: 'Develop the skills to command a room, structure compelling arguments, and deliver presentations with impact.',
        forWho: 'Essential for anyone who needs to communicate ideas effectively.'
    }
];

function CertificationsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        certification: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Certification Enquiry:", formData);
        alert(`Thank you, ${formData.name}! We've received your enquiry for the ${formData.certification} certification.`);
        setFormData({ name: '', email: '', phone: '', certification: '', message: '' }); // Reset form
    };

    return (
        <div className="cert-page-container">
            {/* Section 1: Hero */}
            <header className="cert-hero">
                <div className="hero-content">
                    <h1>Advance Your Career with Recognized Certifications</h1>
                    <p className="subtitle">Validate your skills and stand out in your industry with our expert-led certification programs.</p>
                </div>
            </header>

            {/* Section 2: Certifications List */}
            <section className="cert-list-section">
                <div className="cert-grid">
                    {certificationsData.map(cert => (
                        <div className="cert-card" key={cert.id}>
                            <h3>{cert.title}</h3>
                            <p className="cert-description">{cert.description}</p>
                            <p className="cert-for-who">{cert.forWho}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Section 3: Enquiry Form */}
            <section className="cert-enquiry-section">
                <div className="enquiry-form-wrapper">
                    <div className="section-title-enquiry">
                        <h2>Enquire About a Certification</h2>
                        <p>Have questions or need more details? Fill out the form below and our team will get back to you shortly.</p>
                    </div>
                    <form onSubmit={handleFormSubmit} className="enquiry-form-cert">
                        <div className="form-row">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <select name="certification" value={formData.certification} onChange={handleInputChange} required>
                                <option value="" disabled>Select a Certification*</option>
                                {certificationsData.map(cert => (
                                    <option key={cert.id} value={cert.title}>{cert.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="btn-submit-cert">Submit Enquiry</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default CertificationsPage;