const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//All paths start with /api/goals

// GET /api/goals
router.get('/', goalsCtrl.index);

//POST /api/goals/new (create a new goal)
router.post('/new', goalsCtrl.create);

module.exports = router;