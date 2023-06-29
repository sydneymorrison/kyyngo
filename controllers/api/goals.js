const { Goal, Milestone, Task } = require('../../models/goal');
const Profile = require('../../models/profile');

module.exports = {
    index,
    createGoal,
}


//GOALS

//Index Functionality 

async function index(req, res) {
    try {
        const goals = await Goal.find().exec();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve goal'});
    }

}

//Create Functionality

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


