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

    comment: {
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
}, {
    timestamps: true,
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
);

commentSchema.virtual('user', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

commentSchema.virtual('goal', {
    ref: 'Goal',
    localField: 'goalId',
    foreignField: '_id',
    justOne: true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;