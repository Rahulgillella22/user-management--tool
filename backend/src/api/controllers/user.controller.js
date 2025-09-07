// /backend/src/api/controllers/user.controller.js

const UserService = require('../../services/user.service');

class UserController {
  static async createUser(req, res) {
    try {
      if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: 'Name and email are required fields.' });
      }
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      // This is the debug log we added
      console.error('💥 An error occurred in the createUser controller:', error);
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await UserService.updateUser(id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await UserService.deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
}

module.exports = UserController;