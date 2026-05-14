# Lotlite School of Real Estate - Full Stack Application

A production-ready React + Node.js application for a real estate MBA program landing page.

## Features

- **Frontend**: Modular React components with Tailwind CSS
- **Backend**: Node.js/Express API with MongoDB
- **State Management**: React Context API
- **Form Handling**: Contact form with validation
- **Responsive Design**: Mobile-first approach

## Quick Start

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   cd backend && npm install
   ```

2. **Set up MongoDB:**

   **Option A: MongoDB Atlas (Recommended)**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a free account and cluster
   - Get your connection string
   - Update `backend/.env`:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/lotlite?retryWrites=true&w=majority
     ```

   **Option B: Local MongoDB**
   - Install MongoDB locally (see below)
   - Use default local connection

3. **Start the application:**
   ```bash
   # Terminal 1: Start backend
   cd backend && npm run dev

   # Terminal 2: Start frontend
   npm run dev
   ```

4. **Open http://localhost:5173**

## MongoDB Installation (Local)

### Windows (using winget)

```bash
# Install MongoDB Server
winget install MongoDB.Server

# Install MongoDB Shell (for testing)
winget install MongoDB.Shell
```

### Verify Installation

```bash
mongod --version
mongosh --version
```

### Start MongoDB Service

```bash
# Windows Service (if installed as service)
net start MongoDB

# Or run manually
mongod --dbpath "C:\data\db"
```

## Project Structure

```
/my-project
├── /src
│   ├── /components       # Reusable React components
│   ├── /constants        # Site content configuration
│   ├── /context          # React Context providers
│   ├── /hooks            # Custom React hooks
│   ├── /services         # API service functions
│   └── App.jsx           # Main app component
├── /backend
│   ├── /controllers      # API route handlers
│   ├── /models           # MongoDB schemas
│   ├── /routes           # Express routes
│   ├── config/           # Database configuration
│   └── server.js         # Express server
└── package.json
```

## API Endpoints

- `GET /api/content` - Get site content
- `POST /api/contact` - Submit contact form

## Development

- Frontend: `npm run dev` (Vite dev server)
- Backend: `cd backend && npm run dev` (Nodemon)
- Build: `npm run build`

## Environment Variables

Create `backend/.env`:

```env
MONGO_URI=mongodb+srv://...
CLIENT_ORIGIN=http://localhost:5173
```

## Deployment

1. Build frontend: `npm run build`
2. Deploy `dist/` folder to static hosting
3. Deploy backend to server (Heroku, Railway, etc.)
4. Update `CLIENT_ORIGIN` in production

## Technologies

- **Frontend**: React, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Validation**: Joi
- **Build**: Vite
- **Development**: ESLint, Nodemon