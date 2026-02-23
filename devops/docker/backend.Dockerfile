FROM node:18
WORKDIR /app
COPY backend/cap .
RUN npm install
CMD ["npm", "start"]
