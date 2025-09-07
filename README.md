Forty4 User Management Tool
A full-stack web application for managing a user database. This dashboard provides complete CRUD (Create, Read, Update, Delete) functionality with a clean, responsive user interface.

Live Demo: Frontend Deployed on Render

Backend API: Backend Deployed on Render

## Tech Stack
This project is a monorepo containing a separate frontend and backend application.

Frontend:

Framework: React.js (with Vite)

Routing: React Router

API Communication: Axios

Styling: Plain CSS

Backend:

Framework: Node.js with Express.js

Architecture: 3-Tier (Controller, Service, Repository)

Middleware: cors for handling cross-origin requests

Database:

PostgreSQL hosted on Supabase

Deployment:

Frontend (Static Site) and Backend (Web Service) are deployed on Render.

## Features
View All Users: A clean, tabular display of all users in the database.

Create Users: An intuitive form to add a new user with name, email, and other details.

Update Users: Edit an existing user's information.

Delete Users: Remove a user from the database with a confirmation step.

Responsive Design: The UI is functional on both desktop and mobile devices.

## Local Setup and Installation
To run this project on your local machine, follow these steps.

### Prerequisites
Node.js (v18.x or later)

Git

### 1. Clone the Repository
Bash

git clone https://github.com/Rahulgillella22/user-management--tool.git
### 2. Backend Setup
Navigate to the backend directory:

Bash

cd backend
Install the dependencies:

Bash

npm install
Create a .env file and add your Supabase database URL:

Code snippet

# /backend/.env
DATABASE_URL="postgres://user:password@host:port/database"
Start the backend server:

Bash

npm run dev
The server will be running at http://localhost:5000.

### 3. Frontend Setup
Open a new terminal and navigate to the frontend directory:

Bash

cd frontend
Install the dependencies:

Bash

npm install
Create a .env.development file to point to your local backend:

Code snippet

# /frontend/.env.development
VITE_API_BASE_URL=http://localhost:5000/api/v1
Start the frontend development server:

Bash

npm run dev

## API Endpoints
The backend provides the following RESTful API endpoints:

Method	Path	Description
GET	/api/v1/users	Fetches a list of all users.
GET	/api/v1/users/:id	Fetches a single user by their ID.
POST	/api/v1/users	Creates a new user.
PUT	/api/v1/users/:id	Updates an existing user's details.
DELETE	/api/v1/users/:id	Deletes a user by their ID.

Export to Sheets
