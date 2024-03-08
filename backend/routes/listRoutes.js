const express = require('express');
const router = express.Router();
const listController = require('../controller/listController');

router.post('/', listController.createListItem);
router.get('/', listController.getUserList);
router.put('/:id', listController.updateListItem); // Update route
router.delete('/:id', listController.deleteListItem); // Define the route for deleting list items


module.exports = router;
