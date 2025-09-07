// /backend/src/services/user.service.js

const UserRepository = require('../repositories/user.repository');
/** @typedef {import('../types/user.types').User} User */

class UserService {
  static async createUser(userData) {
    const existingUser = await UserRepository.findByEmail(userData.email);
    if (existingUser) {
      const error = new Error('A user with this email already exists.');
      error.statusCode = 409; // Conflict
      throw error;
    }
    return UserRepository.create(userData);
  }

  static async getAllUsers() {
    return UserRepository.findAll();
  }

  static async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }
    return user;
  }

  static async updateUser(id, userData) {
    const userToUpdate = await UserRepository.findById(id);
    if (!userToUpdate) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }
    return UserRepository.update(id, userData);
  }

  static async deleteUser(id) {
    const deletedUser = await UserRepository.deleteById(id);
    if (!deletedUser) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }
    return { message: 'User deleted successfully.' };
  }
}

module.exports = UserService;