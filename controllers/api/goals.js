const { Goal, Milestone, Task } = require('../../models/goal');
const Profile = require('../../models/profile');

module.exports = {
    index,
    createGoal,
    updateGoal,
    deleteGoal,
    getGoalById,
    editGoal
}


//GOALS

//INDEX - GET -  /api/goals/

async function index(req, res) {
    try {
        const goals = await Goal.find().exec();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve goal'});
    }
}

//CREATE - POST - /api/goals/new
async function createGoal(req, res) {
    try {
        // Field from GoalPostForm are extracted from request.body in HTML request
        const { title, description, icon, startDate, endDate, category, link } = req.body;
        // create a new note in the database
        const newGoal = await Goal.create({ 
            userId: req.user._id,
            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            category: req.body.category,
            link: req.body.link
        });
        console.log(newGoal);

        const profile = await Profile.findOneAndUpdate(
            {userId: req.user._id},
            {$push: {goals: newGoal._id},},
            { new: true}
        );
        res.status(201).json(newGoal);

    } catch (error) {
        res.status(500).json({ error: 'Failed to create goal', errorMessage: error.message });
    }
}

//SHOW - GET -  /api/goals/:id

async function getGoalById(req, res) {
    try {
        const goalId = req.params.id
        const goal = await Goal.findById(goalId)

        if (!goal) {
            return res.status(404).json({error: 'Goal not found'});
        }
      res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve goal', errorMessage: error.message});
    }
}



//UPDATE - PUT - /api/goals/:id

async function updateGoal(req, res) {

    const goalId = req.params.id;

    try {
        //Find the current goal by ID
        const currentGoal = await Goal.findById(goalId);

        if(!currentGoal) {
            return res.status(404).json({error: 'Goal not found'});
        
        }

        const { title, description, icon, startDate, endDate, category, link} = req.body;

        //Update the fields based on the request body
        currentGoal.title = title;
        currentGoal.description = description;
        currentGoal.icon = icon;
        currentGoal.startDate = startDate;
        currentGoal.endDate = endDate;
        currentGoal.category = category;
        currentGoal.link = link;

        //Save the updatedGoal
        const updatedGoal = await currentGoal.save();

        res.status(200).json(updatedGoal);
      
    } catch (error) {
      res.status(500).json({ error: 'Failed to update goal', errorMessage: error.message});
    }
}



//EDIT - GET - /goals/:id/edit  (Return View (form) to edit post)

async function editGoal(req,res) {
    const goalId = req.params.id;

    try {
        //Find the current goal by ID
        const currentGoal = await Goal.findById(goalId);

        if(!currentGoal) {
            return res.status(404).json({error: 'Goal not found'});
        
        }

        const { title, description, icon, startDate, endDate, category, link} = req.body;

        //Update the fields based on the request body
        currentGoal.title = req.body.title;
        currentGoal.description = req.body.description;
        currentGoal.icon = req.body.icon;
        currentGoal.startDate = req.body.startDate;
        currentGoal.endDate = req.body.endDate;
        currentGoal.category = req.body.category;
        currentGoal.link = req.body.link;

        //Save the updatedGoal
        const updateGoal = await currentGoal.save();

        res.status(200).json(updateGoal);
      
    } catch (error) {
      res.status(500).json({ error: 'Failed to update goal', errorMessage: error.message});
    }
}


//DELETE - DELETE - /api/goals/:id

async function deleteGoal(req, res) {

    const goalId = req.params.id;
   
    try {
        //Find the goal by the ID and delete it
        const deletedGoal = await Goal.findByIdAndDelete(goalId);

        if (!deletedGoal) {
            return res.status(404).json({ error: 'Goal not found'})
        }

        res.status(200).json({ message: 'Goal deleted successfully'});
      
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete goal', errorMessage: error.message});
    }
}

