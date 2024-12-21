# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY ./ ./

# Expose a port that your Node.js application will listen on (replace 3000 with your app's port)
EXPOSE 3001

# Start the Node.js application
CMD ["npm", "start"]