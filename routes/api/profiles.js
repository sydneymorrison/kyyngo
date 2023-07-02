const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// GET /api/profiles
router.get('/profile', ensureLoggedIn, profilesCtrl.index);

//GET - /api/profiles/profile/:profileId - Get Profile by ProfileId
router.get('/profile/:profileId', ensureLoggedIn, profilesCtrl.getProfileByProfileId);


//GET - /api/profiles/profile/:userId - Get Profile by userId
router.get('/profile/:userId', ensureLoggedIn, profilesCtrl.getProfileByUserId);

//POST /api/profiles/new (create a new profile)
router.post('/new', ensureLoggedIn, profilesCtrl.create);



//DELETE /api/profiles/:profileId/goals/:goalId (delete item on a profile)
router.delete('/:profileId/goals/:goalId', ensureLoggedIn, profilesCtrl.deleteGoal)


//GET /api/profiles/existing-profile/:userId (fetch and existing profile)
router.post('/existing-profile', ensureLoggedIn, profilesCtrl.fetchExistingProfile);

module.exports = router;
