const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// GET /api/profiles
router.get('/profile', profilesCtrl.index);



//POST /api/profiles/new (create a new profile)
router.post('/new', profilesCtrl.create);



//DELETE /api/profiles/:profileId/goals/:goalId (delete item on a profile)
router.delete('/:profileId/goals/:goalId', profilesCtrl.deleteGoal)

module.exports = router;