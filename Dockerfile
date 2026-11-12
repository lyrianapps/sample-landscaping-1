# Use a supported LTS Node.js image as the base
FROM node:22-slim

# Install required system dependencies, including libvips for sharp
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

RUN chown -R node:node /app
USER node

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
