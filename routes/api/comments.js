const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST /api/comments/:id/new (create a new comment)
router.post('/:id/comments', ensureLoggedIn, commentsCtrl.createComment);

//GET - /api/comments/:id/new
router.get('/:id/comments', ensureLoggedIn, commentsCtrl.getCommentsById);


module.exports = router;