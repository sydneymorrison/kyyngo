const Profile = require('../../models/profile');


module.exports = {
    index,
    create,
    deleteGoal,
    getProfileByUserId
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


// Index/Get - Retrieve profile by userId
async function getProfileByUserId(req, res) {
    const { userId } = req.params;

    try {
        const profile = await Profile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({error: 'Profile not found'});
        }
        res.json(profile);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to retrieve profile'});
        }
};


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


//Delete Item on profile page
async function deleteGoal(req, res) {
    try {
        const {profileId, goalId } = req.params;

        //Find the profile by the ID
        const profile = await Profile.findById(profileId);

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found'});
        }

        //Then find the index of the goal within the profiles goal array
        const goalIndex = profile.goals.findIndex((goal) => goal.id.toString() === goalId);

        if (goalIndex === -1) {
            return res.status(404).json({ error: 'Goal not found'});
        }

        //Remove the goal from the profiles goals array
        profile.goals.splice(goalIndex, 1);

        //The save the update profile 
        await profile.save();

        return res.status(200).json({ message: 'Goal deleted successfully'});
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete goal', errorMessage: error.message});

    }
}
