const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



//POST /api/profiles/new (create a new profile)
router.post('/new', profilesCtrl.create);

module.exports = router;