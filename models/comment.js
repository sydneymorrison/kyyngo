const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        required: true
    },

    content: {
        type: String,
        required:true
    },

    createdAt: {
        type:Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;