const { Goal, Milestone, Task } = require('../../models/goal');

module.exports = {
    create,
  };



//Create Functionality

async function create(req, res) {
    try {

        // Field from GoalPostForm are extracted from request.body in HTML request
        const { title, description, icon, startDate, endDate, category, link } = req.body;

        // create a new note in the database
        const newGoal = await Goal.create({ 
            userId: req.user._id,
            title: 'My Goal',
            description: 'This is my goal',
            startDate: new Date(),
            endDate: new Date('2023-12-31'),
            category: 'Personal', 
            link: 'link'
        
        });
        console.log(newGoal);

        res.status(201).json(newGoal);

    } catch (error) {
        res.status(500).json({ error: 'Failed to create goal', errorMessage: error.message });
    }
}

