// client/src/components/FeedbackDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedbackDashboard.css';

const FeedbackDashboard = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [filter, setFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const response = await axios.get(`${API_URL}/feedback`);
            setFeedbacks(response.data);
        };
        fetchFeedbacks();
    }, []);

    const filteredFeedbacks = feedbacks.filter(fb => {
        const matchesText = fb.feedback.toLowerCase().includes(filter.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || fb.category === categoryFilter;
        return matchesText && matchesCategory;
    });

    return (
        <div className="dashboard-container">
            <h2>Feedback Dashboard</h2>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search feedback..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <ul className="feedback-list">
                {filteredFeedbacks.map(fb => (
                    <li key={fb._id} className="feedback-item">
                        <strong>{fb.name}</strong> ({fb.email}): {fb.feedback}
                        <em> [{fb.category}] {fb.category === 'other' && `(${fb.otherCategory})`}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackDashboard;
