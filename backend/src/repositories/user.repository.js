// /backend/src/repositories/user.repository.js

const db = require('../config/db');
/** @typedef {import('../types/user.types').User} User */

class UserRepository {
  static async create({ name, email, phone, company, address }) {
    const queryText = `
      INSERT INTO users (name, email, phone, company, address)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name, email, phone, company, JSON.stringify(address)];
    const { rows } = await db.query(queryText, values);
    return rows[0];
  }

  static async findAll() {
    const { rows } = await db.query('SELECT * FROM users ORDER BY id ASC;', []);
    return rows;
  }

  static async findById(id) {
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1;', [id]);
    return rows[0];
  }

  static async findByEmail(email) {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1;', [email]);
    return rows[0];
  }

  static async update(id, { name, email, phone, company, address }) {
    const queryText = `
      UPDATE users
      SET name = $1, email = $2, phone = $3, company = $4, address = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [name, email, phone, company, JSON.stringify(address), id];
    const { rows } = await db.query(queryText, values);
    return rows[0];
  }

  static async deleteById(id) {
    const { rows } = await db.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id]);
    return rows[0];
  }
}

module.exports = UserRepository;