
const { Goal, Milestone, Task } = require('../../models/goal');
// const Profile = require('../../models/profile');
// const User = require('../../models/user');


module.exports = {
    createGoalTrackForm,
    getTrackGoalList,
  };



//Get index
async function getTrackGoalList(req, res) {
    try {
        const goals = await Milestone.find().populate('goalId').exec();
        res.status(200).json(goals);

        console.log('milestone_goals:', goals);
    } catch (error) {
        res.status(500).json({
            error: 'Failed to retrieve goals for track form'});
    }
}


//TRACK GOALS THROUGH MILESTONE SCHEMA
async function createGoalTrackForm(req, res) {
    try {
            const {
              currentDate,
              milestoneDescription,
              timeAllocation,
              isCompleted,
              progress
            } = req.body;

        
            //Retrieve all of the goals from the database
            const goals = await Goal.find();

            //Get the Goal Ids
            const goalIds = goals.map((goal) => goal._id);

        console.log('goalIds:', goalIds);
        const newMilestone = await Milestone.create ({
            userId: req.user._id,
            goalId: goalIds,
            currentDate,
            milestoneDescription,
            timeAllocation,
            isCompleted,
            progress: 0,
        });

        console.log('newMilestone', newMilestone);
        res.status(201).json(newMilestone);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create milestone', errorMessage: error.message});
    }
}


