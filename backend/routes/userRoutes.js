const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');
const verifyToken = require('../middleware/middleware');

// Get all users
userRouter.get('/getUsers', userController.getAllUsers);

// Get a specific user by ID
userRouter.get('getuser/:id', userController.getUserById);

// Update a user
userRouter.put('getuser/:id', verifyToken, userController.updateUser);

// Delete a user
userRouter.delete('getuser/:id', verifyToken, userController.deleteUser);

//verify user handle
// userRouter.get('/verify-handle/:handle', userController.verifyHandle);


module.exports = userRouter;