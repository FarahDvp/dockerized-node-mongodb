# dockerized-node-mongodb
This is a straightforward Node.js application that enables CRUD (Create, Read, Update, Delete) operations on posts, consisting of a title and content. It leverages Express.js to build the API and MongoDB for data storage.

# Prerequisites
Before you begin, ensure you have the following prerequisites installed on your system:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Node.js (for development)

# Clone the Repository
```bash
git clone https://github.com/your-username/nodejs-crud-mongodb-docker.git
cd nodejs-crud-mongodb-docker
```

# Build and start the application with Docker Compose
docker-compose up --build
The application will be available at http://localhost:3001.

# API Endpoints
GET /get-all-posts: Get a list of all posts.
GET /get-one-post/:id: Get a specific post by ID.
POST /create: Create a new post (requires JSON body with title and content).
PUT /update/:id: Update an existing post by ID (requires JSON body with title and content).
DELETE /delete/:id: Delete a post by ID.
MongoDB Connection
The application is configured to connect to a MongoDB instance named mongo within the Docker Compose network. You can customize the MongoDB connection settings in the configs/MongoConfig.js file if needed.

# Build and start the application without Docker
1- Install Node.js dependencies:
```bash
npm install
npm start
```

# Docker Configuration
- Dockerfile
  The Dockerfile contains instructions to build the Node.js application image. It installs the Node.js dependencies and sets up the application.
- docker-compose.yml
  The docker-compose.yml file defines two services: web (the Node.js application) and mongo (the MongoDB database). It also specifies the network and port mappings for each service.
- .dockerignore
  The .dockerignore file specifies which files and directories should be excluded when building Docker images. It helps keep the image size minimal.
