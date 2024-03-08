const User = require('../models/user');

// Get all users
const getAllUsers = async (req, res) => {

    try {
        const users = await User.find().populate("username");
        res.status(200).json(users);
      } catch (error) {
        console.log("Error:", error);
        res
          .status(500)
          .json({ error: "An error occurred while fetching the userList." });
      }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id, req.body, {
                new: true,
            });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndDelete(id);
        res.json({message: 'User deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};




module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}
