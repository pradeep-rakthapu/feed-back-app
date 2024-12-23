// backend/models/Feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    feedback: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    category: { type: String, enum: ['bug', 'suggestion', 'feature-request', 'other'], default: 'suggestion' },
    otherCategory:{type:String,required:false}
});

module.exports = mongoose.model('Feedback', feedbackSchema);
