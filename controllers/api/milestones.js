
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

        console.log('milestone_goals', goals);
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


        const newMilestone = await Milestone.create ({
            userId: req.user._id,
            goalId: ['649c78f730ee66e1f2d75b32', '649cc95d9909ed40b6fca872'],
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


