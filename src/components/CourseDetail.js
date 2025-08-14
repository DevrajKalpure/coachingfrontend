import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById, submitEnquiry } from '../services/api';

const formatCurrency = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
};

function CourseDetail() {
    const [course, setCourse] = useState(null);
    const [enquiry, setEnquiry] = useState({ name: '', email: '', phoneNumber: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getCourseById(id).then(response => setCourse(response.data)).catch(console.error);
    }, [id]);

    const handleChange = (e) => {
        setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitEnquiry({ ...enquiry, courseId: id, courseTitle: course.title });
            setSubmitted(true);
            setEnquiry({ name: '', email: '', phoneNumber: '', message: '' });
        } catch (error) {
            console.error("Error submitting enquiry:", error);
        }
    };

    const handlePayment = () => {
        alert("Payment gateway integration needed! This is a placeholder.");
    };

    if (!course) return <div>Loading course details...</div>;

    return (
        <div className="course-detail-container">
             <div className="course-info">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <h3><strong>Start Date:</strong> {course.startDate || 'To Be Announced'}</h3>
                <h3><strong>Duration:</strong> {course.duration || 'Not specified'}</h3>
                {/* Add Timings */}
                <h3><strong>Timings:</strong> {course.timings || 'Not specified'}</h3>
                <h2><strong>Fee:</strong> {formatCurrency(course.price)}</h2>
                <button className="btn-enroll" onClick={handlePayment}>Enroll and Pay Now</button>
            </div>
            <div className="enquiry-form">
                <h3>Make an Enquiry</h3>
                {submitted ? (
                    <p>Thank you! We have received your enquiry and will contact you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group"><input type="text" name="name" value={enquiry.name} onChange={handleChange} placeholder="Your Name" required /></div>
                        <div className="form-group"><input type="email" name="email" value={enquiry.email} onChange={handleChange} placeholder="Your Email" required /></div>
                        <div className="form-group"><input type="tel" name="phoneNumber" value={enquiry.phoneNumber} onChange={handleChange} placeholder="Phone Number (Optional)" /></div>
                        <div className="form-group"><textarea name="message" value={enquiry.message} onChange={handleChange} placeholder="Your Question" required /></div>
                        <button type="submit" className="btn-submit">Submit Enquiry</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default CourseDetail;