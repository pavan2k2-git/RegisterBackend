
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const User = require('../models/User');

router.post('/register', userController.registerUser);
router.get('/getusers', userController.getUsers);

module.exports = router; 