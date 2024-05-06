const express = require('express');
const user = require('../Controllers/userController');

//create router
const router = express.Router();

//path for user
router.post('/create', user)

//export router
module.exports = router;