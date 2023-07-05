
const { Goal } = require('../../models/goal');
const Profile = require('../../models/profile');
const User = require('../../models/user');
const { Milestone } = require('../../models/goal');


module.exports = {
    createGoalTrackForm,
    getTrackGoalList,
  };



//Get index
async function getTrackGoalList(req, res) {
  try {
    const goals = await Goal.find();
    const goalIds = goals.map((goal) => goal._id);
    const milestones = await Milestone.find({ goalId: { $in: goalIds } }).populate('goalId').exec();
    res.status(200).json(milestones);
    console.log('milestones:', milestones);
  } catch (error) {
    console.error('Failed to retrieve goals for track form', error);
    res.status(500).json({
      error: 'Failed to retrieve goals for track form',
    });
  }
}
  


  async function createGoalTrackForm(req, res) {
    try {
        const {
          goalId,
          currentDate,
          milestoneDescription,
          timeAllocation,
          isCompleted,
          progress
        } = req.body;

        const newMilestone = await Milestone.create ({
            userId: req.user._id,
            goalId,
            currentDate,
            milestoneDescription,
            timeAllocation,
            isCompleted,
            progress: 0,
        });

        const goal = await Goal.findById(goalId);
        goal.milestones.push(newMilestone);
        await goal.save();

        console.log('newMilestone', newMilestone);
        res.status(201).json(newMilestone);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create milestone', errorMessage: error.message});
    }
}



