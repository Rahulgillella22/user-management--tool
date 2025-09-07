// /backend/server.js

const express = require('express');
const cors = require('cors'); // 1. IMPORT THE CORS PACKAGE
require('dotenv').config();

const userRoutes = require('./src/api/routes/user.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARE ---
app.use(cors()); // 2. USE THE CORS MIDDLEWARE
app.use(express.json());

// ---ROUTES---
app.use('/api/v1/users', userRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('User Management API is healthy and running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});