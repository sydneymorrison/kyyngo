const { Goal, Milestone, Task } = require('../../models/goal');
const Profile = require('../../models/profile');
const Comment = require('../../models/comment');

module.exports = {
    createComment,
    getCommentsById
};


//CREATE - /api/goals/:id/comments - Create a new comments
async function createComment(req, res) {
    console.log('text');
    try{
        console.log('req.body create comment:', req.body.formData);

        const { id } = req.params;
        // const { comment } = req.body;

        //MADE THIS UPDATE
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

         await newComment.save();


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


//GET - /api/comments/:id/comments - Get comments
async function getCommentsById( req, res) {
    try {
        const { id } = req.params;

        //Function for fetching the comments for the specified ID
        const goal = await Goal.findById(id);

        if (!goal) {
            return res.status(404).json({ error: 'Goal not found'});
        }

        //Find all the comments with the specific ID
        const comments = await Comment.find({ goalId: id });

        //Then return the comments in the response
        res.status(200).json(comments);
    } catch (error) {
        console.log('Failed to retrieve comments', error);
        res.status(500).json({ error: 'Failed to retrieve comments'});
    }
}