const express = require('express');
const pool = require('../config/db');

const router = express.Router();

const { getALLUsers, createUser, loginUser, deleteUser } = require('../controllers/userController');

/* @route   GET api/users, POST api/users
 * @desc    Get all users, Create a user
 * @access  Public */
router.get('/', getALLUsers).post('/', createUser);

router.post('/login', loginUser);

router.delete('/:id', deleteUser);



module.exports = router;
