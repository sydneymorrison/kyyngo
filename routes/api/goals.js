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


//INDEX - SHOW / api/goals/:id
router.get('/:id', goalsCtrl.getGoalById);


//PUT /api/goals/:id
router.put('/:id', goalsCtrl.updateGoal);

//DELETE /api/goals/:id
router.delete('/:id', goalsCtrl.deleteGoal);

//RETURN View (form) to add a new post
router.get('/:id/edit', goalsCtrl.editGoal);



module.exports = router;