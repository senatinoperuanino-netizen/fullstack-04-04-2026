# Task Manager

A fullstack task management application built with React and Node.js.

## Tech Stack

### Frontend
- React 19
- Vite
- CSS3

### Backend
- Node.js
- Express
- Sequelize (MySQL)
- JWT Authentication
- Bcrypt
- CORS & Helmet

## Features

- User authentication (register/login)
- JWT-based session management
- CRUD operations for tasks
- RESTful API

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/      # Auth middleware
│   │   ├── models/         # Sequelize models
│   │   ├── routes/         # API routes
│   │   ├── app.js          # Express app
│   │   └── server.js       # Server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   └── App.jsx         # Main app component
    ├── index.html
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL 8.0+

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=3001
DB_NAME=taskmanager
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## License

ISC
