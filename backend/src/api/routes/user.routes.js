// /backend/src/api/routes/user.routes.js

const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

// Route to get all users and create a new user
router.route('/')
  .get(UserController.getUsers)
  .post(UserController.createUser);

// Route to get, update, and delete a single user by their ID
router.route('/:id')
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;