const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/users', usersController.getUsers)

router.get('/addUser', usersController.addUser)

router.get('updateUser/:id', usersController.updateUser)

router.get('/deleteUser/:id', usersController.deleteUser)

module.exports = router;