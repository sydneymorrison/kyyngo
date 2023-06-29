
const { Goal, Milestone, Task } = require('../../models/goal');
const Profile = require('../../models/profile');
const User = require('../../models/user');


module.exports = {
    createGoalTrackForm,
    getTrackGoalList
  };



//Get index
async function getTrackGoalList(req, res) {
    try {
        const goals = await Goal.find({userId: req.user._id});

        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve goals', errorMessage: error.message });
    }
}


//TRACK GOALS THROUGH MILESTONE SCHEMA
async function createGoalTrackForm(req, res) {
    try {

        const {
            currentDate,
            goalId,
            milestoneDescription,
            timeAllocation: {hours, minutes},
            isCompleted,
        } = req.body;

        if (!currentDate || !goalId || !milestoneDescription || !hours || !minutes || !isComplicated) {
            return res.status(400).json({ error: 'Missing required fields' });
        }


        const newMilestone = await Milestone.create ({
            userId: req.user._id,
            goals: [goalId],
            currentDate,
            milestoneDescription,
            timeAllocation: {hours, minutes},
            isCompleted,
        });

        res.status(201).json(newMilestone);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create milestone', errorMessage: error.message});
    }
}


