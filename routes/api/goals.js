const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//All paths start with /api/goals


//GOALS

// GET /api/goals
router.get('/', ensureLoggedIn, goalsCtrl.index);

//POST /api/goals/new (create a new goal)
router.post('/new', ensureLoggedIn, goalsCtrl.createGoal);


//INDEX - SHOW / api/goals/:id
router.get('/:id', ensureLoggedIn, goalsCtrl.getGoalById);


//PUT /api/goals/:id
router.put('/:id', ensureLoggedIn, goalsCtrl.updateGoal);

//DELETE /api/goals/:id
router.delete('/:id', ensureLoggedIn, goalsCtrl.deleteGoal);

//RETURN View (form) to add a new post
router.get('/:id/edit', ensureLoggedIn, goalsCtrl.editGoal);



module.exports = router;