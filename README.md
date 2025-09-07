# User Management Tool

A full-stack web application for managing a user database with complete CRUD (Create, Read, Update, Delete) functionality. This dashboard provides a clean, responsive user interface built with React and a robust Node.js backend.

## 🔗 Live Demo

- **Frontend Demo**: [https://user-management-tool-1.onrender.com/](https://user-management-tool-1.onrender.com/)
- **Backend API**: [https://user-management-tool-0qps.onrender.com](https://user-management-tool-0qps.onrender.com)

## ✨ Features

- **👥 View All Users**: Clean, tabular display of all users in the database
- **➕ Create Users**: Intuitive form to add new users with name, email, and other details
- **✏️ Update Users**: Easily edit existing user information
- **🗑️ Delete Users**: Remove users from the database with confirmation step
- **📱 Responsive Design**: Fully functional on both desktop and mobile devices
- **📊 Export to Sheets**: Export user data for external use

## 🛠️ Tech Stack

This project is a monorepo containing separate frontend and backend applications.

| Category | Technology |
|----------|------------|
| **Frontend** | React.js, Vite, React Router, Axios, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (hosted on Supabase) |
| **Deployment** | Render (Static Site for Frontend, Web Service for Backend) |

## 🚀 Getting Started (Local Development)

Follow these steps to run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v18.x or later)
- A PostgreSQL database (we recommend [Supabase](https://supabase.com/) for easy setup)

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Rahulgillella22/user-management--tool.git
cd user-management--tool
```

#### 2. Setup the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```bash
# Create a new file named .env in the backend directory
touch .env
```

Add your database connection string to the `.env` file:

```env
# /backend/.env
DATABASE_URL="postgres://user:password@host:port/database"
PORT=5000
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

✅ The backend will be running at `http://localhost:5000`

#### 3. Setup the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Create a `.env.development` file for local development variables:

```env
# /frontend/.env.development
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

Start the frontend development server:

```bash
npm run dev
```

✅ The application will be available at `http://localhost:5173` (or the port shown in your terminal)

## 📚 API Reference

The backend provides the following RESTful API endpoints:

### Base URL
- **Development**: `http://localhost:5000/api/v1`
- **Production**: `https://user-management-tool-0qps.onrender.com/api/v1`

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/users` | Fetches a list of all users | None |
| `GET` | `/users/:id` | Fetches a single user by their ID | None |
| `POST` | `/users` | Creates a new user | `{ name, email, phone?, address? }` |
| `PUT` | `/users/:id` | Updates an existing user's details | `{ name?, email?, phone?, address? }` |
| `DELETE` | `/users/:id` | Deletes a user by their ID | None |

## 🏗️ Project Structure

```
user-management-tool/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🚀 Deployment

### Frontend (Render Static Site)
1. Connect your GitHub repository to Render
2. Set the build command: `cd frontend && npm install && npm run build`
3. Set the publish directory: `frontend/dist`

### Backend (Render Web Service)
1. Connect your GitHub repository to Render
2. Set the build command: `cd backend && npm install`
3. Set the start command: `cd backend && npm start`
4. Add environment variables in Render dashboard

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL=your_postgresql_connection_string
PORT=5000
NODE_ENV=production
```

### Frontend (.env.development / .env.production)
```env
VITE_API_BASE_URL=your_backend_api_url
```




## 🐛 Troubleshooting

### Common Issues

**Backend not connecting to database:**
- Verify your `DATABASE_URL` is correct
- Ensure your database is running and accessible

**Frontend not loading:**
- Check that `VITE_API_BASE_URL` points to the correct backend URL
- Ensure the backend is running before starting the frontend

**CORS errors:**
- Verify CORS is properly configured in the backend
- Check that frontend and backend URLs are correctly set

