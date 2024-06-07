# Use the official Node.js 18.12.1 image as the base
FROM node:18.12.1

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies, including nodemon
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the working directory to src
WORKDIR /usr/src/app/src

# Expose port 8080 (update to your actual port)
EXPOSE 8080

# Install nodemon globally
RUN npm install -g nodemon

# Define the start command using nodemon
CMD ["nodemon", "index.js"]
