// backend/routes/feedback.js
const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// POST: Submit feedback
router.post('/', async (req, res) => {
    try {
        //console.log("enter");
        const { name, email, feedback, category, otherCategory } = req.body;
        
        const newFeedback = new Feedback({ name, email, feedback, category, otherCategory });
        
        //console.log(newFeedback.otherCategory);
        
        await newFeedback.save();

        //console.log('Feedback submitted successfully');
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.log( error);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET: Retrieve all feedback (with optional filtering and sorting)
router.get('/', async (req, res) => {
    try {
        const { category, sortBy, order } = req.query; // e.g., ?category=bug&sortBy=timestamp&order=desc
        const filters = {};
        if (category) filters.category = category;
        //sortBy && order && (filters[sortBy] = order === 'desc' ? -1 : 1);
        const feedbacks = await Feedback.find(filters)
            .sort({ [sortBy || 'timestamp']: order === 'desc' ? -1 : 1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
