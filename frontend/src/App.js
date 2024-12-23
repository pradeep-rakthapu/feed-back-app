import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Feedback Form</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<FeedbackForm />} />
                    <Route path="/dashboard" element={<FeedbackDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
