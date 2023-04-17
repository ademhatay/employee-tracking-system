const express = require('express');
const pool = require('../config/db');

const router = express.Router();

const { getALLUsers, createUser, loginUser } = require('../controllers/userController');

/* @route   GET api/users, POST api/users
 * @desc    Get all users, Create a user
 * @access  Public */
router.get('/', getALLUsers).post('/', createUser);

router.post('/login', loginUser);



module.exports = router;
