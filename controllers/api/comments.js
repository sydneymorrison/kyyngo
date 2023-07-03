const { Goal, Milestone, Task } = require('../../models/goal');
const Profile = require('../../models/profile');
const Comment = require('../../models/comment');

module.exports = {
    createComment,
};


//CREATE - /api/goals/:id/comments - Create a new comments
async function createComment(req, res) {
    console.log('text');
    try{
        console.log('req.body create comment:', req.body.formData);

        const { id } = req.params;
        const { comment } = req.body.formData;
        
        const goal = await Goal.findById(id);


        if(!goal) {
            return res.status(404).json({ error: 'Goal not found'});
        }

        const newComment = await new Comment({
            userId: req.user._id,
            goalId: id,
            // goalId: goal._id,
            comment: comment
        });

        // await newComment.save();


        //Update the goals comment array
        // goal.comments.push(newComment._id);
        // await goal.save();

        console.log(newComment);
        res.status(200).json(newComment);

    
    } catch (error) {
        console.error('Failed to create comment:', error);
        res.status(500).json({ error: 'Failed to create comment'});
    }
}
