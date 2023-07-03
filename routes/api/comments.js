const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST /api/goals/new (create a new comment)
router.post('/:id/comments', ensureLoggedIn, commentsCtrl.createComment);


module.exports = router;