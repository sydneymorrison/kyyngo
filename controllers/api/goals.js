const Goal = require('../../models/goal');

module.exports = {
    createGoal,
  };



//Create Functionality

async function createGoal(req, res) {
    try {

        // Field from GoalPostForm are extracted from request.body in HTML request
        const { title, description, icon, startDate, endDate, category, link  } = req.body;

        // create a new note in the database
        const newGoal = await Goal.createGoal({ 
            user: req.user._id,
            title: title,
            description: description,
            icon: icon,
            startDate: startDate,
            endDate: endDate,
            category: category,
            link: link,
            progress: 0,
        });

        res.status(201).json(newGoal);

    } catch (error) {
        res.status(500).json({error: 'Failed to create goal'});
    }
}

