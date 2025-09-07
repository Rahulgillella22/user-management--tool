// /backend/src/config/db.js

const { Pool } = require('pg');
require('dotenv').config();

// --- ADD THIS LOG ---
console.log('💡 DB config: Attempting to create pool with URL:', process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};