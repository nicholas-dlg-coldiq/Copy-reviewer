const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');

// POST /api/review-copy
router.post('/review-copy', async (req, res) => {
    try {
        const { subjectLine, copy } = req.body;

        // Validate subject line
        if (!subjectLine || typeof subjectLine !== 'string' || subjectLine.trim().length === 0) {
            return res.status(400).json({
                error: 'Invalid request',
                message: 'Subject line is required and must be a non-empty string'
            });
        }

        // Validate email body
        if (!copy || typeof copy !== 'string' || copy.trim().length === 0) {
            return res.status(400).json({
                error: 'Invalid request',
                message: 'Email body is required and must be a non-empty string'
            });
        }

        // Get review from AI service
        const review = await aiService.reviewCopy(subjectLine, copy);

        res.json(review);
    } catch (error) {
        console.error('Error in review-copy endpoint:', error);
        res.status(500).json({
            error: 'Review failed',
            message: error.message || 'Failed to review the copy. Please try again.'
        });
    }
});

module.exports = router;
