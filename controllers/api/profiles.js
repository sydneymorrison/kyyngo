const Profile = require('../../models/profile');


module.exports = {
    create,
  };



//Create Functionality

async function create(req, res) {
    try {

        // Field from GoalPostForm are extracted from request.body in HTML request
        const { firstName, lastName, username, profilePicture, bio } = req.body;

        // create a new note in the database
        const newProfile = await Profile.create({ 
            userId: req.user._id,
            goalId: req.user._id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            profilePicture: req.body.profilePicture,
            bio: req.body.bio,
        });
        console.log(newProfile);

        res.status(201).json(newProfile);

    } catch (error) {
        res.status(500).json({ error: 'Failed to create goal', errorMessage: error.message });
    }
}