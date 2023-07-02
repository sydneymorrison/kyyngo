const { Goal, Milestone, Task } = require('../../models/goal');
const Profile = require('../../models/profile');
const Comment = require('../../models/comment');

module.exports = {
    createComment,
};


//CREATE - /api/goals/:id/comments - Create a new comments
async function createComment(req, res) {
    try{
        console.log('req.body create comment:', req.body);
        const { userId, comment } = req.body;
        // const { id: goalId } = req.params;
        const {  id: goalId } = req.params;

        //Then create a new comment
        const newComment = await Comment.create({
            userId: userId,
            // userId: req.user._id,
            goalId: goalId,
            comment: comment
        });

        //Save the comment to the database
        // const savedComment = await newComment.save();

        res.status(200).json(newComment);
    
    } catch (error) {
        console.error('Failed to create comment:', error);
        res.status(500).json({ error: 'Failed to create comment'});
    }
}
