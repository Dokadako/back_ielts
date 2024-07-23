# Use the official Node.js image from the Docker Hub
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Use the PORT environment variable
ENV PORT=3000

# Expose the port
EXPOSE $PORT

# Define the command to run your app
CMD ["node", "server.js"]
