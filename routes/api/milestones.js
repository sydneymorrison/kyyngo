const express = require('express');
const router = express.Router();
const milestonesCtrl = require('../../controllers/api/milestones');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//TRACK GOALS BY CREATING MILESTONE


// GET /api/track
router.get('/new', milestonesCtrl.getTrackGoalList);

//POST /api/goals/track (create a new milestone goal)
router.post('/new', milestonesCtrl.createGoalTrackForm);


module.exports = router;