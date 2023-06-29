const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//All paths start with /api/goals


//GOALS

// GET /api/goals
router.get('/', goalsCtrl.index);

//POST /api/goals/new (create a new goal)
router.post('/new', goalsCtrl.createGoal);


//TRACK GOALS BY CREATING MILESTONE

//POST /api/goals/track (create a new milestone goal)
router.post('/track', goalsCtrl.createMilestone);


module.exports = router;