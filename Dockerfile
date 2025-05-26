FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
# Install only production dependencies
RUN npm ci --only=production --silent
# Copy the rest of the application code
COPY . .
EXPOSE 5001
RUN chown -R node /usr/src/app
USER node
CMD ["node", "mainScripts/connect.js"]

