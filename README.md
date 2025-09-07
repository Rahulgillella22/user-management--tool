A full-stack web application for managing a user database. This dashboard provides complete CRUD (Create, Read, Update, Delete) functionality with a clean, responsive user interface built with React and a robust Node.js backend.

Live Frontend Demo: https://user-management-tool-1.onrender.com/

Live Backend API: https://user-management-tool.onrender.com/

## Features
View All Users: A clean, tabular display of all users in the database.

Create Users: An intuitive form to add a new user with name, email, and other details.

Update Users: Easily edit an existing user's information.

Delete Users: Remove a user from the database with a confirmation step.

Responsive Design: The UI is functional on both desktop and mobile devices.

## Tech Stack
This project is a monorepo containing separate frontend and backend applications.

Category	Technology
Frontend	React.js, Vite, React Router, Axios, CSS
Backend	Node.js, Express.js
Database	PostgreSQL (hosted on Supabase)
Deployment	Render (Static Site for Frontend, Web Service for Backend)

Export to Sheets
## Getting Started (Local Development)
To run this project on your local machine, please follow the steps below.

### Prerequisites
Git

Node.js (v18.x or later)

### Installation & Setup
Clone the Repository

Bash

git clone https://github.com/Rahulgillella22/user-management--tool.git
cd user-management--tool
Setup the Backend

Navigate to the backend directory and install dependencies.

Bash

cd backend
npm install
Create a .env file by copying the example.

Bash

# (You can just create a new file named .env)
Add your Supabase database connection string to the .env file.

Code snippet

# /backend/.env
DATABASE_URL="postgres://user:password@host:port/database"
Start the backend server.

Bash

npm run dev
The backend will be running at http://localhost:5000.

Setup the Frontend

Open a new terminal and navigate to the frontend directory.

Bash

cd frontend
npm install
Create a .env.development file for local development variables.

Code snippet

# /frontend/.env.development
VITE_API_BASE_URL=http://localhost:5000/api/v1
Start the frontend development server.

Bash

npm run dev
The application will be available at http://localhost:5173 (or the port shown in the terminal).

## API Reference
The backend provides the following RESTful API endpoints:

Method	Path	Description
GET	/api/v1/users	Fetches a list of all users.
GET	/api/v1/users/:id	Fetches a single user by their ID.
POST	/api/v1/users	Creates a new user.
PUT	/api/v1/users/:id	Updates an existing user's details.
DELETE	/api/v1/users/:id	Deletes a user by their ID.
