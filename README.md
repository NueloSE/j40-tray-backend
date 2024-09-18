# J40-Tray Backend API

This repository handles the backend services for the J40 Food Tray application, which manages restaurant food ordering. The backend provides RESTful APIs to manage users and food items, and process customer orders.

## Table of Contents

1. [Description](#description)
2. [Prerequisites](#features)
3. [Tech-Stack](#tech stack)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [API-Endpoints](#api endpoints)
7. [Contributing](#contributing)

## Description

**J40-Tray** Backend API is designed to handle the business logic of the J40 Food Tray application. It provides endpoints for user authentication, displaying available food items, and placing orders. The application enables guests to view available dishes and allows restaurants to manage their menu and orders.

This repository is responsible for handling:

- User management (create, update, fetch user info)
- Food inventory management
- Order processing
  The backend is built using Express and MongoDB and secured using Auth0 for user authentication.

- [live link](https://j40-tray-backend.onrender.com/health)

## Features

- User authentication using Auth0
- RESTful APIs for managing users and food items
- CRUD operations for users and food
- Secure API access with JWT
- Input validation for API requests

## Tech Stack

- Node.js - Backend runtime environment
- Express.js - Framework for building APIs
- MongoDB - Database for storing user and food data
- Mongoose - ODM for MongoDB
- Auth0 - Authentication provider
- TypeScript - Typed JavaScript for better development experience

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14+)
- MongoDB (MongoDB Atlas)
- Auth0 account for authentication

### Installation

1. clone the repository in the same directory you cloned the frontend repo

```shell
git clone https://github.com/NueloSE/j40-tray-backend.git
cd j40-tray-backend
```

2. Install the dependencies

```bash
npm install
```

3. set up the environment variables. You can refer to the Enviroment Variables section below.

4. Start the development server:

```bash
npm run dev
```

The server will start on http://localhost:8000.

## Environment Variables

1. Set Up Environment Variables
   Copy the .env.example file to a new file named .env:

```bash
cp .env.example .env
```

Open the `.env` file and replace the placeholder values with your actual environment variables. Make sure to include all necessary variables required by the application.

Example `.env` file:

```plaintext
MONGODB_CONNECTION_STRING=your-mongodb-connection-string

#AUTH0
AUTH0_AUDIENCE=your-auth0-audience
AUTH0_ISSUER_BASE_URL=your-auth0-base-url
```

These variables are necessary for connecting to MongoDB and integrating with Auth0 for user authentication.

## API Endpoints

Here are the main API endpoints available in the backend:

### User Routes

- GET /api/my/user - Get the current logged-in user's details
- POST /api/my/user - Create a new user
- PUT /api/my/user - Update the current logged-in user's details

### Health Check

- GET /health - Check if the server is running

## Database Schema

### User Model

```ts
const userSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
});
```

- auth0Id: The unique identifier from Auth0 for the user.
- email: The user's email address.
- name: The user's name.
- address: The user's address (optional).
- phoneNumber: The user's phone number (optional).

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or enhancements, please follow these steps:

1. Fork the Repository
2. Create a New Branch for your changes
3. Commit Your Changes and write a descriptive commit message
4. Push Your Changes to your forked repository
5. Submit a Pull Request
