// client/src/components/FeedbackForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        category: 'suggestion',
        otherCategory: ''
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/feedback`, formData);
          //  alert('Feedback submitted successfully!');
           // setFormData({ name: '', email: '', feedback: '', category: 'suggestion', otherCategory: '' });
            setMessageType('success');
            setMessage('Feedback submitted successfully!');
            setTimeout(() => {
                navigate('/dashboard'); // Redirect to dashboard after 2 seconds
            }, 2000);
        } catch (error) {
          //  alert('Error submitting feedback!');
            setMessageType('error'); // Set error type
            setMessage('Error submitting feedback. Please try again.');
        }
    };

    return (
        <div className="feedback-form-container">
            <h2>Submit Your Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="feedback"
                    placeholder="Your feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                />
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="suggestion">Suggestion</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="other">Other</option>
                </select>
                {formData.category === 'other' && (
                    <input
                        type="text"
                        name="otherCategory"
                        placeholder="Specify Other Category"
                        value={formData.otherCategory}
                        onChange={handleChange}
                        required
                    />
                )}
                <button type="submit" className="submit-btn">Submit Feedback</button>
            </form>
            {message && <p className={`message ${messageType}`}>{message}</p>}
        </div>
    );
};

export default FeedbackForm;
