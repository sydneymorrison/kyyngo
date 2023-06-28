const { Profile } = require('../../models/profile');



//Create Functionality

async function create(req, res) {
    try {

        // Field from GoalPostForm are extracted from request.body in HTML request
        const { firstName, lastName, username, profilePicture, bio } = req.body;

        // create a new note in the database
        const newGoal = await Profile.create({ 
            userId: req.user._id,
            goalId: req.user._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            



            title: req.body.title,
            description: req.body.description,
            icon: req.body.icon,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            category: req.body.category,
            link: req.body.link
        });
        console.log(newGoal);

        res.status(201).json(newGoal);

    } catch (error) {
        res.status(500).json({ error: 'Failed to create goal', errorMessage: error.message });
    }
}