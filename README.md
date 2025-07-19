# 🚀 Docker Node.js MongoDB Starter

A modern, production-ready Node.js API starter kit with Docker, MongoDB, and Express.js. This project provides a solid foundation for building scalable REST APIs with proper error handling, validation, and Docker containerization.

## ✨ Features

- **🐳 Docker Containerization** - Easy deployment and development
- **🍃 MongoDB Integration** - Robust database with Mongoose ODM
- **⚡ Express.js Framework** - Fast and minimalist web framework
- **🛡️ Error Handling** - Centralized error management with custom API errors
- **📝 Input Validation** - Schema validation with Joi
- **🔄 Async Operations** - Proper async/await handling with express-async-handler
- **📊 Logging** - HTTP request logging with Morgan
- **🔧 Environment Configuration** - Secure environment variable management
- **📦 Auto-increment IDs** - Sequential ID generation for models

## 🏗️ Project Structure

```
docker-node-mongo-starter/
├── 📁 config/
│   └── database.js          # MongoDB connection configuration
├── 📁 middlewares/
│   └── errorMiddleware.js   # Global error handling middleware
├── 📁 models/
│   ├── salon.js            # Salon data model
│   └── userModels.js       # User data model
├── 📁 routes/
│   ├── salon.js            # Salon API routes
│   └── userRoutes.js       # User API routes
├── 📁 services/
│   └── userService.js      # User business logic
├── 📁 utils/
│   └── ApiError.js         # Custom API error class
├── 🐳 Dockerfile           # Docker container configuration
├── 🐳 docker-compose.yml   # Multi-container Docker setup
├── 📋 Makefile            # Development commands
├── 📦 package.json        # Project dependencies
└── 📖 README.md           # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (for local development)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd docker-node-mongo-starter
```

### 2. Environment Setup

```bash
# Copy the example environment file
cp .env.example .env

# Edit the environment variables as needed
nano .env
```

### 3. Run with Docker (Recommended)

```bash
# Build and start all services
make up

# Or use docker-compose directly
docker-compose up -d
```

### 4. Run Locally (Alternative)

```bash
# Install dependencies
npm install

# Start the development server
npm run start-dev
```

## 🛠️ Available Commands

### Docker Commands (via Makefile)

```bash
make build      # Build Docker images
make up         # Start containers in background
make down       # Stop and remove containers
make restart    # Restart services
make logs       # View container logs
make rebuild    # Rebuild and restart services
make clean      # Remove stopped containers
```

### NPM Scripts

```bash
npm start       # Start production server
npm run start-dev  # Start development server with nodemon
npm test        # Run tests (placeholder)
```

## 📡 API Endpoints

### Users API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | Get all users |
| `POST` | `/users` | Create a new user |
| `GET` | `/users/:id` | Get user by ID |
| `PUT` | `/users/:id` | Update user by ID |
| `DELETE` | `/users/:id` | Delete user by ID |
| `DELETE` | `/users` | Delete all users |

### Salons API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/salons` | Get all salons |
| `POST` | `/salons` | Create a new salon |
| `GET` | `/salons/:id` | Get salon by ID |
| `PUT` | `/salons/:id` | Update salon by ID |
| `DELETE` | `/salons/:id` | Delete salon by ID |
| `DELETE` | `/salons` | Delete all salons |

## 📊 Data Models

### User Model
```javascript
{
  _id: Number,           // Auto-increment ID
  name: String,          // Required
  email: String,         // Required, lowercase
  password: String,      // Required, min 8 chars
  dated: Date           // Auto-generated timestamp
}
```

### Salon Model
```javascript
{
  _id: ObjectId,         // MongoDB ObjectId
  salon_id: Number,      // Required
  name: String,          // Required, 3-10 chars
  description: String,   // Required, 10-1000 chars
  address: String,       // Required, min 3 chars
  phone_number: String,  // Required
  subscription: Boolean, // Required
  password: String,      // Required, min 8 chars
  email: String,         // Required, unique
  dated: Date           // Auto-generated timestamp
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DB_URI=mongodb://mongo:27017/docker-node-mongo

# Server Configuration
PORT=3002

# Environment
NODE_ENV=development
```

### Docker Configuration

The application runs on port `3002` by default. You can modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "3002:3002"  # host:container
```

## 🐛 Error Handling

The application includes a centralized error handling system:

- **Custom API Errors**: Use `ApiError` class for operational errors
- **Global Error Middleware**: Catches and formats all errors
- **Development vs Production**: Stack traces only in development
- **Consistent Response Format**: Standardized error responses

### Error Response Format

```json
{
  "status": 400,
  "message": "Error message here",
  "stack": "Error stack trace (development only)"
}
```

## 🔒 Security Considerations

- Environment variables for sensitive data
- Input validation on all endpoints
- Proper error handling without exposing internals
- MongoDB injection protection via Mongoose
- Password length validation

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in Docker
make test
```

## 📈 Monitoring & Logging

- **HTTP Request Logging**: Morgan middleware for request/response logging
- **Error Logging**: Centralized error logging with stack traces
- **Database Connection**: Connection status logging

## 🚀 Deployment

### Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use production MongoDB instance
3. Configure proper logging
4. Set up monitoring and health checks

### Docker Deployment

```bash
# Build production image
docker build -t my-app .

# Run with production environment
docker run -p 3002:3002 --env-file .env.production my-app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

<div align="center">

**Made with ❤️ for the Node.js community**

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)

</div>