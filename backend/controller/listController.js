const List = require("../models/list");

exports.createListItem = async (req, res) => {
    try {
        const {userId, name, email, phone } = req.body;
        // const createdBy = req.User._id; 
        const newItem = new List({ name, email, phone,   createdBy: userId, });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.getUserList = async (req, res) => {
  try {
    const userList = await List.find().populate("name");
    res.status(200).json(userList);
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the userList." });
  }
};

exports.updateListItem = async (req, res) => {
  try {
    const { id } = req.params; 
    const { name, email, phone } = req.body; 
    const updatedItem = await List.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "List item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a list item
exports.deleteListItem = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID of the item to be deleted
    // Find the list item by ID and delete it

    const deletedItem = await List.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "List item not found" });
    }

    res.status(200).json({ message: "List item deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
