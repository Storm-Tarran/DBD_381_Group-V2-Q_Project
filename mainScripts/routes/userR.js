const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/usersC');

// Route to get all users
router.get('/', getUsers);

// Route to get a specific user by ID
router.get('/:id', getUserById);

// Route to create a new user
router.post('/', createUser);

// Route to update an existing user by ID
router.put('/:id', updateUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;