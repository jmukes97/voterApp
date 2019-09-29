// Imported Node Modules
const express = require('express');
const bodyParser = require('body-parser');

// Imported Controllers
const voteController = require('../controllers/VoteController.js');

// Initializing the router
const router = express.Router();

// Middleware to parse the body input from HTML forms
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/test', voteController.storeElectionData);

// exports the router module to be used in the app.js file
module.exports = router;
