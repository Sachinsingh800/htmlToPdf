FROM ghcr.io/puppeteer/puppeteer:21.5.2

# Set environment variables
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable \
    CHROME_EXECUTABLE=/usr/bin/google-chrome-stable

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install npm dependencies
RUN npm ci

# Copy the rest of the application files to the container
COPY . .

# Command to run the application
CMD ["node", "server.js"]
