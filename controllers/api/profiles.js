const Profile = require('../../models/profile');


module.exports = {
    index,
    create,
  };


//Index Functionality 

async function index(req, res) {
    try {
        const profiles = await Profile.find().populate('goals').exec();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({error: 'Failed to retrieve profile'});
    }

}


//Create Functionality

async function create(req, res) {
    try {

        // Field from GoalPostForm are extracted from request.body in HTML request
        const { firstName, lastName, username, profilePicture, bio } = req.body;

        // create a new note in the database
        const newProfile = await Profile.create({ 
            userId: req.user._id,
            goalId: req.body.goalId,
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